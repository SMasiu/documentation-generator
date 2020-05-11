import { DecoratorRoot } from "./decorator";
import { DecoratorType } from "../decorator.types";

const names: string[] = ['@variable'];

export class VariableDecorator extends DecoratorRoot {

    static getDecoratorNames(): string[] {
        return names;
    }

    root: boolean = true;
    name: string[] = names;
    type: DecoratorType = DecoratorType.variable;

    private variableName: string = '';

    constructor(content: string) {
        super(content)
    }

    parseContent() {
        this.variableName = this.content;
    }

    modifyResponse(obj: {[key: string]: any}) {
        return {...obj, name: this.variableName, structureType: this.type};
    }

}