import { Structure } from "./structure";
import { DocsMaper } from "../docs-maper";
import { StructureType } from "../docs-maper.types";

export class FunctionStrucrure extends Structure {

    type: StructureType = StructureType.function;

    constructor(maper: DocsMaper) {
        super(maper);
    }

    register() {
        this.maper.registerFunction(this);
        this.maper.registerStructure(this);
    }

}