import { AxiosResponse } from 'axios';
import { APIClient, APIMapping } from '../http';

export class SoftLinksEntityService extends APIClient {

    constructor() {
        super(APIMapping.softLinksEntityService);
    }

    /**
    * Create link between the entities with ids from source and destination 
    * @param sourceId
    * @param destinationId
    * @param label
    */
    async createLink(sourceId: string, destinationId: string, label: string): Promise<AxiosResponse> {
        const body = { "source": sourceId, "destination": destinationId, "label": label };
        return this.invokeApi(`/link`, 'POST', body || {},{
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    /**
    * Delete link
    * @param linkId
    */
    async deleteLink(linkId: string): Promise<AxiosResponse> {
        return this.invokeApi(`/link/${linkId}`, 'DELETE');
    }

    /**
    * Search link by label
    * @param label
    */
    async searchLinksByLabel(label: string): Promise<AxiosResponse> {
        return this.invokeApi(`/link/search`, 'GET', undefined, {
            queryParams: {
                label
            },
        });
    }

    /**
    * Search links with pagination
    * @param linkId
    * @param sourceId
    * @param destinationId
    * @param label
    * @param page
    * @param size
    */
    async searchLinksWithPagination(linkId: string, sourceId: string, destinationId: string, label: string, page: number = 1, size: number = 20): Promise<AxiosResponse> {
        const body = { "id": linkId, "source": sourceId, "destination": destinationId, "label": label };
        return this.invokeApi(`/link/search`, 'POST', body || {}, {
            queryParams: {
                page,
                size
            },
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    /**
    * Search all links with pagination
    * @param entityIds
    * @param label
    * @param page
    * @param size
    */
    async searchAllSoftLinks(entityIds: Array<string>, label: string, page: number = 1, size: number = 20): Promise<AxiosResponse> {
        const body = { "entityIds": entityIds, "label": label };
        return this.invokeApi(`/link/search/all-softlinks`, 'POST', body || {}, {
            queryParams: {
                page,
                size
            },
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

}

export default new SoftLinksEntityService();
