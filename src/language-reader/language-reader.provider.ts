import { JavascriptReader } from "./readers/javascript.reader";
import { CssReader } from "./readers/css.reader";
import { HtmlReader } from "./readers/html.reader";


export const languageReaderProvider: any[] = [
    JavascriptReader,
    CssReader,
    HtmlReader
];