import { DesignTemplate, DesignTemplateAssignment, InteractiveExposeMapping, InteractiveExposeSettings, InteractiveExposeSettingsWithLogos, InteractiveExposeTemplate, S3File, SendInteractiveExposeModel } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class InteractiveExposeService extends APIClient {
    constructor();
    getSettings(): Promise<InteractiveExposeSettingsWithLogos>;
    changeSettings(settings: InteractiveExposeSettings): Promise<InteractiveExposeSettingsWithLogos>;
    getPreviewUrl(entityId: string, templateName?: string, attachDocuments?: boolean, creatorId?: string, showFinanceCalculator?: boolean): Promise<string>;
    sendInteractiveExpose(model: SendInteractiveExposeModel): Promise<AxiosResponse>;
    changeLogo(type: 'light' | 'dark', image: File): Promise<S3File>;
    deleteLogo(type: 'light' | 'dark'): Promise<AxiosResponse>;
    /**
     * Get all interactive expose templates.
     * Add a role parameter to filter the templates by the roles.
     */
    getTemplates(role?: 'OFFER' | 'REPORT'): Promise<AxiosResponse>;
    /**
     * Check requirements of the interactive exposé and if necessary solve them
     */
    checkRequirements(): Promise<AxiosResponse>;
    /**
     * Get a template by its id.
     */
    getTemplateById(templateId: string): Promise<AxiosResponse>;
    /**
     * Gets all existing design Templates of a company
     */
    fetchDesignTemplates(): Promise<AxiosResponse<DesignTemplate[]>>;
    /**
     * Returns all design templates for the company the user is logged in for of the specified type.
     */
    fetchDesignTemplatesOfType(type: string): Promise<AxiosResponse<DesignTemplate[]>>;
    updateDesignTemplates(designTemplates: DesignTemplateAssignment[]): Promise<AxiosResponse>;
    deleteDesignTemplates(designTemplates: DesignTemplateAssignment[]): Promise<AxiosResponse>;
    /**
     * Create a new interactive expose template.
     * @param template
     * @param fillDefaultContent
     *      true if the content of the template have to be filled with default content
     */
    createTemplate(template: InteractiveExposeTemplate, fillDefaultContent?: boolean): Promise<AxiosResponse>;
    createInteractiveExposeTemplate(templateName: string, body: FormData): Promise<AxiosResponse<any>>;
    uploadInteractiveExposeTemplateFiles(templateName: string, body: FormData): Promise<AxiosResponse<any>>;
    deleteInteractiveExposeTemplate(templateName: string): Promise<AxiosResponse<any>>;
    fetchInteractiveExposeTemplateFiles(templateName: string): Promise<AxiosResponse<any>>;
    fetchInteractiveExposeTemplateFilesByFileType(templateName: string, fileType: String): Promise<AxiosResponse<any>>;
    fetchInteractiveExposeTemplateFileData(templateName: string, fileType: string, body: string[]): Promise<AxiosResponse<any>>;
    /**
     * Update a interactive expose template by his id.
     */
    updateTemplate(templateId: string, template: InteractiveExposeTemplate): Promise<AxiosResponse>;
    /**
     * Delete a interactive expose template on the server.
     */
    deleteTemplate(templateId: string): Promise<AxiosResponse>;
    /**
     * Add a domain to the company.
     */
    addDomain(domain: string): Promise<AxiosResponse>;
    /**
     * Uninitialize the company domain.
     */
    startDomainTeardown(): Promise<AxiosResponse>;
    /**
     * Perform the setup steps for the domain.
     */
    setupDomain(): Promise<AxiosResponse>;
    /**
     * Get interactive expose mapping. Default mapping is just named so, cause of convienience
     */
    getMappingOrDefault(schemaId?: string): Promise<AxiosResponse>;
    /**
     * Get interactive expose mapping. Default mapping is just named so, cause of convienience
     */
    getAllMappings(): Promise<AxiosResponse>;
    /**
     * Update interactive expose mapping
     */
    updateMapping(mapping: InteractiveExposeMapping): Promise<AxiosResponse>;
    /**
     * Put restored example legislation texts into the company scoped default mapping
     */
    restoreDefaults(): Promise<AxiosResponse>;
    /**
     * Sets the last activity time of the user session
     */
    keepAlive(token: string, userSessionId: string): Promise<AxiosResponse>;
}
declare const _default: InteractiveExposeService;
export default _default;
