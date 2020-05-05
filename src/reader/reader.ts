import { DingoConfig } from "../config/config.type";
import { DocsMaper } from "../docs-maper/docs-maper";
import { aReadDir, aLstat } from "../async-fs/async-fs";
import { Stats } from "fs";
import { join } from 'path';
import { internalError } from "../errors/error-exceptions";
import glob from 'glob';

export class Reader {
    
    private path: string;

    constructor(private config: DingoConfig) {
        this.path = process.cwd();
    }


    readEntry(): Promise<DocsMaper> {
        return new Promise(async (resolve, reject) => {
            try {
                let maper = new DocsMaper();

                // await this.readEntryRecursive(maper, this.path);

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

}