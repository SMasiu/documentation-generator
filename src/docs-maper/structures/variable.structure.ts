import { Structure } from "./structure";
import { DocsMaper } from "../docs-maper";

export class VariableStructure extends Structure {
    
    constructor(maper: DocsMaper) {
        super(maper);
    }

    register() {
        this.maper.registerVariable(this);
        this.maper.registerStructure(this);
    }

}