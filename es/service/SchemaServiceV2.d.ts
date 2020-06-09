import { Extension, GroupAllResponse, GroupV2, SchemaV2, SchemaV2Response } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class SchemaServiceV2 extends APIClient {
    constructor();
    /**
     * Creates a schema. Also needed groups are created if not existent.
     * @param schema - The schema that should be created
     */
    createSchema: (schema: SchemaV2) => Promise<AxiosResponse<SchemaV2>>;
    /**
     * Returns all schemas
     * @param group - Filters all schemas for given group name.
     * @param size - Page size of the response.
     * @param page - Page number of the response.
     * @param extensions - Extensions that should be added to the schema
     */
    fetchAllSchemas: (group?: string | undefined, size?: number | undefined, page?: number | undefined, extensions?: string | undefined) => Promise<AxiosResponse<SchemaV2Response>>;
    /**
     * Deletes a schema
     * @param schemaId - A schema's id or schemaname
     */
    deleteSchema: (schemaId: string) => Promise<AxiosResponse<any>>;
    /**
     * Updates a schema. Also needed groups are created if not existent.
     * @param schema - The schema to be updated
     */
    updateSchema: (schema: SchemaV2) => Promise<AxiosResponse<SchemaV2>>;
    /**
     * @typedef {Object} FetchSchemaByIdOrNameQueryParam
     * @property {boolean} resolveGroup
     */
    /**
     * Returns a schema
     * @param schemaIdOrName - The schema's id or schema name
     * @param {FetchSchemaByIdOrNameQueryParam} queryParams - resolves groups, like estates, to hist children - Default value : false
     */
    fetchSchemaByIdOrName: (schemaIdOrName: string, queryParams?: {
        resolveGroup?: boolean | undefined;
        extensions?: string | undefined;
    }) => Promise<AxiosResponse<SchemaV2>>;
    /**
     * Checks if schema exists, returns id if so
     * @param schemaName - The schema's name
     */
    exists: (schemaName: string) => Promise<AxiosResponse<string>>;
    /**
     * Adds a value to schema
     * @param schemaName - Identifies the schema
     * @param fieldName - Identifies the field name
     * @param value - The value that should be added
     */
    addPossibleValues: (schemaName: string, fieldName: string, value: any) => Promise<AxiosResponse<any>>;
    /**
     * Deletes all schemas in current company scope
     * @param key - if you are sure you want delete all schemas then set key = DELETE
     */
    deleteAllSchema: (key: string) => Promise<AxiosResponse<any>>;
    /**
     * Resolves all indices for a given identifier
     * @param identifier - Id for groups and schemas
     */
    resolveIndices: (identifier: string) => Promise<AxiosResponse<string[]>>;
    /**
     * Resolves the given name
     * @param schemaName - A name of a schema
     */
    resolveName: (schemaName: string) => Promise<AxiosResponse<string>>;
    /**
     * Returns all groups
     */
    getAllGroups: () => Promise<AxiosResponse<GroupAllResponse>>;
    /**
     * Creates a schema group
     * @param group - The group that should be created
     */
    createGroup: (group: GroupV2) => Promise<AxiosResponse<string>>;
    /**
     * Updates a schema group
     * @param group - The group that should be updated
     */
    updateGroup: (group: GroupV2) => Promise<AxiosResponse<GroupV2>>;
    /**
     * Retrieves a schema group by it's identifier (id or name)
     * @param identifier - The schema groups identifier (id or name)
     */
    fetchGroupByIdentifier: (identifier: string) => Promise<AxiosResponse<GroupV2>>;
    /**
     * Deletes a schema group by it's identifier (id or name)
     * @param identifier - The schema groups identifier (id or name)
     */
    deleteGroupById: (identifier: string) => Promise<AxiosResponse<any>>;
    /**
     * Tells you if the given identifier belongs to a group
     * @param identifier - The schema groups identifier (id or name)
     */
    isGroup: (identifier: string) => Promise<AxiosResponse<any>>;
    /**
     * Fetches all extensions.
     */
    fetchExtensions: () => Promise<AxiosResponse<any>>;
    /**
     * Fetches extension by name.
     * @param name - The extenion's name.
     */
    fetchExtension: (name: string) => Promise<AxiosResponse<any>>;
    /**
     * Create or Updates extension by name.
     * @param name - The extension's name.
     * @param extension - The extension object, that should be created or updated.
     */
    createOrUpdateExtension: (name: string, extension: Extension) => Promise<AxiosResponse<any>>;
    /**
     * Deletes extension by name.
     * @param name - The extension's name.
     */
    deleteExtension: (name: string) => Promise<AxiosResponse<any>>;
    /**
     * Fetches all extensions for a specific combination of schema and company.
     * @param schemaName - The schema name
     */
    fetchExtensionsBySchema: (schemaName: string) => Promise<AxiosResponse<any>>;
    /**
     * Fetches stats overs all assigned extensions.
     */
    fetchExtensionAssignments: () => Promise<AxiosResponse<any>>;
    /**
     * Assigns extension by name of a extension.
     * It will be assigned to the schemas, which are mentioned within the extension and nowhere else.
     * @Param name - The extension's name.
     */
    addExtensionAssignment: (name: string) => Promise<AxiosResponse<any>>;
    /**
     * Revokes assignment of an extension by its name.
     * @Param name - The extension's name.
     */
    removeExtensionAssignment: (name: string) => Promise<AxiosResponse<any>>;
}
declare const _default: SchemaServiceV2;
export default _default;
