import { DingoConfig } from "../../config/config.type";
import { createOutputDir } from "./create-output-dir";
import { dingoConfigLoader } from "../../config/config";
import { Logger } from "../../logger/logger";

export const generateDocs = async () => {
    try {
        let config: DingoConfig = await dingoConfigLoader.load();
        const logger = new Logger(config);

        logger.log('Crenating output directory...');
        await createOutputDir(config.output);

    } catch(err) {
        throw err;
    }
}