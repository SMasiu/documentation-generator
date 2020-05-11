import { Structure } from "./structure";
import { DocsMaper } from "../docs-maper";
import { StructureType } from "../docs-maper.types";

export class MethodStructure extends Structure {

    type: StructureType = StructureType.method;

    constructor(maper: DocsMaper) {
        super(maper);
    }

    register() {
        
    }

}