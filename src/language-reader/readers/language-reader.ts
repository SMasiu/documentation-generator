import { join } from 'path';
import { createReadStream, ReadStream } from 'fs';

export abstract class LanguageReader {
    
    extension: string = '';
    absolutePath: string;

    constructor(public path: string) {
        this.absolutePath = join(process.cwd(), this.path);
        this.getFileExtension();
    }

    abstract readFile(): any;

    static resolveExtensions(): string[] {
        return [];
    }

    static matchResolvingExtensions(path: string): boolean {
        const extensions: string[] = this.resolveExtensions();
        for(let e of extensions) {
            if(path.search(new RegExp(`${e}$`)) !== -1) {
                return true;
            }
        }
        return false;
    }

    getFileExtension(): void {
        const { path } = this;
        this.extension = path.substring(path.lastIndexOf('.'), path.length);
    }

    loadFileData() {
        const stream: ReadStream = createReadStream(this.absolutePath)
        .on('data', (chunc: Buffer) => {
            console.log(chunc.toString().split('\n').map( c => c.trim() ));
        })
        .on('error', (err) => {

        })
        .on('end', () => {
            console.log('end read')
        })

    }

}