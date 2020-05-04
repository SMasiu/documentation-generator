import { join } from 'path';
import { configExistsError } from '../../errors/error-exceptions';
import { configFileName } from '../../conf';
import { getConfigTemplate } from '../../config/init-template';
import { aExists, aWriteFile } from '../../async-fs/async-fs';

export const generateConfig = async (): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        try {        
            if(await aExists(join(process.cwd(), configFileName))) {
                throw configExistsError();
            }
            await aWriteFile(configFileName, getConfigTemplate())
            
            return resolve();

        } catch (err) {
            return reject(err);
        }
    });
}