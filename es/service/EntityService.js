import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var EntityService = /** @class */ (function (_super) {
    tslib_1.__extends(EntityService, _super);
    function EntityService() {
        return _super.call(this, APIMapping.entityService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entity
     * @return the created entity id
     */
    EntityService.prototype.createEntity = function (schemaId, entity) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/schemas/" + schemaId, 'POST', entity || {})];
            });
        });
    };
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
    EntityService.prototype.createEntityFromPrevious = function (schemaName, previousSchemaName, previousEntityId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/schemas/" + schemaName + "/previous", 'POST', undefined, {
                        queryParams: {
                            previousSchemaName: previousSchemaName,
                            previousEntityId: previousEntityId,
                        },
                    })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     * @param viewId
     */
    EntityService.prototype.stringifyEntity = function (schemaId, entityId, viewId) {
        if (viewId === void 0) { viewId = 'EntityRelationView'; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/views/" + viewId + "/schemas/" + schemaId + "/entities/" + entityId + "/stringify")];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param index
     * @param viewName
     * @param {Flowdsl} flowdsl
     * @param page
     * @param size
     * @param withCount
     */
    EntityService.prototype.searchEntity = function (index, viewName, flowdsl, page, size, withCount) {
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 20; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var queryParams;
            return tslib_1.__generator(this, function (_a) {
                queryParams = {
                    page: page,
                    size: size,
                    viewName: viewName,
                    withCount: withCount
                };
                return [2 /*return*/, this.invokeApi("/search/schemas/" + index, 'POST', flowdsl, {
                        queryParams: queryParams,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })];
            });
        });
    };
    /**
     * Searchs for entities and returns the entity merged with the schema and the view
     * @param index
     * @param viewName
     * @param {Flowdsl} flowdsl
     * @param offset
     * @param size
     * @param withCount
     */
    EntityService.prototype.fetchEntitiesVirtualized = function (index, viewName, flowdsl, offset, size, withCount) {
        if (offset === void 0) { offset = 0; }
        if (size === void 0) { size = 20; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var queryParams;
            return tslib_1.__generator(this, function (_a) {
                queryParams = {
                    offset: offset,
                    size: size,
                    viewName: viewName,
                    withCount: withCount
                };
                return [2 /*return*/, this.invokeApi("/search/schemas/" + index, 'POST', flowdsl, {
                        queryParams: queryParams,
                    })];
            });
        });
    };
    /**
     * Searchs for entities and return the entity merged with the view and not like in v1 with the schema.
     * @param index
     * @param viewName
     * @param {Flowdsl} flowdsl
     * @param offset
     * @param size
     * @param withCount
     */
    EntityService.prototype.fetchEntitiesVirtualizedV2 = function (index, viewName, flowdsl, offset, size, withCount) {
        if (offset === void 0) { offset = 0; }
        if (size === void 0) { size = 20; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var queryParams;
            return tslib_1.__generator(this, function (_a) {
                queryParams = {
                    offset: offset,
                    size: size,
                    viewName: viewName,
                    withCount: withCount
                };
                return [2 /*return*/, this.invokeApi("/search/schemas/" + index, 'POST', flowdsl, {
                        queryParams: queryParams,
                        headers: {
                            'x-ff-version': 2
                        }
                    })];
            });
        });
    };
    /**
     * Delete a entity in the Backend
     * @param entityId
     * @param schemaId
     */
    EntityService.prototype.deleteEntity = function (entityId, schemaId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/schemas/" + schemaId + "/entities/" + entityId, 'DELETE')];
            });
        });
    };
    /**
     * Update a entity in the backend
     * @param schemaId
     * @param entityId
     * @param field
     */
    EntityService.prototype.updateEntityField = function (schemaId, entityId, field) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/schemas/" + schemaId + "/entities/" + entityId, 'PATCH', field)];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param viewId
     * @param schemaId
     * @param entityId
     */
    EntityService.prototype.fetchEntityWithViewDefinition = function (viewId, schemaId, entityId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/views/" + viewId + "/schemas/" + schemaId + "/entities/" + entityId, 'GET')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     */
    EntityService.prototype.fetchEntity = function (schemaId, entityId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/schemas/" + schemaId + "/entities/" + entityId, 'GET')];
            });
        });
    };
    /**
     * Get the history of a entity in a well formatted form.
     * @param schemaId
     * @param entityId
     * @param page
     * @deprecated Please use the history-service instead.
     */
    EntityService.prototype.fetchHistory = function (schemaId, entityId, page) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/schemas/" + schemaId + "/entities/" + entityId + "/history?page=" + page + "&size=15&order=DESC", 'GET')];
            });
        });
    };
    /**
     * Check the right of a user to access a single entity.
     * @param schemaId
     * @param entityId
     * @param userId
     * @param accessType
     */
    EntityService.prototype.hasAccessForSingleEntity = function (schemaId, entityId, userId, accessType) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/schemas/" + schemaId + "/entities/" + entityId + "/users/" + userId + "/hasaccess/" + accessType, 'GET')];
            });
        });
    };
    /**
     * Check the rights of a user to access several entities.
     * @param userId
     * @param accessType
     * @param entities
     */
    EntityService.prototype.hasAccessForMultipleEntities = function (userId, accessType, entities) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/users/" + userId + "/hasaccess/" + accessType, 'POST', entities)];
            });
        });
    };
    /**
     * This method sends entityIds and schemaIds to the entity-service and the entity-service transform this data
     * into views with the entity. So an array will be returned, with the viewEntity.
     * @param viewName
     * @param entityQueries
     */
    EntityService.prototype.transformEntitiesWithView = function (viewName, entityQueries) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/views/" + viewName + "/entities", 'POST', entityQueries)];
            });
        });
    };
    /**
     * Duplicates an entity and its multimedia files like images and documents.
     * @param schemaId
     * @param entityId
     * @returns a new UUID of created entity.
     */
    EntityService.prototype.duplicateEntity = function (schemaId, entityId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/schemas/" + schemaId + "/entities/" + entityId + "/duplicate", 'POST')];
            });
        });
    };
    return EntityService;
}(APIClient));
export { EntityService };
export default new EntityService();
//# sourceMappingURL=EntityService.js.map