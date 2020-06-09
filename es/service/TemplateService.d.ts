import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
export declare class TemplateService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     */
    fetchAllTemplates(): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param type
     */
    fetchTemplatesByType(type: string): Promise<any>;
    fetchFullTemplatesByType(type: string): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param body
     */
    createTemplate(body: any): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param id
     * @param file
     */
    uploadContent(id: string, file: any): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param templateId
     * @param file
     */
    uploadAttachment(templateId: string, file: any): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param templateId
     * @param attachmentId
     */
    removeAttachment(templateId: string, attachmentId: string): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param id
     */
    fetchTemplateById(id: string): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param id
     * @param withResponse
     */
    delete(id: string, withResponse?: boolean): Promise<any>;
    fetchPlaceholderPrefixesById(id: string): Promise<any>;
    fillTemplate(requestBody: any): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param body
     * @param id
     */
    updateTemplate(body: any, id: string): Promise<any>;
}
declare const _default: TemplateService;
export default _default;
