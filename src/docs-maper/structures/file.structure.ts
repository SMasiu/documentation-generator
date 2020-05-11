import { Structure } from "./structure";
import { DocsMaper } from "../docs-maper";

export class FileStructure extends Structure {
    
    path: string = '';

    constructor(maper: DocsMaper) {
        super(maper);
    }

    register() {
        this.maper.registerFile(this);
    }   

}