import { Flowdsl } from '@flowfact/node-flowdsl/lib/Flowdsl';
import { Entity, FilterConfiguration } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
import { SearchResult } from '..';
export declare class SearchService extends APIClient {
    constructor();
    /**
     * Get all searches as short searches. Just the ID and the Name of the search
     * will be returned in a array.
     */
    fetchSearches(): Promise<AxiosResponse>;
    /**
     * Get the full search information by id.
     */
    fetchSearch(searchId: string): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param searchModel
     */
    saveSearch(searchModel: any): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param searchId
     */
    deleteSearch(searchId: string): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param searchId
     * @param searchModel
     */
    updateSearch(searchId: string, searchModel: any): Promise<AxiosResponse<any>>;
    /**
     * This method searches for entities or tags. See swagger documentation of search-service for details
     * @param query
     * @param index
     * @param page
     * @param size
     * @param withCount
     */
    search(query: Flowdsl, index: string, page?: number, size?: number, withCount?: boolean): Promise<AxiosResponse<SearchResult<Entity>>>;
    /**
     * Fetches the number of entities matching the given query
     * @param query
     * @param index
     */
    count(query: Flowdsl, index: string): Promise<AxiosResponse<any>>;
    /**
     * Fetches the number of entities matching the given query
     * @param companyId
     * @param query
     * @param index
     * @param withAclGroups
     */
    internalCount(companyId: string, query: Flowdsl, index: string, withAclGroups?: boolean): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param index
     * @param page
     * @param size
     * @param filter
     * @param sorting
     */
    filter(index: string, page: number | undefined, size: number | undefined, filter: FilterConfiguration, sorting: any): Promise<AxiosResponse<SearchResult<Entity>>>;
    buildQuery(filterConfiguration: FilterConfiguration, sorting: any): Flowdsl;
}
declare const _default: SearchService;
export default _default;
