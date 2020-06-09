import { Customisation, ViewDefinition, ViewDefinitionCategory, ViewType } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class ViewDefinitionService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param schemaId
     */
    fetchDefinitionsForSchema(schemaId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param viewDefinitionId
     */
    fetchDefinition(viewDefinitionId: string): Promise<AxiosResponse>;
    /**
     * Returns statistics for all views of a specific schema
     * @param schemaIdOrName
     */
    fetchStatistics(schemaIdOrName: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param viewDefinitionId
     * @param viewDefinition
     */
    updateDefinition(viewDefinitionId: string, viewDefinition: ViewDefinition): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param viewDefinition
     */
    createDefinition(viewDefinition: ViewDefinition): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param viewDefinitionId
     */
    deleteDefinition(viewDefinitionId: string): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param viewId
     * @param categoryName
     * @param categoryDefinition
     */
    updateCategory(viewId: string, categoryName: string, categoryDefinition: ViewDefinitionCategory): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param viewId
     * @param categoryDefinition
     */
    addCategory(viewId: string, categoryDefinition: ViewDefinitionCategory): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param viewId
     * @param categoryName
     */
    deleteCategory(viewId: string, categoryName: string): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param viewName
     */
    listFieldsOfViews(viewName: string): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param viewName
     */
    fetchBySchemaAndName(schemaId: string, viewName: string): Promise<AxiosResponse<any>>;
    /**
     * Returns views of the current company with a specific type
     * @param schemaId
     * @param viewType
     */
    fetchBySchemaAndType(schemaId: string, viewType: ViewType): Promise<AxiosResponse<any>>;
    /**
     * Returns one or more view definitions by given types for a specific schema
     * @param schemaId
     * @param viewTypes
     */
    fetchBySchemaAndTypes(schemaId: string, viewTypes: ViewType[]): Promise<AxiosResponse<any>>;
    /**
     * Saves the given customisation and triggers an event applying the customisation
     * @param customisation
     */
    saveCustomisation(customisation: Customisation): Promise<void>;
    /**
     * This function sends a whole view definition to the view-definition-service. The service compares the new view definition to
     * the current one in the database to save which changes are made.
     * @param viewDefinition
     */
    saveCustomisations(viewDefinition: ViewDefinition): Promise<void>;
}
declare const _default: ViewDefinitionService;
export default _default;
