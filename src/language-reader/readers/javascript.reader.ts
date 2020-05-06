import { LanguageReader } from './language-reader';

export class JavascriptReader extends LanguageReader {
    
    static resolveExtensions(): string[] {
        return ['.js', '.ts'];
    }

}