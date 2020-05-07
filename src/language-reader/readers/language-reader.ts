import { join } from 'path';
import { createReadStream, ReadStream } from 'fs';
import { internalError } from '../../errors/error-exceptions';

interface Directives {
    name: string;
    content: string;
}

export abstract class LanguageReader {
    
    extension: string = '';
    absolutePath: string;
    commentBlocks: string[] = [];
    directives: Directives[] = [];

    constructor(public path: string) {
        this.absolutePath = join(process.cwd(), this.path);
        this.getFileExtension();
    }
    
    abstract getCommentsBlocks(fileData: string[]): string[];

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

    readFile(): Promise<void> {
        return new Promise((resolve, reject) => {
            const stream: ReadStream = createReadStream(this.absolutePath)
                .on('data', (chunc: Buffer) => {
                    const fileData = chunc.toString().split('\n').map( c => c.trim() );
                    this.commentBlocks = this.getCommentsBlocks(fileData);
                    this.getDirectives();
                })
                .on('error', (err) => {
                    return reject(internalError());
                })
                .on('end', () => {
                    return resolve();
                });
        });
    }

    getDirectives() {
        let directives: string[] = [];
        for(let line of this.commentBlocks) {
            let directive: string = '';
            let read: boolean = false;
            let charBefore: string = '';
            for(let char of line) {
                if(char === '@') {
                    read = true;
                    directive += char;
                } else if (read) {
                    if(charBefore !== '\\' && char === ';') {
                        directives.push(directive);
                        directive = '';
                        read = false;
                    } else {
                        directive += char;
                    }
                }
                charBefore = char;
            }
        }
        this.directives = directives.map( d => {
            let splited = d.split(' ');
            return {
                name: splited?.[0] || '',
                content: splited?.[1] || ''
            }
        })
        console.log(this.directives)
    }

}