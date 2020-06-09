import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
export declare class CognitoClientService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param aliasMailAddress
     */
    fetchLoginNameByAliasMailAddress(aliasMailAddress: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param aliasMailAddress
     */
    linkAccount(aliasMailAddress: string): Promise<AxiosResponse>;
    /**
     * This method resets the password of a specific user
     * @param aliasMailAddress
     * @param businessMailAddress
     */
    resetPassword(aliasMailAddress: string, businessMailAddress: string): Promise<AxiosResponse>;
    /**
     * check if the specific mail address is blocked, return 200 when the email is blocked, otherwise 404
     * @param mailAddress mail address to check
     */
    isMailBlocked: (mailAddress: string) => Promise<AxiosResponse<any>>;
}
declare const _default: CognitoClientService;
export default _default;
