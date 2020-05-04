export interface DingoConfig {
    output: string;
    entry: {
        paths: {
            include: string | string[];
            exclude: string[];
        },
        files: {
            include: string | string[];
            exclude: string[];
        }
    },
    app: {
        name: string;
    },
    program: {
        verbose: boolean;
    }
}