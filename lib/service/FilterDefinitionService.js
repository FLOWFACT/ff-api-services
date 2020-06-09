"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var FilterDefinitionService = /** @class */ (function (_super) {
    tslib_1.__extends(FilterDefinitionService, _super);
    function FilterDefinitionService() {
        return _super.call(this, http_1.APIMapping.filterDefinitionService) || this;
    }
    /**
     * Fetchs filter for a specific schema
     * @param schemaName
     */
    FilterDefinitionService.prototype.fetchFilter = function (schemaName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/filters', 'GET', undefined, {
                            queryParams: {
                                schemaName: schemaName
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get all saved filters for a schema
     * @param schemaName
     */
    FilterDefinitionService.prototype.fetchSavedFilters = function (schemaName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/filters/saved/schemas/" + schemaName, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Create a new saved filter for a schema
     * @param filterDefinition
     */
    FilterDefinitionService.prototype.createSavedFilter = function (filterDefinition) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/filters/saved', 'POST', filterDefinition)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update a saved filter by his id.
     * @param filterId
     * @param filterDefinition
     */
    FilterDefinitionService.prototype.updateSavedFilter = function (filterId, filterDefinition) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/filters/saved/" + filterId, 'PATCH', filterDefinition)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Delete a saved filter by his id.
     * @param filterId
     */
    FilterDefinitionService.prototype.deleteSavedFilter = function (filterId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/filters/saved/" + filterId, 'DELETE')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return FilterDefinitionService;
}(http_1.APIClient));
exports.default = new FilterDefinitionService();
//# sourceMappingURL=FilterDefinitionService.js.map