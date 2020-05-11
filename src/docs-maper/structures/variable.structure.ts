import { Structure } from "./structure";
import { DocsMaper } from "../docs-maper";
import { StructureType } from "../docs-maper.types";

export class VariableStructure extends Structure {
    
    type: StructureType = StructureType.variable;

    constructor(maper: DocsMaper) {
        super(maper);
    }

    register() {
        this.maper.registerVariable(this);
        this.maper.registerStructure(this);
    }

}