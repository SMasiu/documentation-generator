import { DirectiveType } from "./directive.types";

export abstract class DirectiveRoot {

    abstract name: string;
    abstract type: DirectiveType;
    abstract content: string;

    abstract parseContent(): void;
    abstract onBuild(): string;

}