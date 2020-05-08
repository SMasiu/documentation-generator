import { DecoratorRoot } from "./decorators/decorator";
import { decorators } from "./decorator.provider";
import { badDecoratorError } from "../errors/error-exceptions";

export class UseDecorator {

    decorators: any[] = [];

    constructor() {
        for(let d of decorators) {
            this.provideDecorator(d);
        }
    }

    provideDecorator(decorator: any) {
        this.decorators.push(decorator);
    }

    getDecorator(name: string, content: string): DecoratorRoot | undefined {
        for(let Decorator of this.decorators) {
            if(Decorator.matchDecoratorNames(name)) {
                return new Decorator(content);
            }
        }
    }

}