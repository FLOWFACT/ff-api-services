import { APIClient } from '../http';
declare class ContractService extends APIClient {
    constructor();
    /**
     * Get all available template contracts for a specific origin.
     * @param origin
     */
    fetchTemplates: (origin: "BOORGBERG" | undefined) => Promise<import("axios").AxiosResponse<any>>;
    /**
     * Download a contract template
     * @param templateId
     */
    downloadTemplate: (templateId: string) => Promise<import("axios").AxiosResponse<any>>;
}
declare const _default: ContractService;
export default _default;
