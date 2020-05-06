export abstract class LanguageReader {
    
    extension: string = '';

    static resolveExtensions(): string[] {
        return [];
    }

    static matchResolvingExtensions(path: string): boolean {
        const extensions: string[] = this.resolveExtensions();
        for(let e of extensions) {
            if(path.search(new RegExp(`${e}$`)) !== -1) {
                return true;
            }
        }
        return false;
    }

}