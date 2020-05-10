import { Structure } from "./structure";
import { DocsMaper } from "../docs-maper";

export class ClassStructure extends Structure {

    constructor(maper: DocsMaper) {
        super(maper);
    }

    register() { 
        this.maper.registerClass(this);
    }

}