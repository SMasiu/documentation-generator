import { LanguageReader } from './language-reader';

export class HtmlReader extends LanguageReader {

    static resolveExtensions(): string[] {
        return ['.html'];
    }

}