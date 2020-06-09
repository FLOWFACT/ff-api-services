import { Inquiry, InquiryAutomation } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
import { Flowdsl } from '@flowfact/node-flowdsl';
export declare class InquiryService extends APIClient {
    constructor();
    /**
     * Fetches all inquiries with pagination support
     * @param {number} page - Number of times the result will be offset by given size.
     * @param {number} size - Number of entities to fetch.
     */
    fetchAll(page?: number, size?: number): Promise<AxiosResponse<Array<Inquiry>>>;
    /**
     * Fetches all inquiries with pagination support
     * @param {Flowdsl} flowDsl - Search what you like.
     * @param {number} page - Number of times the result will be offset by given size.
     * @param {number} size - Number of entities to fetch.
     */
    fetchWithFlowDsl(flowDsl: Flowdsl, page?: number, size?: number): Promise<AxiosResponse<Array<Inquiry>>>;
    /**
     * Use this method to link an estate with given ID to an inquiry with given ID, that has no estate linked yet.
     * @param {string} inquiryId - ID of the inquiry that will be updated.
     * @param {string} estateId - ID of the estate that will be linked to the inquiry.
     * @returns the updated inquiry
     */
    linkEstateAndStartAutomation(inquiryId: string, estateId: string): Promise<AxiosResponse<Inquiry>>;
    isInquiryAutomationActive(companyId: string): Promise<AxiosResponse<InquiryAutomation>>;
    toggleAutomation(companyId: string): Promise<AxiosResponse<InquiryAutomation>>;
}
declare const _default: InquiryService;
export default _default;
