import { languageReaderProvider } from './language-reader.provider';
import { internalError } from '../errors/error-exceptions';

export class UseLanguageReader {
    
    readers: any[] = [];

    private provideReader(reader: any) {
        this.readers.push(reader);
    }

    constructor() {
        for(let reader of languageReaderProvider) {
            this.provideReader(reader);
        }
    }

    getLanguageReader(path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            for(let Reader of this.readers) {
                if(Reader.matchResolvingExtensions(path)) {
                    return resolve(new Reader(path));
                }
            }
            return reject(internalError());
        });
    }

}