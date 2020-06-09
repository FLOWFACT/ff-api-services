import { Flowdsl } from '@flowfact/node-flowdsl';
import { Entity, EntityAccess, EntityACLType, EntityValues, EntityView } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { v4 as uuid } from 'uuid/interfaces';
import { APIClient } from '../http';
import { EntityQuery, SearchResult, UniformObject } from '..';
export declare class EntityService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entity
     * @return the created entity id
     */
    createEntity(schemaId: string, entity: any): Promise<AxiosResponse>;
    /**
     * This method creates a new entity and automatically add values of the fields with the same name of the previous
     * schema/entity. The new entity schema can be different as the previous schema.
     * @param schemaName
     *      The schema name of the new entity
     * @param previousSchemaName
     *      The schema name of the previous entity
     * @param previousEntityId
     *      The entity of the previous entity
     * @return the created entity id
     */
    createEntityFromPrevious(schemaName: string, previousSchemaName: string, previousEntityId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     * @param viewId
     */
    stringifyEntity(schemaId: string, entityId: string, viewId?: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param index
     * @param viewName
     * @param {Flowdsl} flowdsl
     * @param page
     * @param size
     * @param withCount
     */
    searchEntity(index: string, viewName: string, flowdsl?: Flowdsl, page?: number, size?: number, withCount?: boolean): Promise<AxiosResponse<SearchResult<EntityView>>>;
    /**
     * Searchs for entities and returns the entity merged with the schema and the view
     * @param index
     * @param viewName
     * @param {Flowdsl} flowdsl
     * @param offset
     * @param size
     * @param withCount
     */
    fetchEntitiesVirtualized(index: string, viewName: string, flowdsl?: Flowdsl, offset?: number, size?: number, withCount?: boolean): Promise<AxiosResponse<SearchResult<EntityView>>>;
    /**
     * Searchs for entities and return the entity merged with the view and not like in v1 with the schema.
     * @param index
     * @param viewName
     * @param {Flowdsl} flowdsl
     * @param offset
     * @param size
     * @param withCount
     */
    fetchEntitiesVirtualizedV2(index: string, viewName: string, flowdsl?: Flowdsl, offset?: number, size?: number, withCount?: boolean): Promise<AxiosResponse<SearchResult<EntityView>>>;
    /**
     * Delete a entity in the Backend
     * @param entityId
     * @param schemaId
     */
    deleteEntity(entityId: string, schemaId: string): Promise<AxiosResponse<any>>;
    /**
     * Update a entity in the backend
     * @param schemaId
     * @param entityId
     * @param field
     */
    updateEntityField(schemaId: string, entityId: string, field: UniformObject<EntityValues>): Promise<AxiosResponse<Entity>>;
    /**
     * TODO: Please comment this method
     * @param viewId
     * @param schemaId
     * @param entityId
     */
    fetchEntityWithViewDefinition(viewId: string, schemaId: string, entityId: string): Promise<AxiosResponse<EntityView>>;
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     */
    fetchEntity(schemaId: string, entityId: string): Promise<AxiosResponse<Entity>>;
    /**
     * Get the history of a entity in a well formatted form.
     * @param schemaId
     * @param entityId
     * @param page
     * @deprecated Please use the history-service instead.
     */
    fetchHistory(schemaId: string, entityId: string, page: number): Promise<AxiosResponse>;
    /**
     * Check the right of a user to access a single entity.
     * @param schemaId
     * @param entityId
     * @param userId
     * @param accessType
     */
    hasAccessForSingleEntity(schemaId: string, entityId: string, userId: string, accessType: EntityACLType): Promise<AxiosResponse>;
    /**
     * Check the rights of a user to access several entities.
     * @param userId
     * @param accessType
     * @param entities
     */
    hasAccessForMultipleEntities(userId: string, accessType: EntityACLType, entities: EntityQuery[]): Promise<AxiosResponse<EntityAccess[]>>;
    /**
     * This method sends entityIds and schemaIds to the entity-service and the entity-service transform this data
     * into views with the entity. So an array will be returned, with the viewEntity.
     * @param viewName
     * @param entityQueries
     */
    transformEntitiesWithView(viewName: string, entityQueries: EntityQuery[]): Promise<AxiosResponse<EntityView[]>>;
    /**
     * Duplicates an entity and its multimedia files like images and documents.
     * @param schemaId
     * @param entityId
     * @returns a new UUID of created entity.
     */
    duplicateEntity(schemaId: uuid, entityId: uuid): Promise<AxiosResponse<uuid>>;
}
declare const _default: EntityService;
export default _default;
