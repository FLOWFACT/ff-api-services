import { CommissionEntry, TotalCommission } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class CommissionCalculationService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param entityIds
     */
    calculateTotalCommission(entityIds: string[]): Promise<AxiosResponse<TotalCommission>>;
    /**
     * TODO: Please comment this method
     * @param entityIds
     */
    calculateSeparateCommission(entityIds: string[]): Promise<AxiosResponse<CommissionEntry[]>>;
}
declare const _default: CommissionCalculationService;
export default _default;
