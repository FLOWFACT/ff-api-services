import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var SchemaService = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaService, _super);
    function SchemaService() {
        return _super.call(this, APIMapping.schemaService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param withGroups
     */
    SchemaService.prototype.loadStats = function (withGroups) {
        if (withGroups === void 0) { withGroups = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var additionalParams;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        additionalParams = withGroups ? { queryParams: { groups: 'true' } } : undefined;
                        return [4 /*yield*/, this.invokeApi('/stats', 'GET', undefined, additionalParams)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param withGroups
     * @param short
     */
    SchemaService.prototype.fetchAllSchemas = function (withGroups, short) {
        if (withGroups === void 0) { withGroups = false; }
        if (short === void 0) { short = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var queryParams;
            return tslib_1.__generator(this, function (_a) {
                queryParams = {
                    transform: true
                };
                if (withGroups) {
                    queryParams.groups = 'true';
                }
                if (short) {
                    queryParams.short = 'true';
                }
                return [2 /*return*/, this.invokeApi('/schemas', 'GET', undefined, { queryParams: queryParams })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param page
     * @param size
     */
    SchemaService.prototype.fetchDataBySchemaId = function (schemaId, page, size) {
        if (page === void 0) { page = 1; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var queryParams;
            return tslib_1.__generator(this, function (_a) {
                queryParams = {
                    page: page.toString(),
                };
                if (size) {
                    queryParams.size = size.toString();
                }
                return [2 /*return*/, this.invokeApi("/data/" + schemaId, 'GET', undefined, { queryParams: queryParams })];
            });
        });
    };
    /**
     * @deprecated Please use SchemaServiceV2.fetchSchemaByIdOrName
     * Retrieves a schema by schemaId
     * @param schemaId
     * @param queryParams
     */
    SchemaService.prototype.fetchSchema = function (schemaId, queryParams) {
        if (queryParams === void 0) { queryParams = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                queryParams.transform = true;
                return [2 /*return*/, this.invokeApi("/schemas/" + schemaId, 'GET', undefined, { queryParams: queryParams })];
            });
        });
    };
    /**
     * @deprecated Please use SchemaServiceV2.createSchema
     * Creates a schema
     * @param schema
     */
    SchemaService.prototype.createSchema = function (schema) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/schemas?transform=true', 'POST', schema)];
            });
        });
    };
    /**
     * @deprecated Please use SchemaServiceV2.deleteSchema
     * Deletes a schema
     * @param schemaId
     */
    SchemaService.prototype.deleteSchema = function (schemaId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/schemas/" + schemaId, 'DELETE')];
            });
        });
    };
    /**
     * @deprecated Please use SchemaServiceV2.deleteAllSchema
     * deletes all groups and schemas
     * @constructor
     * @param {string} key - if you are sure you want delete all schemas then set key = DELETE
     */
    SchemaService.prototype.deleteAllSchema = function (key) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (!key || key !== 'DELETE') {
                    return [2 /*return*/, Promise.reject('you need to set key = DELETE if you are sure you want delete all schemas')];
                }
                return [2 /*return*/, this.invokeApi("/schemas/deleteAll?key=" + key, 'DELETE')];
            });
        });
    };
    /**
     * @deprecated Please use SchemaServiceV2.updateSchema
     * Updates a schema
     * @param schema
     */
    SchemaService.prototype.updateSchema = function (schema) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/schemas/" + schema.id + "?transform=true", 'PUT', schema)];
            });
        });
    };
    /**
     * Fetchs a transformed integration by his id.
     * @param integrationId
     */
    SchemaService.prototype.fetchIntegration = function (integrationId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/integrations/" + integrationId, 'GET', undefined, {
                        queryParams: {
                            transform: true
                        }
                    })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param schemaId
     */
    SchemaService.prototype.fetchIntegrationsForSchema = function (schemaId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/integrations?schemaId=" + schemaId + "&transform=true", 'GET')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param label
     */
    SchemaService.prototype.createIntegrationForSchema = function (schemaId, label) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var integration;
            return tslib_1.__generator(this, function (_a) {
                integration = {
                    schemaId: schemaId,
                    label: label
                };
                return [2 /*return*/, this.invokeApi('/integrations?transform=true', 'POST', integration)];
            });
        });
    };
    /**
     * This updates just the formData of an integration
     * @param integrationId
     * @param data
     */
    SchemaService.prototype.updateIntegrationFormData = function (integrationId, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/integrations/" + integrationId + "/formdata?transform=true", 'POST', data)];
            });
        });
    };
    /**
     * This updates the whole integration
     * @param integrationId
     * @param data
     */
    SchemaService.prototype.updateIntegration = function (integrationId, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/integrations/" + integrationId, 'PUT', data)];
            });
        });
    };
    /**
     * Delete an integration by the representing id.
     * @param integrationId
     */
    SchemaService.prototype.deleteIntegration = function (integrationId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/integrations/" + integrationId, 'DELETE')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param url
     */
    SchemaService.prototype.fetchResponseForIntegrationGetUrlByUrl = function (url) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi(url, 'GET')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param integrationId
     */
    SchemaService.prototype.fetchResponseForIntegrationGetUrlById = function (integrationId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/integrations/" + integrationId + "/data", 'GET')];
            });
        });
    };
    /**
     * @deprecated Please use SchemaServiceV2.fetchAllSchemas and pass in the group's name to filter
     * Retrieves all members (schemas) of a given groupId
     * @param groupId
     */
    SchemaService.prototype.fetchAllMembersOfGroup = function (groupId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/groups/" + groupId + "/members", 'GET')];
            });
        });
    };
    /**
     * Fetches all complex data types
     */
    SchemaService.prototype.fetchDataTypes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/datatypes/alltypes', 'GET', undefined, {
                        queryParams: {
                            transform: true
                        }
                    })];
            });
        });
    };
    return SchemaService;
}(APIClient));
export { SchemaService };
export default new SchemaService();
//# sourceMappingURL=SchemaService.js.map