"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var v2Header = { headers: { 'x-ff-version': 2 } };
var SchemaServiceV2 = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaServiceV2, _super);
    function SchemaServiceV2() {
        var _this = _super.call(this, http_1.APIMapping.schemaService) || this;
        /**
         * Creates a schema. Also needed groups are created if not existent.
         * @param schema - The schema that should be created
         */
        _this.createSchema = function (schema) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/v2/schemas', 'POST', schema)];
            });
        }); };
        /**
         * Returns all schemas
         * @param group - Filters all schemas for given group name.
         * @param size - Page size of the response.
         * @param page - Page number of the response.
         * @param extensions - Extensions that should be added to the schema
         */
        _this.fetchAllSchemas = function (group, size, page, extensions) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var queryParams;
            return tslib_1.__generator(this, function (_a) {
                queryParams = {};
                if (group) {
                    queryParams.group = group;
                }
                if (size) {
                    queryParams.size = size;
                }
                if (page) {
                    queryParams.page = page;
                }
                if (extensions) {
                    queryParams.extensions = extensions;
                }
                return [2 /*return*/, this.invokeApi("/v2/schemas", 'GET', undefined, { queryParams: queryParams })];
            });
        }); };
        /**
         * Deletes a schema
         * @param schemaId - A schema's id or schemaname
         */
        _this.deleteSchema = function (schemaId) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/v2/schemas/" + schemaId, 'DELETE')];
            });
        }); };
        /**
         * Updates a schema. Also needed groups are created if not existent.
         * @param schema - The schema to be updated
         */
        _this.updateSchema = function (schema) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/v2/schemas/" + schema.id, 'PUT', schema)];
            });
        }); };
        /**
         * @typedef {Object} FetchSchemaByIdOrNameQueryParam
         * @property {boolean} resolveGroup
         */
        /**
         * Returns a schema
         * @param schemaIdOrName - The schema's id or schema name
         * @param {FetchSchemaByIdOrNameQueryParam} queryParams - resolves groups, like estates, to hist children - Default value : false
         */
        _this.fetchSchemaByIdOrName = function (schemaIdOrName, queryParams) {
            if (queryParams === void 0) { queryParams = { extensions: 'all' }; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    return [2 /*return*/, this.invokeApi("/v2/schemas/" + schemaIdOrName, 'GET', undefined, { queryParams: queryParams })];
                });
            });
        };
        /**
         * Checks if schema exists, returns id if so
         * @param schemaName - The schema's name
         */
        _this.exists = function (schemaName) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/v2/schemas/" + schemaName + "/exists", 'GET')];
            });
        }); };
        /**
         * Adds a value to schema
         * @param schemaName - Identifies the schema
         * @param fieldName - Identifies the field name
         * @param value - The value that should be added
         */
        _this.addPossibleValues = function (schemaName, fieldName, value) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/v2/schemas/" + schemaName + "/fields/" + fieldName + "/possiblevalues", 'POST', value)];
            });
        }); };
        /**
         * Deletes all schemas in current company scope
         * @param key - if you are sure you want delete all schemas then set key = DELETE
         */
        _this.deleteAllSchema = function (key) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (!key || key !== 'DELETE') {
                    return [2 /*return*/, Promise.reject('you need to set key = DELETE if you are sure you want delete all schemas')];
                }
                return [2 /*return*/, this.invokeApi("/v2/schemas/deleteAll?key=" + key, 'DELETE')];
            });
        }); };
        /**
         * Resolves all indices for a given identifier
         * @param identifier - Id for groups and schemas
         */
        _this.resolveIndices = function (identifier) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/v2/schemas/resolveIndices?identifier=" + identifier, 'GET')];
            });
        }); };
        /**
         * Resolves the given name
         * @param schemaName - A name of a schema
         */
        _this.resolveName = function (schemaName) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/v2/schemas/resolveName?name=" + schemaName, 'GET')];
            });
        }); };
        /* -- Schema groups */
        /**
         * Returns all groups
         */
        _this.getAllGroups = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/groups/", 'GET', undefined, v2Header)];
            });
        }); };
        /**
         * Creates a schema group
         * @param group - The group that should be created
         */
        _this.createGroup = function (group) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/groups/", 'POST', group, v2Header)];
            });
        }); };
        /**
         * Updates a schema group
         * @param group - The group that should be updated
         */
        _this.updateGroup = function (group) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/groups/" + group.id, 'PUT', group, v2Header)];
            });
        }); };
        /**
         * Retrieves a schema group by it's identifier (id or name)
         * @param identifier - The schema groups identifier (id or name)
         */
        _this.fetchGroupByIdentifier = function (identifier) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/groups/" + identifier, 'GET', undefined, v2Header)];
            });
        }); };
        /**
         * Deletes a schema group by it's identifier (id or name)
         * @param identifier - The schema groups identifier (id or name)
         */
        _this.deleteGroupById = function (identifier) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/groups/" + identifier, 'DELETE', undefined, v2Header)];
            });
        }); };
        /**
         * Tells you if the given identifier belongs to a group
         * @param identifier - The schema groups identifier (id or name)
         */
        _this.isGroup = function (identifier) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/groups/" + identifier + "/is-group", 'GET', undefined, v2Header)];
            });
        }); };
        // Extension Controller
        /**
         * Fetches all extensions.
         */
        _this.fetchExtensions = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/extensions", 'GET', undefined, v2Header)];
            });
        }); };
        /**
         * Fetches extension by name.
         * @param name - The extenion's name.
         */
        _this.fetchExtension = function (name) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/extensions/" + name, 'GET', undefined, v2Header)];
            });
        }); };
        /**
         * Create or Updates extension by name.
         * @param name - The extension's name.
         * @param extension - The extension object, that should be created or updated.
         */
        _this.createOrUpdateExtension = function (name, extension) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/extensions/" + name, 'PUT', extension, v2Header)];
            });
        }); };
        /**
         * Deletes extension by name.
         * @param name - The extension's name.
         */
        _this.deleteExtension = function (name) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/extensions/" + name, 'DELETE', undefined, v2Header)];
            });
        }); };
        /**
         * Fetches all extensions for a specific combination of schema and company.
         * @param schemaName - The schema name
         */
        _this.fetchExtensionsBySchema = function (schemaName) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/extensions/schemas/" + schemaName, 'GET', undefined, v2Header)];
            });
        }); };
        // Extension-Assignment-Controller
        /**
         * Fetches stats overs all assigned extensions.
         */
        _this.fetchExtensionAssignments = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/extensions/assignments", 'GET', undefined, v2Header)];
            });
        }); };
        /**
         * Assigns extension by name of a extension.
         * It will be assigned to the schemas, which are mentioned within the extension and nowhere else.
         * @Param name - The extension's name.
         */
        _this.addExtensionAssignment = function (name) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/extensions/assignments/" + name, 'POST', undefined, v2Header)];
            });
        }); };
        /**
         * Revokes assignment of an extension by its name.
         * @Param name - The extension's name.
         */
        _this.removeExtensionAssignment = function (name) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/extensions/assignments/" + name, 'DELETE', undefined, v2Header)];
            });
        }); };
        return _this;
    }
    return SchemaServiceV2;
}(http_1.APIClient));
exports.SchemaServiceV2 = SchemaServiceV2;
exports.default = new SchemaServiceV2();
//# sourceMappingURL=SchemaServiceV2.js.map