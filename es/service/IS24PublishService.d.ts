import { APIClient } from '../http';
export declare class IS24PublishService extends APIClient {
    constructor();
    /**
     * This generates a is24 report for a specific estate and a timerange
     * @param estateId
     * @param startDate
     * @param toDate
     */
    fetchReport: (estateId: string, startDate: any, toDate: any) => Promise<import("axios").AxiosResponse<any>>;
    /**
     * Fetches projects for special portal
     * @param portalId
     */
    fetchProjects: (portalId: string) => Promise<import("axios").AxiosResponse<any>>;
}
declare const _default: IS24PublishService;
export default _default;
