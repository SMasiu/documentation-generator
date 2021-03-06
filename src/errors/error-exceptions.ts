import { configFileName } from "../conf";

export const internalError = () => new Error('Something goes wrong');

export const badDecoratorError = () => new Error('Bad decorator name');

export const configExistsError = () => new Error(`${configFileName} alredy exists`);

export const missingConfigError = () => new Error(`${configFileName} is missing in current directory`);