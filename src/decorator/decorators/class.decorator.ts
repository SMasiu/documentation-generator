import { DecoratorRoot } from "./decorator";
import { DecoratorType } from "../decorator.types";

const names: string[] = ['@class'];

export class ClassDecorator extends DecoratorRoot {

    static getDecoratorNames(): string[] {
        return names;
    }

    root: boolean = true;
    name: string[] = names;
    type: DecoratorType = DecoratorType.class;

    private className: string = '';

    constructor(content: string) {
        super(content)
    }

    parseContent() {
        this.className = this.content;
    }

    modifyResponse(obj: {[key: string]: any}) {
        return {...obj, name: this.className, structureType: this.type};
    }

}