import { DecoratorRoot } from "./decorator";
import { DecoratorType } from "../decorator.types";

const names: string[] = ['@property'];

export class PropertyDecorator extends DecoratorRoot {

    static getDecoratorNames(): string[] {
        return names;
    }

    root: boolean = true;
    name: string[] = names;

    type: DecoratorType = DecoratorType.property;

    constructor(content: string) {
        super(content);
    }

    parseContent() {
        
    }

    modifyResponse(obj: {[key: string]: any}) {
        return {...obj};
    }

}