export const getConfigTemplate = (): string => `{
    "output": {
        "path": "docs",
        "type": "website"
    },
    "entry": {
        "paths": {
            "exclude": [
                "docs", "bin", "dist", ".git", "node_modules"
            ]
        },
        "files": {
            "exclude": [
                ".json", ".gitignore"
            ]
        }
    },  
    "app": {
        "name": "dingo documentation"
    },
    "program": {
        "verbose": false
    }
}`