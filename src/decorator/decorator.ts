import { DecoratorType } from "./decorator.types";

export abstract class DecoratorRoot {

    abstract root: boolean;
    abstract name: string[];
    abstract type: DecoratorType;
    abstract content: string;

    abstract parseContent(): void;

}