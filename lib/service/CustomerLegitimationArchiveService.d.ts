import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
export declare class CustomerLegitimationArchiveService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param type
     */
    findByType(type: string): Promise<AxiosResponse>;
}
declare const _default: CustomerLegitimationArchiveService;
export default _default;
