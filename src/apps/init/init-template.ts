export const getConfigTemplate = (): string => `{
    "output": "docs",
    "entry": {
        "paths": {
            "include": "*",
            "exclude": [
                "docs",
                "bin",
                "dist"
            ]
        },
        "files": {
            "include": "*",
            "exclude": [".json"]
        }
    },
    "app": {
        "name": "dingo documentation"
    }
}`