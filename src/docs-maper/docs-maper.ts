import { FileStructure } from "./structures/file.structure";
import { ClassStructure } from "./structures/class.structure";
import { FunctionStrucrure } from "./structures/function.structure";
import { VariableStructure } from "./structures/variable.structure";
import { DecoratorType } from "../decorator/decorator.types";
import { DecoratorRoot } from "../decorator/decorators/decorator";
import { Structure } from "./structures/structure";
import { MethodStructure } from "./structures/method.structure";
import { PropertyStructure } from "./structures/property.structure";
import { RawObjectType } from "./docs-maper.types";

export class DocsMaper {

    structures: Structure[] = [];
    files: FileStructure[] = [];
    classes: ClassStructure[] = [];
    functions: FunctionStrucrure[] = [];
    variables: VariableStructure[] = [];

    registerStructure(structure: Structure) {
        this.structures.push(structure);
    }

    registerFile(file: FileStructure) {
        this.files.push(file);
    }

    registerClass(classStructure: ClassStructure) {
        this.classes.push(classStructure);
    }

    registerFunction(funct: FunctionStrucrure) {
        this.functions.push(funct);
    }

    registerVariable(v: VariableStructure) {
        this.variables.push(v);
    }

    generateRawObject(): RawObjectType {
        let rawObject: RawObjectType = {  structures: [], files: [], classes: [], functions: [], variables: [] };
        this.files.forEach( f => rawObject.files.push({ path: f.path, structures: f.structures.map( i => i.id ) }));
        this.classes.forEach( c => rawObject.classes.push(c.id) );
        this.functions.forEach( f => rawObject.functions.push(f.id) );
        this.variables.forEach( v => rawObject.variables.push(v.id) );
        this.structures.forEach( s => rawObject.structures.push({ id: s.id, content: {...s.getContent()} }))

        return rawObject;
    }

    generateStructure(maper: DocsMaper, decorators: DecoratorRoot[]) {
        if(decorators.length) {
            let fileStructure = new FileStructure(maper);
            let lastClass: ClassStructure | null = null;
            let lastStructure: Structure | null = null;
            for(let dec of decorators) {
                if(dec.root) {
                    if(dec.type === DecoratorType.class) {
                        lastClass = new ClassStructure(maper);
                        lastClass.appendDecorator(dec);
                        lastStructure = lastClass;
                        fileStructure.appendStructure(lastClass);
                    } else if(lastClass && dec.type === DecoratorType.method) {
                        let methodStructure = new MethodStructure(maper);
                        lastStructure = methodStructure;
                        methodStructure.appendDecorator(dec);
                        (<ClassStructure>lastClass).appendStructure(methodStructure);
                    } else if(lastClass && dec.type === DecoratorType.property) {
                        let propertyStructure = new PropertyStructure(maper);
                        lastStructure = propertyStructure;
                        propertyStructure.appendDecorator(dec);
                        (<ClassStructure>lastClass).appendStructure(propertyStructure);
                    } else if(dec.type === DecoratorType.function) {
                        let functionStructure = new FunctionStrucrure(maper);
                        lastStructure = functionStructure;
                        functionStructure.appendDecorator(dec);
                        fileStructure.appendStructure(functionStructure);
                    } else if(dec.type === DecoratorType.variable) {
                        let variableStructure = new VariableStructure(maper);
                        lastStructure = variableStructure;
                        variableStructure.appendDecorator(dec);
                        fileStructure.appendStructure(variableStructure);
                    }
                } else {
                    if(lastStructure !== null) {
                        lastStructure.appendDecorator(dec);
                    }
                }
            }
        }
    }

}