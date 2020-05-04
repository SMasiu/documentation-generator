import { saveStaticFile } from "./save-static-files";

export const websiteResolver = (docMap: any): Promise<void> => {
    return new Promise(async (resolve, reject) => {

        await saveStaticFile();

    });
}