import { DocsMaper } from "../docs-maper";

export abstract class Structure {

    constructor(private maper: DocsMaper) { }

    abstract register(): void;

}