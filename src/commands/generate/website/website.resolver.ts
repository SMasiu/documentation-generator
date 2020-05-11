import { saveStaticFile } from "./save-static-files";
import { RawObjectType } from "../../../docs-maper/docs-maper.types";
import { internalError } from "../../../errors/error-exceptions";
import { aWriteFile } from "../../../async-fs/async-fs";
import { dingoConfigLoader } from "../../../config/config";

export const websiteResolver = (docMap: RawObjectType): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        try {
            const { path } = dingoConfigLoader.get().output;

            let parsedDocs = JSON.stringify(docMap);

            await saveStaticFile();
            await aWriteFile(`${path}/docs.json`, parsedDocs);
            await aWriteFile(`${path}/scripts/docs.provider.js`, `const documentMap = JSON.parse(\`${parsedDocs}\`)`);
        } catch (err) {
            return reject(internalError());
        }
    });
}