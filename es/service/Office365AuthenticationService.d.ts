import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
export declare class Office365AuthenticationService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param temporaryToken
     */
    authenticate(temporaryToken: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param code
     * @param redirectUrl
     * @param clientId
     */
    registerContract(code: string, redirectUrl: string, clientId: string): Promise<AxiosResponse>;
}
declare const _default: Office365AuthenticationService;
export default _default;
