import { DingoConfig } from "../../config/config.type";
import { createOutputDir } from "./create-output-dir";
import { dingoConfigLoader } from "../../config/config";
import { Logger } from "../../logger/logger";
import { outputResolver } from "./output-resolver";

export const generateDocs = (): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        try {
            let config: DingoConfig = await dingoConfigLoader.load();
            const logger = new Logger(config);

            logger.log('Crenating output directory...');
            await createOutputDir(config.output.path);

            await outputResolver(config.output.type, null);

            return resolve();

        } catch(err) {
            return reject(err);
        }
    });
}