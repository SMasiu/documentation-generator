import { DecoratorRoot } from "./decorator";
import { DecoratorType } from "../decorator.types";

const names: string[] = ['@description'];

export class DescriptionDecorator extends DecoratorRoot {

    static getDecoratorNames(): string[] {
        return names;
    }

    root: boolean = false;
    name: string[] = names;
    type: DecoratorType = DecoratorType.any;
    content: string = '';

    description: string = '';

    constructor(content: string) {
        super(content)
    }

    parseContent() {
        this.description = this.content;
    }

}