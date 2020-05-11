import { Structure } from "./structure";
import { DocsMaper } from "../docs-maper";
import { StructureType } from "../docs-maper.types";

export class PropertyStructure extends Structure {
    
    type: StructureType = StructureType.property;

    constructor(maper: DocsMaper) {
        super(maper);
    }

    register() {
        
    }

}