import { DecoratorRoot } from "./decorator";
import { DecoratorType } from "../decorator.types";

const names: string[] = ['@method'];

export class MethodDecorator extends DecoratorRoot {

    static getDecoratorNames(): string[] {
        return names;
    }

    root: boolean = true;
    name: string[] = names;

    type: DecoratorType = DecoratorType.method;

    private methodName: string = '';

    constructor(content: string) {
        super(content);
    }

    parseContent() {
        this.methodName = this.content;    
    }

    modifyResponse(obj: {[key: string]: any}) {
        return {...obj};
    }

}