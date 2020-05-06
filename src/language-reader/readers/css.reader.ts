import { LanguageReader } from './language-reader';

export class CssReader extends LanguageReader {

    constructor(path: string) {
        super(path);
    }

    static resolveExtensions(): string[] {
        return ['.css'];
    }

    readFile() {
        this.loadFileData();
    }

}