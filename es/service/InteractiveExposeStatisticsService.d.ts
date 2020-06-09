import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
export declare class InteractiveExposeStatisticsService extends APIClient {
    constructor();
    /**
     * Returns the filled statistics data Object for a specific estate
     * @param {string} estateId
     * @returns {Promise<AxiosResponse>}
     */
    fetchEstateStatistics(estateId: string): Promise<AxiosResponse>;
    /**
     * Counts all iex which were sent for en estate.
     * @param estateId
     * @param singleCount represent the boolean if only contacts to whom iex was sent should be counted,
     *          or all sent iex including same contacts.
     */
    fetchSentInteractiveExposeCount(estateId: string, singleCount?: boolean): Promise<AxiosResponse>;
    /**
     * Aggregates different statistics data for given estate by given statistics types.
     * @param estateId
     * @param requestedTypes represents a list with statistic types
     */
    fetchDynamicEstateStatistics(estateId: string, requestedTypes: object): Promise<AxiosResponse>;
}
declare const _default: InteractiveExposeStatisticsService;
export default _default;
