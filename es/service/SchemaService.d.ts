import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class SchemaService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param withGroups
     */
    loadStats(withGroups?: boolean): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param withGroups
     * @param short
     */
    fetchAllSchemas(withGroups?: boolean, short?: boolean): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param page
     * @param size
     */
    fetchDataBySchemaId(schemaId: string, page?: number, size?: number): Promise<AxiosResponse>;
    /**
     * @deprecated Please use SchemaServiceV2.fetchSchemaByIdOrName
     * Retrieves a schema by schemaId
     * @param schemaId
     * @param queryParams
     */
    fetchSchema(schemaId: string, queryParams?: any): Promise<AxiosResponse>;
    /**
     * @deprecated Please use SchemaServiceV2.createSchema
     * Creates a schema
     * @param schema
     */
    createSchema(schema: any): Promise<AxiosResponse>;
    /**
     * @deprecated Please use SchemaServiceV2.deleteSchema
     * Deletes a schema
     * @param schemaId
     */
    deleteSchema(schemaId: string): Promise<AxiosResponse>;
    /**
     * @deprecated Please use SchemaServiceV2.deleteAllSchema
     * deletes all groups and schemas
     * @constructor
     * @param {string} key - if you are sure you want delete all schemas then set key = DELETE
     */
    deleteAllSchema(key: string): Promise<AxiosResponse>;
    /**
     * @deprecated Please use SchemaServiceV2.updateSchema
     * Updates a schema
     * @param schema
     */
    updateSchema(schema: any): Promise<AxiosResponse>;
    /**
     * Fetchs a transformed integration by his id.
     * @param integrationId
     */
    fetchIntegration(integrationId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param schemaId
     */
    fetchIntegrationsForSchema(schemaId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param label
     */
    createIntegrationForSchema(schemaId: string, label: string): Promise<AxiosResponse>;
    /**
     * This updates just the formData of an integration
     * @param integrationId
     * @param data
     */
    updateIntegrationFormData(integrationId: string, data: any): Promise<AxiosResponse>;
    /**
     * This updates the whole integration
     * @param integrationId
     * @param data
     */
    updateIntegration(integrationId: string, data: any): Promise<AxiosResponse>;
    /**
     * Delete an integration by the representing id.
     * @param integrationId
     */
    deleteIntegration(integrationId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param url
     */
    fetchResponseForIntegrationGetUrlByUrl(url: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param integrationId
     */
    fetchResponseForIntegrationGetUrlById(integrationId: string): Promise<AxiosResponse>;
    /**
     * @deprecated Please use SchemaServiceV2.fetchAllSchemas and pass in the group's name to filter
     * Retrieves all members (schemas) of a given groupId
     * @param groupId
     */
    fetchAllMembersOfGroup(groupId: string): Promise<AxiosResponse>;
    /**
     * Fetches all complex data types
     */
    fetchDataTypes(): Promise<AxiosResponse>;
}
declare const _default: SchemaService;
export default _default;
