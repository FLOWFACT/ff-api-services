import { PagedNylasContactSyncEntries, NylasContactSyncEntry, NylasContactSyncEntryPostModel } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import APIClient from '../http/APIClient';
export declare class NylasContactSyncService extends APIClient {
    constructor();
    /**
     * Retrieves all syncEntries for the given contactId
     * @param {string} contactId - The id of the contact you want to retrieve the syncEntries for
     * @param {number} page - The page you need to set to paginate (default: 1)
     * @param {number} size - The amount of results per page (default: 25)
     * @return {NylasContactSyncEntry[]}
     */
    fetchByContactId: (contactId: string, page?: number, size?: number) => Promise<AxiosResponse<PagedNylasContactSyncEntries>>;
    /**
     * Retrieves the syncEntry with the given id
     * @param {string} syncEntryId - The id of a syncEntry
     * @return {NylasContactSyncEntry}
     */
    fetchBySyncEntryId: (syncEntryId: string) => Promise<AxiosResponse<NylasContactSyncEntry>>;
    /**
     * Creates a syncEntry
     * @param {NylasContactSyncEntryPostModel} syncEntry - The syncEntry you want to create
     * @return {NylasContactSyncEntry}
     */
    createSyncEntry: (syncEntry: NylasContactSyncEntryPostModel) => Promise<AxiosResponse<NylasContactSyncEntry>>;
    /**
     * Delete a syncEntry by it's id
     * @param {string} syncEntryId - The id of a syncEntry
     */
    deleteSyncEntryById: (syncEntryId: string) => Promise<AxiosResponse<any>>;
}
declare const _default: NylasContactSyncService;
export default _default;
