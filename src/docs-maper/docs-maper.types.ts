type KeyValue = {[key: string]: any};

interface File {
    path: string,
    structures: string[];
}

export type RawObjectType = {
    structures: {
        id: string;
        content: KeyValue;
    }[];
    files: File[];
    classes: string[];
    functions: string[];
    variables: string[];
};