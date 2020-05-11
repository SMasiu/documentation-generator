import { Structure } from "./structure";
import { DocsMaper } from "../docs-maper";
import { StructureType } from "../docs-maper.types";

export class FileStructure extends Structure {
    
    path: string = '';
    type: StructureType = StructureType.file;

    constructor(maper: DocsMaper) {
        super(maper);
    }

    register() {
        this.maper.registerFile(this);
    }   

}