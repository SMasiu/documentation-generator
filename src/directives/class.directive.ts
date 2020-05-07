import { DirectiveRoot } from "./directive";
import { DirectiveType } from "./directive.types";

export class ClassDirective extends DirectiveRoot {

    root: boolean = true;
    name: string[] = ['@class'];
    type: DirectiveType = DirectiveType.class;
    content: string = '';

    description: string = '';

    parseContent() {
        this.description = this.content;
    }

    onBuild(): string {
        return this.description;
    }

}