import { Contact, MatchCountForEstate, MatchmakingPagingResponse, MatchScoreContact, MatchScoreEstate } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class MatchmakingService extends APIClient {
    constructor();
    getAllMatches(page?: number): Promise<AxiosResponse<MatchmakingPagingResponse<Array<Contact>>>>;
    /**
     * TODO: Please comment this method
     * @param page
     */
    fetchAllMatchesForContacts(page?: number): Promise<AxiosResponse<MatchmakingPagingResponse<Array<Contact>>>>;
    /**
     * TODO: Please comment this method
     * @param page
     */
    fetchAllMatchesForEstates(page?: number): Promise<AxiosResponse<MatchmakingPagingResponse<Array<Contact>>>>;
    /**
     * TODO: Please comment this method
     * @param contactId
     * @param page
     */
    fetchMatchesByContact(contactId: string, page?: number): Promise<AxiosResponse<MatchmakingPagingResponse<Array<MatchScoreContact>>>>;
    /**
     * TODO: Please comment this method
     * @param estateId
     * @param page
     */
    fetchMatchesByEstate(estateId: string, page?: number): Promise<AxiosResponse<MatchmakingPagingResponse<Array<MatchScoreEstate>>>>;
    /**
     * TODO: Please comment this method
     * @param estateId
     */
    fetchMatchCountByEstate(estateId: string): Promise<AxiosResponse<MatchCountForEstate>>;
    /**
     * TODO: Please comment this method
     */
    initialImport(): Promise<AxiosResponse>;
}
declare const _default: MatchmakingService;
export default _default;
