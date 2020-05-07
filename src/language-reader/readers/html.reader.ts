import { LanguageReader } from './language-reader';

export class HtmlReader extends LanguageReader {

    constructor(path: string) {
        super(path);
    }

    static resolveExtensions(): string[] {
        return ['.html'];
    }

    getCommentsBlocks(fileData: string[]): string[] {
        return [];
    }

}