import { readFile } from 'fs';
import { join } from 'path';
import { DingoConfig } from "../types/config.type";
import { internalError } from '../../errors/error-exceptions';
import { configFileName } from '../../conf';

export const loadConfig = (): Promise<DingoConfig> => {
    return new Promise((resolve, reject) => {
        const path = join(process.cwd(), configFileName);

        readFile(path, (err: Error | null, buffer: Buffer) => {
            if(err) {
                return reject(internalError());
            }

            return resolve(JSON.parse(buffer.toString()));
        });

    });
}