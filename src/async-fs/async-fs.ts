import { mkdir, exists, MakeDirectoryOptions, writeFile, readFile } from 'fs';
import { internalError } from '../errors/error-exceptions';

export const aMkdir = (path: string, optrions: MakeDirectoryOptions = {}): Promise<string> => {
    return new Promise((resolve, reject) => {
        mkdir(path, optrions, (err: Error | null) => {
            return err ? reject(internalError()) : resolve(path);
        });
    });
}

export const aExists = (path: string): Promise<boolean> => {
    return new Promise((resolve) => {
        exists(path, (e: boolean) => resolve(e));
    });
}

export const aWriteFile = (path: string, data: string | Buffer): Promise<string> => {
    return new Promise((resolve, reject) => {
        writeFile(path, data, (err: Error | null) => {
            return err ? reject(internalError()) : resolve(path);
        });
    });
}

export const aReadFile = (path: string): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
        readFile(path, (err: Error | null, buffer: Buffer) => {
            return err ? reject(internalError()) : resolve(buffer);
        });
    });
}