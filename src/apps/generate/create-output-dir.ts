import { aMkdir } from '../../async-fs/async-fs';
import { join } from 'path'
import { internalError } from '../../errors/error-exceptions';

export const createOutputDir = (path: string): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        try {
            await aMkdir(join(process.cwd(), path), { recursive: true });
            return resolve(path);
        } catch {
            return reject(internalError());
        }
    });
}