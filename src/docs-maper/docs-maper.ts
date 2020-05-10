import { FileStructure } from "./structures/file.structure";
import { ClassStructure } from "./structures/class.structure";
import { FunctionStrucrure } from "./structures/function.structure";
import { VariableStructure } from "./structures/variable.structure";

export class DocsMaper {

    files: FileStructure[] = [];
    classes: ClassStructure[] = [];
    functions: FunctionStrucrure[] = [];
    veriables: VariableStructure[] = [];

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
        this.veriables.push(v);
    }

}