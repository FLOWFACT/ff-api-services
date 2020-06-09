import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
export declare class IS24EntitlementService extends APIClient {
    constructor();
    /**
     * This method takes a temporary token created in the IS24 sso authentication flow and return cognito tokens.
     * @param temporaryToken
     */
    authenticate(temporaryToken: string): Promise<AxiosResponse>;
    readonly authenticationRedirectURL: string;
}
declare const _default: IS24EntitlementService;
export default _default;
