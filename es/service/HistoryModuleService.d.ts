import { HistoryFilter } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import APIClient from '../http/APIClient';
export declare class HistoryModuleService extends APIClient {
    constructor();
    /**
     * Fetches a history of an entity
     * @param schemaId
     * @param entityId
     * @param size
     * @param offset
     * @param filter
     */
    fetchHistory(schemaId: string, entityId: string, size?: number, offset?: number, filter?: HistoryFilter): Promise<AxiosResponse>;
}
declare const _default: HistoryModuleService;
export default _default;
