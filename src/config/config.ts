import { join } from "path";
import { configFileName } from "../conf";
import { aReadFile } from "../async-fs/async-fs";
import { DingoConfig } from "./config.type";

class DingoConfigLoader {

    private config!: DingoConfig;

    constructor() { }

    load(): Promise<DingoConfig> {
        return new Promise(async (resolve, reject) => {
            try {
                const path = join(process.cwd(), configFileName);
                const buffer: Buffer = await aReadFile(path);
    
                this.config = JSON.parse(buffer.toString());
                
                return resolve(this.config);

            } catch (err) {
                return reject(err);
            }
        });
    }

    get(): DingoConfig {
        return {...this.config};
    }

}

export const dingoConfigLoader = new DingoConfigLoader();