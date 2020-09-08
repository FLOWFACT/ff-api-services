import { Flowdsl } from '@flowfact/node-flowdsl';
import { Entity, EntityAccess, EntityACLType, EntityDescriptor, EntityFields, EntityView, PagedResponse } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { v4 as uuid } from 'uuid/interfaces';
import { APIClient, APIMapping } from '../http';
import { EntityQuery, EntitySchemaQuery, ParamList } from '..';

export interface DeleteEntitiesResponse<T> {
    responses: {
        [entityId: string]: {
            response: T;
            statusCode: number;
        }
    }
}

export class EntityService extends APIClient {

    constructor() {
        super(APIMapping.entityService);
    }

    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entity
     * @return the created entity id
     */
    async createEntity(schemaId: string, entity: any): Promise<AxiosResponse> {
        return this.invokeApi(`/schemas/${schemaId}`, 'POST', entity || {});
    }

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
    async createEntityFromPrevious(schemaName: string, previousSchemaName: string, previousEntityId: string): Promise<AxiosResponse> {
        return this.invokeApi(`/schemas/${schemaName}/previous`, 'POST', undefined, {
            queryParams: {
                previousSchemaName,
                previousEntityId,
            },
        });
    }

    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     * @param viewId
     */
    async stringifyEntity(schemaId: string, entityId: string, viewId: string = 'EntityRelationView'): Promise<AxiosResponse> {
        return this.invokeApi(`/views/${viewId}/schemas/${schemaId}/entities/${entityId}/stringify`);
    }

    /**
     * TODO: Please comment this method
     * @param index
     * @param viewName
     * @param {Flowdsl} flowdsl
     * @param page
     * @param size
     * @param withCount
     */
    async searchEntity(index: string, viewName: string, flowdsl?: Flowdsl, page: number = 1, size: number = 20, withCount?: boolean) {
        const queryParams: ParamList = {
            page,
            size,
            viewName,
            withCount
        };

        return this.invokeApi<PagedResponse<EntityView>>(`/search/schemas/${index}`, 'POST', flowdsl, {
            queryParams: queryParams,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    /**
     * Searchs for entities and returns the entity merged with the schema and the view
     * @param index
     * @param viewName
     * @param {Flowdsl} flowdsl
     * @param offset
     * @param size
     * @param withCount
     */
    async fetchEntitiesVirtualized(index: string, viewName: string, flowdsl?: Flowdsl, offset: number = 0, size: number = 20, withCount?: boolean) {
        const queryParams: ParamList = {
            offset,
            size,
            viewName,
            withCount
        };

        return this.invokeApi<PagedResponse<EntityView>>(`/search/schemas/${index}`, 'POST', flowdsl, {
            queryParams: queryParams,
        });
    }

    /**
     * Searchs for entities and return the entity merged with the view and not like in v1 with the schema.
     * @param index
     * @param viewName
     * @param {Flowdsl} flowdsl
     * @param offset
     * @param size
     * @param withCount
     */
    async fetchEntitiesVirtualizedV2(index: string, viewName: string, flowdsl?: Flowdsl, offset: number = 0, size: number = 20, withCount?: boolean) {
        const queryParams: ParamList = {
            offset,
            size,
            viewName,
            withCount
        };

        return this.invokeApi<PagedResponse<EntityView>>(`/search/schemas/${index}`, 'POST', flowdsl, {
            queryParams: queryParams,
            headers: {
                'x-ff-version': 2
            }
        });
    }

    /**
     * Delete a entity in the Backend
     * @param entityId
     * @param schemaId
     */
    async deleteEntity(entityId: string, schemaId: string) {
        return this.invokeApi(`/schemas/${schemaId}/entities/${entityId}`, 'DELETE');
    }

    /**
     * Deletes some entities of a specific schema. The schema can be a group as well.
     * @param data
     */
    async deleteEntities(data: { entities: EntitySchemaQuery[] }) {
        return this.invokeApiWithErrorHandling<DeleteEntitiesResponse<string>>(`/entities`, 'DELETE', data, {
            headers: {
                // The v2 header is important, otherwise a customer could delete his whole system
                'x-ff-version': 2
            }
        });
    }

    /**
     * Update a entity in the backend
     * @param schemaId
     * @param entityId
     * @param fields
     */
    async updateEntity(schemaId: string, entityId: string, fields: EntityFields) {
        return this.invokeApi<Entity>(`/schemas/${schemaId}/entities/${entityId}`, 'PATCH', fields);
    }

    /**
     * TODO: Please comment this method
     * @param viewId
     * @param schemaId
     * @param entityId
     */
    async fetchEntityWithViewDefinition(viewId: string, schemaId: string, entityId: string) {
        return this.invokeApi<EntityView>(`/views/${viewId}/schemas/${schemaId}/entities/${entityId}`, 'GET');
    }

    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     */
    async fetchEntity(schemaId: string, entityId: string) {
        return this.invokeApi<Entity>(`/schemas/${schemaId}/entities/${entityId}`, 'GET');
    }

    /**
     * fetches the entity detail information just by id
     * @param entityId
     */
    async fetchEntityDescriptor(entityId: string) {
        return this.invokeApi<EntityDescriptor>(`/entities/${entityId}`, 'GET', undefined, {
            headers: {
                Accept: 'application/json+descriptor'
            }
        });
    }

    /**
     * Get the history of a entity in a well formatted form.
     * @param schemaId
     * @param entityId
     * @param page
     * @deprecated Please use the history-service instead.
     */
    async fetchHistory(schemaId: string, entityId: string, page: number): Promise<AxiosResponse> {
        return this.invokeApi(`/schemas/${schemaId}/entities/${entityId}/history?page=${page}&size=15&order=DESC`, 'GET');
    }

    /**
     * Check the right of a user to access a single entity.
     * @param schemaId
     * @param entityId
     * @param userId
     * @param accessType
     */
    async hasAccessForSingleEntity(schemaId: string, entityId: string, userId: string, accessType: EntityACLType): Promise<AxiosResponse> {
        return this.invokeApi(`/schemas/${schemaId}/entities/${entityId}/users/${userId}/hasaccess/${accessType}`, 'GET');
    }

    /**
     * Check the rights of a user to access several entities.
     * @param userId
     * @param accessType
     * @param entities
     */
    async hasAccessForMultipleEntities(userId: string, accessType: EntityACLType, entities: EntityQuery[]) {
        return this.invokeApi<EntityAccess[]>(`/users/${userId}/hasaccess/${accessType}`, 'POST', entities);
    }

    /**
     * This method sends entityIds and schemaIds to the entity-service and the entity-service transform this data
     * into views with the entity. So an array will be returned, with the viewEntity.
     * @param viewName
     * @param entityQueries
     */
    async transformEntitiesWithView(viewName: string, entityQueries: EntityQuery[]) {
        return this.invokeApi<EntityView[]>(`/views/${viewName}/entities`, 'POST', entityQueries);
    }

    /**
     * Duplicates an entity and its multimedia files like images and documents.
     * @param schemaId
     * @param entityId
     * @returns a new UUID of created entity.
     */
    async duplicateEntity(schemaId: uuid, entityId: uuid): Promise<AxiosResponse<string>> {
        return this.invokeApi(`/schemas/${schemaId}/entities/${entityId}/duplicate`, 'POST');
    }

    /**
     * Returns an entity
     * @param entityId
     */
    async fetchEntityWithoutSchemaId(entityId: string) {
        return this.invokeApiWithErrorHandling<Entity>(`/entities/${entityId}`, 'GET');
    }
}

export default new EntityService();
