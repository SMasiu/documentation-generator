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

    private propertyName: string = '';

    constructor(content: string) {
        super(content);
    }

    parseContent() {
        this.propertyName = this.content;
    }

    modifyResponse(obj: {[key: string]: any}) {
        return {...obj, name: this.propertyName};
    }

}