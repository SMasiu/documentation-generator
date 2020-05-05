import { DingoConfig } from "../config/config.type";
import { DocsMaper } from "../docs-maper/docs-maper";
import { aReadDir, aLstat } from "../async-fs/async-fs";
import { Stats } from "fs";
import { join } from 'path';
import { internalError } from "../errors/error-exceptions";

export class Reader {
    
    private path: string;

    constructor(private config: DingoConfig) {
        this.path = process.cwd();
    }


    readEntry(): Promise<DocsMaper> {
        return new Promise(async (resolve, reject) => {
            try {
                let maper = new DocsMaper();

                await this.readEntryRecursive(maper, this.path);
            } catch {
                return reject(internalError());
            }
        });
    }

    readEntryRecursive(maprer: DocsMaper, path: string): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                const dirContent = await aReadDir(path);
                
                const { folders, files } = await this.sliceFolderToRead(dirContent, path);
                
                console.log({ folders, files })
            
                for(let folder of folders) {
                    await this.readEntryRecursive(maprer, join(path, folder));
                }
                return resolve();
            } catch {
                return reject(internalError());
            }
        });
    }

    readFile(): Promise<void> {
        return new Promise(async (resolve, reject) => {

        });
    }

    sliceFolderToRead(dirContent: string[], path: string): Promise<{folders: string[], files: string[]}> {
        return new Promise(async (resolve, reject) => {
            try {
                const files: string[] = [];
                const folders: string[] = [];

                for(let f of dirContent) {
                    const stats: Stats = await aLstat(join(path, f));

                    if(stats.isFile()) {
                        if(this.canReadFile(f, path)) {
                            files.push(f);
                        }
                    } else if (stats.isDirectory()) {
                        if(this.canReadFolder(f, path)) {
                            folders.push(f);
                        }
                    }
                }

                return resolve({folders, files});
            } catch {
                return reject(internalError());
            }
        });
    }

    canReadFolder(folder: string, path: string): boolean {
        const absPath = this.getAbsPath(path, folder);
        let { include, exclude } = this.config.entry.paths;

        if((typeof include === 'string' && include === '*') || (<Array<string>>include)?.find?.( i => absPath.search(new RegExp(`^${i}`)) === 0 ))  {
            return exclude.findIndex( e => e === folder ) === -1 ? true : false;
        }
        return false;
    }

    canReadFile(file: string, path: string): boolean {
        const { exclude } = this.config.entry.files;
        let absPath = this.getAbsPath(path, file);
        // console.log(absPath)

        for(let excl of exclude) {
            if(excl.search(/\*/) === -1) {
                if(absPath === excl) { return false; }
            } else if(excl?.[0] === '*') {
                if(file.search(new RegExp(`${excl.substring(1, excl.length)}$`)) !== -1) { return false; }
            }
        }

        return true;
    }

    getAbsPath(path: string, file: string): string {
        return join(path, file).substring(this.path.length + 1, path.length + path.length);
    }

}