import { LanguageReader } from './language-reader';

export class CssReader extends LanguageReader {

    static resolveExtensions(): string[] {
        return ['.css'];
    }

}