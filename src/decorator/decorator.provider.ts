import { ClassDecorator } from "./decorators/class.decorator";
import { DescriptionDecorator } from "./decorators/description.decorator";
import { MethodDecorator } from "./decorators/method.decorator";
import { PropertyDecorator } from "./decorators/property.decorator";
import { TypeDecorator } from "./decorators/type.decorator";
import { FunctionDecorator } from "./decorators/function.decorator";
import { VariableDecorator } from "./decorators/varibale.cecorator";

export const decorators: any[] = [
    ClassDecorator,
    MethodDecorator,
    PropertyDecorator,
    FunctionDecorator,
    VariableDecorator,
    DescriptionDecorator,
    TypeDecorator
];