import { DecoratorRoot } from "./decorator";
import { DecoratorType } from "../decorator.types";

const names: string[] = ['@type'];

export class TypeDecorator extends DecoratorRoot {

    static getDecoratorNames(): string[] {
        return names;
    }

    root: boolean = false;
    name: string[] = names;

    type: DecoratorType = DecoratorType.any;

    constructor(content: string) {
        super(content);
    }

    parseContent() {

    }

    modifyResponse(obj: {[key: string]: any}) {
        return {...obj};
    }

}