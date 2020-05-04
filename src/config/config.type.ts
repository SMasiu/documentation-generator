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