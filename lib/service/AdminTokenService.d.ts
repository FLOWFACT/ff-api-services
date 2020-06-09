import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
export declare class AdminTokenService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     */
    createOrReturnAdminToken(): Promise<AxiosResponse>;
    /**
     * Authenticate the user with the platformToken and returns the cognitoToken
     * @param {string} platformToken
     * @returns {Promise<AxiosResponse>}
     */
    authenticate(platformToken: string): Promise<AxiosResponse>;
    /**
     * Authenticate the user with the platformToken and returns the cognitoToken + username
     * @param {string} platformToken
     * @returns {Promise<AxiosResponse>}
     */
    authenticateAndReturnUsernameWithToken(platformToken: string): Promise<AxiosResponse>;
}
declare const _default: AdminTokenService;
export default _default;
