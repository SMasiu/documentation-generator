import { DecoratorRoot } from "./decorator";
import { DecoratorType } from "./decorator.types";

export class DescriptionDecorator extends DecoratorRoot {

    root: boolean = false;
    name: string[] = ['@description'];
    type: DecoratorType = DecoratorType.any;
    content: string = '';

    description: string = '';

    parseContent() {
        this.description = this.content;
    }

}