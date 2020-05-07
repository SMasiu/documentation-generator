import { LanguageReader } from './language-reader';

export class CssReader extends LanguageReader {

    constructor(path: string) {
        super(path);
    }

    static resolveExtensions(): string[] {
        return ['.css'];
    }

    getCommentsBlocks(fileData: string[]) {
        return [];
    }

}