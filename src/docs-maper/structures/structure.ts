import { DocsMaper } from "../docs-maper";
import { DecoratorRoot } from "../../decorator/decorator";

export abstract class Structure {

    decorators: DecoratorRoot[] = [];

    constructor(private maper: DocsMaper) { }

    abstract register(): void;

    appendDecorator() { }

}