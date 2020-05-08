import { DecoratorRoot } from "./decorator";
import { DecoratorType } from "./decorator.types";

export class ClassDecorator extends DecoratorRoot {

    root: boolean = true;
    name: string[] = ['@class'];
    type: DecoratorType = DecoratorType.class;
    content: string = '';

    description: string = '';

    parseContent() {
        this.description = this.content;
    }

}