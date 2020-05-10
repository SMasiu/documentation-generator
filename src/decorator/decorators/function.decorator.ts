import { DecoratorRoot } from "./decorator";
import { DecoratorType } from "../decorator.types";

const names: string[] = ['@function'];

export class FunctionDecorator extends DecoratorRoot {

    static getDecoratorNames(): string[] {
        return names;
    }

    root: boolean = true;
    name: string[] = names;
    type: DecoratorType = DecoratorType.function;

    description: string = '';

    constructor(content: string) {
        super(content)
    }

    parseContent() {
        this.description = this.content;
    }

    modifyResponse(obj: {[key: string]: any}) {
        return {...obj};
    }

}