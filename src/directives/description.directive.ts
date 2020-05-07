import { DirectiveRoot } from "./directive";
import { DirectiveType } from "./directive.types";

export class DescriptionDirective extends DirectiveRoot {

    root: boolean = false;
    name: string[] = ['@description'];
    type: DirectiveType = DirectiveType.any;
    content: string = '';

    description: string = '';

    parseContent() {
        this.description = this.content;
    }

    onBuild(): string {
        return this.description;
    }

}