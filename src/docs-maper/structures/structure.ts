import { v4 as uuidv4 } from 'uuid';
import { DocsMaper } from "../docs-maper";
import { DecoratorRoot } from "../../decorator/decorators/decorator";

export abstract class Structure {

    id: string;
    decorators: DecoratorRoot[] = [];
    structures: Structure[] = [];
    
    constructor(public maper: DocsMaper) {
        this.id = uuidv4();
        this.register();
    }

    abstract register(): void;

    appendDecorator(decorator: DecoratorRoot) {
        this.decorators.push(decorator);
    }

    appendStructure(structure: Structure) {
        this.structures.push(structure);
    }

    getContent(): {[key: string]: any} {
        let content: {[key: string]: any} = {};

        for(let d of this.decorators) {
            content = d.modifyResponse(content);
        }

        return content;
    }

}