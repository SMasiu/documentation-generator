import { DingoConfig } from "../../config/config.type";
import { createOutputDir } from "./create-output-dir";
import { dingoConfigLoader } from "../../config/config";
import { Logger } from "../../logger/logger";
import { outputResolver } from "./output-resolver";
import { Reader } from "../../reader/reader";
import { RawObjectType } from "../../docs-maper/docs-maper.types";
import { join } from "path";

export const generateDocs = (): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        try {
            let config: DingoConfig = await dingoConfigLoader.load();
            let absPath: string = join(process.cwd(), config.output.path);
            const logger = new Logger(config);
            const reader = new Reader(config);

            let rawObject: RawObjectType = await reader.readEntry();

            logger.log('Crenating output directory...');
            await createOutputDir(absPath);

            await outputResolver(config.output.type, rawObject);

            return resolve();

        } catch(err) {
            return reject(err);
        }
    });
}