export const getConfigTemplate = (): string => `{
    "output": {
        "path": "docs",
        "type": "website"
    },
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
    },
    "program": {
        "verbose": false
    }
}`