import { mkdir, exists, MakeDirectoryOptions, writeFile, readFile, readdir, lstat, Stats } from 'fs';
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

export const aReadDir = (path: string): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        readdir(path, (err: Error | null, files: string[]) => {
            return err ? reject(err) : resolve(files);
        })
    })
}

export const aLstat = (path: string): Promise<Stats> => {
    return new Promise(async (resolve, reject) => {
        lstat(path, (err: Error | null, stats: Stats) => {
            return err ? reject(err) : resolve(stats);
        })
    });
}