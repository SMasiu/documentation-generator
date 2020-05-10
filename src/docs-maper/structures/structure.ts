import { DocsMaper } from "../docs-maper";
import { DecoratorRoot } from "../../decorator/decorators/decorator";

export abstract class Structure {

    decorators: DecoratorRoot[] = [];
    structures: Structure[] = [];

    constructor(public maper: DocsMaper) {
        this.register();
    }

    abstract register(): void;

    appendDecorator(decorator: DecoratorRoot) {
        this.decorators.push(decorator);
    }

    appendStructure(structure: Structure) {
        this.structures.push(structure);
    }

}