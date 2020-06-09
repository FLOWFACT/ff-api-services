import { APIClient } from '../http';
import { ParamList, SearchResult } from '../util/InternalTypes';
import { Entity } from '@flowfact/types';
export declare class FullTextSearchService extends APIClient {
    constructor();
    /**
     * Get the full search information by id.
     * @param schemaName
     * @param searchTerm
     * @param page
     * @param size
     * @param params
     */
    search(schemaName: string, searchTerm: string, page?: number, size?: number, params?: ParamList): Promise<import("axios").AxiosResponse<SearchResult<Entity>>>;
}
declare const _default: FullTextSearchService;
export default _default;
