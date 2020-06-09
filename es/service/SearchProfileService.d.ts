import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
import { SearchprofileService as SearchprofileServiceTypes } from '@flowfact/types';
export declare class SearchProfileService extends APIClient {
    constructor();
    /**
     * Fetches the configuration on how the Matchmaking-UI should be displayed
     * Tries to retrieve config for current company, when none is found, falls back to a global config
     */
    fetchConfiguration(): Promise<AxiosResponse<SearchprofileServiceTypes.Configuration>>;
    /**
     * Creates a configuration on how the Matchmaking-UI should be displayed for the current company
     */
    createConfiguration(config: SearchprofileServiceTypes.Configuration): Promise<AxiosResponse>;
    /**
     * Updates the configuration on how the Matchmaking-UI should be displayed for the current company
     */
    updateConfiguration(config: SearchprofileServiceTypes.Configuration): Promise<AxiosResponse>;
    /**
     * Deletes the configuration on how the Matchmaking-UI should be displayed for the current company
     */
    deleteConfiguration(): Promise<AxiosResponse>;
    /**
     * Retrieves all searchprofiles of a company
     * @param page
     * @param size
     */
    fetchAllSearchProfiles(page?: number, size?: number): Promise<AxiosResponse<{
        results: SearchprofileServiceTypes.Searchprofile[];
    }>>;
    /**
     * Creates a new searchprofile
     * @param searchProfile
     */
    createSearchProfile(searchProfile: SearchprofileServiceTypes.Searchprofile): Promise<AxiosResponse<SearchprofileServiceTypes.Searchprofile>>;
    /**
     * Retrieves an existing searchprofile by its id
     * @param searchProfileId
     */
    fetchSearchProfile(searchProfileId: string): Promise<AxiosResponse<SearchprofileServiceTypes.Searchprofile>>;
    /**
     * Updates an existing searchprofile
     * @param searchProfile
     */
    updateSearchProfile(searchProfile: SearchprofileServiceTypes.Searchprofile): Promise<AxiosResponse<SearchprofileServiceTypes.Searchprofile>>;
    /**
     * Deletes a searchprofile by its id
     * @param searchProfileId
     */
    deleteSearchProfile(searchProfileId: string): Promise<AxiosResponse>;
    /**
     * Executes a search using the search terms (conditions) in the searchprofile
     * @param model
     */
    searchEntities(model: SearchprofileServiceTypes.Searchprofile): Promise<AxiosResponse<any[]>>;
    /**
     * Executes a reverse search against saved searchprofiles for the specified schemaGroup and saved entity (by Id)
     * @param entityId
     * @param schemaGroup
     */
    searchProfiles(entityId: string, schemaGroup?: string): Promise<AxiosResponse>;
}
declare const _default: SearchProfileService;
export default _default;
