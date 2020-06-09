import { APIClient } from '../http';
export declare class OpenimmoImporterService extends APIClient {
    constructor();
    fetchLastUsedSenderSoftwareForCompanies(companyIds: string[]): Promise<import("axios").AxiosResponse<Record<string, string>>>;
}
declare const _default: OpenimmoImporterService;
export default _default;
