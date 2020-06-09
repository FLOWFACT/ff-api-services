import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
export declare class FlowfactExportInternalService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param createAdminTokenRequest
     */
    createAdminUser(createAdminTokenRequest: any): Promise<AxiosResponse>;
}
declare const _default: FlowfactExportInternalService;
export default _default;
