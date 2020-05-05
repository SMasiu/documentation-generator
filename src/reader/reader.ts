import { DingoConfig } from "../config/config.type";
import { DocsMaper } from "../docs-maper/docs-maper";
import { aReadDir, aLstat } from "../async-fs/async-fs";
import { Stats } from "fs";
import { join } from 'path';
import { internalError } from "../errors/error-exceptions";

export class Reader {
    
    private path: string;
    private readLevel: number = 0;

    constructor(private config: DingoConfig) {
        this.path = process.cwd();
    }


    readEntry(): Promise<DocsMaper> {
        return new Promise(async (resolve, reject) => {
            try {
                this.readLevel = 0;
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
                        if(this.matchFileToRead(f)) {
                            files.push(f);
                        }
                    } else if (stats.isDirectory()) {
                        if(!this.isInExcludeFolder(f)) {
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

    isInExcludeFolder(folder: string): boolean {
        return this.config.entry.paths.exclude.findIndex( e => e === folder ) === -1 ? false : true;
    }

    matchFileToRead(file: string): boolean {
        let splited = file.split('.');
        
        let sufix = `.${splited[splited.length - 1]}`;

        return this.config.entry.files.exclude.findIndex( e => e === sufix ) === -1 ? true : false;
    }

}