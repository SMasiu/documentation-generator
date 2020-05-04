import { indexHtml } from '../../../public/index.html'
import { loaderJs } from '../../../public/scripts/loader.js.js';
import { join } from 'path';
import { dingoConfigLoader } from '../../../config/config';
import { aWriteFile, aMkdir } from '../../../async-fs/async-fs';

export const saveStaticFile = (): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        try {
            const config = dingoConfigLoader.get();

            let files = [
                { type: 'file', data: indexHtml, path: 'index.html' },
                { type: 'folder', path: 'scripts' },
                { type: 'file', data: loaderJs, path: join('scripts', 'loader.js') },
            ];

            const docsPath = join(process.cwd(), config.output.path);

            for(let {type, data, path} of files) {
                let p = join(docsPath, path);
                if(type === 'file') {
                    await aWriteFile(p, (<string>data));
                } else {
                    await aMkdir(p, { recursive: true });
                }
            }

            return resolve();
        } catch (err) {
            return reject(err);
        }
    });
}