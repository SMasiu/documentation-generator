import { Structure } from "./structure";
import { DocsMaper } from "../docs-maper";

export class FileStructure extends Structure {
    
    constructor(maper: DocsMaper) {
        super(maper);
    }

    register() {
        this.maper.registerFile(this);
    }   

}