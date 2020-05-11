import { Structure } from "./structure";
import { DocsMaper } from "../docs-maper";

export class FunctionStrucrure extends Structure {

    constructor(maper: DocsMaper) {
        super(maper);
    }

    register() {
        this.maper.registerFunction(this);
        this.maper.registerStructure(this);
    }

}