import { LanguageReader } from './language-reader';

export class JavascriptReader extends LanguageReader {

    constructor(path: string) {
        super(path);
    }

    static resolveExtensions(): string[] {
        return ['.js', '.ts'];
    }

    getCommentsBlocks(fileData: string[]): string[] {

        let blocks: string[] = [];
        let block: string = '';
        for(let line of fileData) {
            if(!block.length && line.search(/^\/\//) === 0) {
                blocks.push(line);
            } else if(line.search(/^\/\*/) === 0) {
                block += line;
                if(line.search(/\*\/$/) !== -1) {
                    blocks.push(block);
                    block = '';
                }
            } else if (line.search(/\*\/$/) !== -1) {
                block += line;
                blocks.push(block);
                block = '';
            } else if (block.length) {
                block += line;
            }
        }

        return blocks;
    }

}
