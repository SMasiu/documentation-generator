import { DecoratorType } from "../decorator.types";

export abstract class DecoratorRoot {

    static getDecoratorNames(): string[] {
        return [];
    }

    static matchDecoratorNames(name: string): boolean {
        let names = this.getDecoratorNames();
        return names.findIndex( n => n === name ) === -1 ? false : true;
    }

    abstract root: boolean;
    abstract name: string[];
    abstract type: DecoratorType;

    abstract parseContent(): void;

    constructor(public content: string) { }

}