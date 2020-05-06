import { DingoConfig } from "../config/config.type";
import { DocsMaper } from "../docs-maper/docs-maper";
import { internalError } from "../errors/error-exceptions";
import glob from 'glob';

interface FoldersMatch {
    simple: string[];
    multiple: string[];
}

interface FileMatch {
    ext: string[];
    filePath: string[];
}

export class Reader {
    
    private path: string;

    constructor(private config: DingoConfig) {
        this.path = process.cwd();
    }


    readEntry(): Promise<DocsMaper> {
        return new Promise(async (resolve, reject) => {
            try {
                let maper = new DocsMaper();

                await this.getFilePaths();
            } catch {
                return reject(internalError());
            }
        });
    }


    readFile(): Promise<void> {
        return new Promise(async (resolve, reject) => {

        });
    }

    getFilePaths(): Promise<string[]> {
        return new Promise((resolve, reject) => {
            
            console.log(this.getFileMath())
            console.log(this.getFolderMath())

            glob('!(node_modules|docs)/**/!(*.d.ts|*.css)',{
                nodir: true,
            }, (err: Error | null, files: string[]) => {
                if(err) {
                    return reject(internalError());
                }
                
                console.log(files)
                return resolve(files);
            });
        });
    }

    getFileMath(): FileMatch {

        const { exclude } = this.config.entry.files;
        const files: FileMatch = { ext: [], filePath: [] };

        exclude.forEach( e => {
            files[e?.[0] === '*' ? 'ext' : 'filePath'].push(e);
        });

        return files;
    }

    getFolderMath(): FoldersMatch {

        const { exclude } = this.config.entry.paths;
        const folders: FoldersMatch = { simple: [], multiple: [] };

        exclude.forEach( e => {
            folders[e.search(/\//) !== -1 ? 'multiple' : 'simple'].push(e);
        });

        return folders;

    }

}