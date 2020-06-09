import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
import { Softlinks, PagedResult } from '@flowfact/types';
export declare class SoftLinksEntityService extends APIClient {
    constructor();
    /**
     * Create link between the entities with ids from source and destination
     * @param link
     */
    createLink(link: Softlinks.CreateSoftlinkRequest): Promise<AxiosResponse<Softlinks.CreateSoftlinkRequest>>;
    /**
     * Delete link
     * @param linkId
     */
    deleteLink(linkId: string): Promise<AxiosResponse>;
    /**
     * Search link by label
     * @param label
     */
    searchLinksByLabel(label: string): Promise<AxiosResponse<{
        count: number;
        label: string;
    }>>;
    /**
     * Search links with pagination
     * @param link
     * @param page
     * @param size
     */
    searchLinksWithPagination(link: Softlinks.NulleableSoftlinkSearch, page?: number, size?: number): Promise<AxiosResponse<PagedResult<Softlinks.Softlink>>>;
    /**
     * Search all links with pagination
     * @param request
     * @param page
     * @param size
     */
    searchAllSoftLinks(request: Softlinks.AllSoftlinksRequest, page?: number, size?: number): Promise<AxiosResponse<PagedResult<Softlinks.Softlink>>>;
}
declare const _default: SoftLinksEntityService;
export default _default;
