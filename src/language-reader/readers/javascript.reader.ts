import { LanguageReader } from './language-reader';

export class JavascriptReader extends LanguageReader {
    
    constructor(path: string) {
        super(path);
    }

    static resolveExtensions(): string[] {
        return ['.js', '.ts'];
    }

    readFile() {
        this.loadFileData();
    }

}