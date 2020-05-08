import { DingoConfig } from "../config/config.type";
import { DocsMaper } from "../docs-maper/docs-maper";
import { internalError } from "../errors/error-exceptions";
import glob from 'glob';
import { UseLanguageReader } from "../language-reader/use-language-reader";
import { LanguageReader } from "../language-reader/readers/language-reader";

interface FoldersMatch {
    simple: string[];
    multiple: string[];
}

interface FileMatch {
    ext: string[];
    filePath: string[];
}

export class Reader {
    
    constructor(private config: DingoConfig) { }

    readEntry(): Promise<DocsMaper> {
        return new Promise(async (resolve, reject) => {
            try {
                let maper = new DocsMaper();

                const files = await this.getFilePaths();
                
                let useLanguageReader = new UseLanguageReader();

                for(let file of files) {
                    let reader: LanguageReader = await useLanguageReader.getLanguageReader(file);
                    let decorators = await reader.readFile();
                    console.log(decorators)
                }

            } catch {
                return reject(internalError());
            }
        });
    }

    getFilePaths(): Promise<string[]> {
        return new Promise((resolve, reject) => {
            
            const files = this.getFileMath();
            const folders = this.getFolderMath();
            let ext: string = '';
            let simpleFolders: string = '';

            files.ext.forEach( e => ext += `${e}|` );
            ext = ext.substring(0, ext.length - 1);
            
            folders.simple.forEach( s => simpleFolders += `${s}|` );
            simpleFolders = simpleFolders.substring(0, simpleFolders.length - 1);

            glob(`!(${simpleFolders})/**/!(${ext})`,{
                nodir: true,
            }, (err: Error | null, globFiles: string[]) => {
                if(err) {
                    return reject(internalError());
                }

                const matchedFiles: string[] = [];

                globFiles.forEach( f => {
                    if(
                        (files.filePath.findIndex( e => e === f ) === -1) &&
                        (folders.multiple.findIndex( p => f.search(new RegExp(`^${p}`)) === 0 ))
                    ) {
                        matchedFiles.push(f);
                    }
                });

                return resolve(matchedFiles);
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