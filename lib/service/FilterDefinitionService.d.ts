import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
import { FilterDefinition } from '@flowfact/types';
declare class FilterDefinitionService extends APIClient {
    constructor();
    /**
     * Fetchs filter for a specific schema
     * @param schemaName
     */
    fetchFilter(schemaName: string): Promise<AxiosResponse<FilterDefinition>>;
    /**
     * Get all saved filters for a schema
     * @param schemaName
     */
    fetchSavedFilters(schemaName: string): Promise<AxiosResponse<{
        entries: FilterDefinition[];
    }>>;
    /**
     * Create a new saved filter for a schema
     * @param filterDefinition
     */
    createSavedFilter(filterDefinition: FilterDefinition): Promise<AxiosResponse<FilterDefinition>>;
    /**
     * Update a saved filter by his id.
     * @param filterId
     * @param filterDefinition
     */
    updateSavedFilter(filterId: string, filterDefinition: FilterDefinition): Promise<AxiosResponse<FilterDefinition>>;
    /**
     * Delete a saved filter by his id.
     * @param filterId
     */
    deleteSavedFilter(filterId: string): Promise<AxiosResponse>;
}
declare const _default: FilterDefinitionService;
export default _default;
