import { Company, CompanyGroup, LegislationText } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
import { OwnerClass } from '@flowfact/types';
export declare class CompanyService extends APIClient {
    constructor();
    /**
     * domain -> can also be an email
     * @param companyName
     * @param companyUrl
     * @param domain
     */
    createCompany(companyName: string, companyUrl: string, domain: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param presets
     */
    usePreset(presets: any): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param companyId
     */
    startTrial(companyId: string): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param companyId
     */
    endTrial(companyId: string): Promise<AxiosResponse<any>>;
    /**
     * Update a company
     * @param body
     */
    updateCompany(body: Company): Promise<AxiosResponse<any>>;
    /**
     * Find a company by id and return it.
     * @param companyId
     */
    findCompany(companyId: string): Promise<AxiosResponse<Company>>;
    /**
     * TODO: Please comment this method
     * @param mailaddress
     */
    memberCountByEMailAddress(mailaddress: string): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param image
     */
    postImage(image: any): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param terms
     */
    postTerms(terms: any): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param fileName
     */
    removeTerms(fileName: string): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param currentName
     * @param newName
     */
    renameTerms(currentName: string, newName: string): Promise<AxiosResponse<any>>;
    /**
     * Get all legislations texts from the company as JSON
     * @returns {Promise<AxiosResponse>}
     */
    fetchLegislationTexts(): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param companyId
     */
    fetchLegislationTextsByCompanyId(companyId: string): Promise<AxiosResponse>;
    /**
     * Updates one legislation text and if it does not exists, then it will create it
     * @param {LegislationText} legislationText
     * @returns {Promise<AxiosResponse>}
     */
    createOrUpdateLegislationText(legislationText: LegislationText): Promise<AxiosResponse>;
    /**
     * Deletes one legislation text of the company
     * @param {string} id
     * @returns {Promise<AxiosResponse>}
     */
    deleteLegislationText(id: string): Promise<AxiosResponse>;
    /**
     * Gets the currently valid consent text that the user must accept before we put our example legislation texts into his or her system.
     * Thats because we do not want to hold the text in the client, but in the service so the customer has no chance to modify it.
     */
    fetchCurrentlyValidConsentText(): Promise<AxiosResponse>;
    /**
     * Restore default legislation texts of the company.
     * Other texts then the ones from FLOWFACT will not be modified.
     */
    restoreDefaults(): Promise<AxiosResponse>;
    /**
     * Gets the details of a company group.
     */
    fetchGroup(name: string): Promise<AxiosResponse<CompanyGroup>>;
    /**
     * This ressource is used for setting the ownerClass of a company.
     * @param {string} companyId - The companyId of the company that should be updated
     * @param {OwnerClass} ownerClass - The OwnerClass that the company should get. Values: "INTERNAL/CUSTOMER/EXTERNAL_DEVELOPER"
     * @returns {Promise<AxiosResponse>}
     */
    setOwnerClassForCompany(companyId: string, ownerClass: OwnerClass): Promise<AxiosResponse<any>>;
}
declare const _default: CompanyService;
export default _default;
declare const StatusMapping: {
    create: {
        ALREADY_EXIST: number;
        MANDANTORY_FIELD_NOT_FILLED: number;
        INTERNAL_SERVER_ERROR: number;
    };
    findByEmail: {
        NO_COMPANY_FOUND: number;
        INTERNAL_SERVER_ERROR: number;
    };
    findById: {
        ID_NOT_FOUND: number;
        INTERNAL_SERVER_ERROR: number;
    };
};
export { StatusMapping, };
