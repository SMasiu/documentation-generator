import { Structure } from "./structure";
import { DocsMaper } from "../docs-maper";
import { StructureType } from "../docs-maper.types";

export class ClassStructure extends Structure {

    type: StructureType = StructureType.class;

    constructor(maper: DocsMaper) {
        super(maper);
    }

    register() { 
        this.maper.registerClass(this);
        this.maper.registerStructure(this);
    }

    appendToContent(): {[key: string]: any} {
        let properties: {[key: string]: any}[] = [];
        let methods: {[key: string]: any}[] = [];

        this.structures.forEach( s => {
            if(s.type === StructureType.method) {
                methods.push(s.getContent());
            } else if (s.type === StructureType.property) {
                properties.push(s.getContent());
            }
        });
        return { properties, methods }
    }

}