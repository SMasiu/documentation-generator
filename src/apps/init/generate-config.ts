import { readdir, writeFile } from 'fs';
import { internalError, configExistsError } from '../../errors/error-exceptions';
import { configFileName } from '../../conf';
import { getConfigTemplate } from './init-template';

export const generateConfig = () => {
    console.log('Cheacking if file no exists...');
    readdir(process.cwd(), (err: Error | null, files: string[]): void => {
        if(err) {
            throw internalError();
        }

        if(files.findIndex( f => f === configFileName ) !== -1) {
            throw configExistsError();
        }

        console.log('Generating file...');

        writeFile(configFileName, getConfigTemplate(), 'utf8', (err: Error | null): void => {
            if(err) {
                throw internalError();
            }
            console.log('File generated...');
            process.exit(0);
        });
    });
}