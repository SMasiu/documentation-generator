import { DingoConfig } from "../types/config.type"
import { loadConfig } from "./load-config"

export const generateDocs = async () => {
    try {

        let config: DingoConfig = await loadConfig();

        console.log(config);

    } catch(err) {
        throw err;
    }
}