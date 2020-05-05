export enum OutputType {
    website = 'website',
    md = 'md'
}

export interface DingoConfig {
    output: {
        path: string;
        type: OutputType;
    },
    entry: {
        paths: {
            exclude: string[];
        },
        files: {
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