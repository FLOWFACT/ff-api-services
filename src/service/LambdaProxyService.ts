import { APIClient, APIMapping } from '../http';

export class LambdaProxyService extends APIClient {
    constructor() {
        super(APIMapping.lambdaProxyService);
    }

    async fetchLogDirectories() {
        return this.invokeApiWithErrorHandling('/ff-importer-v2-record-log-s3-directory-entries', 'GET');
    }

    async fetchDirectoryContents(table: string) {
        return this.invokeApiWithErrorHandling('/ff-importer-v2-record-log-s3-directory-content', 'POST', {table});
    }
}

export default new LambdaProxyService();
