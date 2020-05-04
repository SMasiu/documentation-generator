import { mdResolver } from './md/md.resolver';
import { websiteResolver } from './website/website.resolver';

export const outputResolver = (type: string, docMap: any): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        try {
            const resolvers: {[key: string]: Function} = {
                website: websiteResolver,
                md: mdResolver
            }

            return resolve(await resolvers[type](docMap));

        } catch (err) {
            return reject(err);
        }
    });
}