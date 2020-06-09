import { DataChangeRequestType, ExportRequestBody, Settings } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import APIClient from '../http/APIClient';
import { EntityQuery } from '../util/InternalTypes';
export declare class GDPRService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param token
     */
    fetchConsentData(token: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param userId
     * @param companyId
     */
    fetchCompanyTerms(userId: string, companyId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param contactId
     * @param userId
     * @param companyId
     */
    fetchConsents(contactId: string, userId: string, companyId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param userId
     * @param companyId
     * @param body
     */
    exportPersonalData(userId: string, companyId: string, body: ExportRequestBody): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param companyId
     * @param userId
     * @param body
     */
    resolveEntities(companyId: string, userId: string, body: EntityQuery[]): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param contactId
     * @param userId
     * @param companyId
     * @param type
     * @param changes
     */
    changeData(contactId: string, userId: string, companyId: string, type?: DataChangeRequestType, changes?: object): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param contactId
     * @param userId
     * @param companyId
     */
    fetchChangeRequestStatus(contactId: string, userId: string, companyId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param changeRequestId
     * @param status
     * @param reason
     */
    updateChangeRequestStatus(changeRequestId: string, status: 'APPROVED' | 'DENIED', reason: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param consentId
     * @param consentSchemaId
     * @param userId
     * @param companyId
     */
    revokeConsent(consentId: string, consentSchemaId: string, userId: string, companyId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param consentEntity
     * @param userId
     * @param companyId
     */
    createConsent(consentEntity: object, userId: string, companyId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param consentEntity
     */
    addConsent(consentEntity: object): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param contactIds
     */
    fetchConsentForContacts(contactIds: object): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     */
    fetchSettings(): Promise<AxiosResponse<Settings>>;
    /**
     * TODO: Please comment this method
     * @param settings
     */
    updateSettings(settings: Settings): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     */
    fetchAllChangeRequests(): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param page
     * @param size
     */
    fetchContactsWithPendingConsent(page?: number, size?: number): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param contactId
     */
    isContactBlocked(contactId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param contactId
     */
    consentStatus(contactId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param contactId
     * @param block
     */
    blockContact(contactId: string, block: boolean): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param contactId
     */
    sendConsentMail(contactId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param contactId
     */
    sendCheckContactDetailsMail(contactId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param contactId
     * @param companyId
     * @param userId
     */
    sendNewConsentMail(contactId: string, companyId: string, userId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param consentId
     */
    fetchConsentAuthor(consentId: string): Promise<AxiosResponse>;
}
declare const _default: GDPRService;
export default _default;
