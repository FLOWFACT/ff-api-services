import { APIClient } from '../http';
export declare class TrialLicenseService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param submissionGuid
     */
    fetchCustomerDataBySubmissionGuid(submissionGuid: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param submissionGuid
     */
    fetchCustomerDataByEmail(submissionGuid: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param payload
     */
    createNewSubscription(payload: any): Promise<import("axios").AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param hostedPageId
     */
    upgradeAccount(hostedPageId: string): Promise<import("axios").AxiosResponse<any>>;
}
declare const _default: TrialLicenseService;
export default _default;
