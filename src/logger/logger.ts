import { DingoConfig } from "../config/config.type";

export class Logger {

    enable: boolean = false;    

    constructor(config: DingoConfig) {
        this.enable = config.program.verbose;
    }

    log(msg: string): void {
        if(this.enable) {
            console.log(msg);
        }
    }

}