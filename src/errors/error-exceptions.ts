import { configFileName } from "../conf";

export const internalError = () => new Error('Somethin goes wrong');

export const configExistsError = () => new Error(`${configFileName} alredy exists`);

export const missingConfigError = () => new Error(`${configFileName} is missing in current directory`);