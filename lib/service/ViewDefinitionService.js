"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var qs = require("qs");
var ViewDefinitionService = /** @class */ (function (_super) {
    tslib_1.__extends(ViewDefinitionService, _super);
    function ViewDefinitionService() {
        return _super.call(this, http_1.APIMapping.viewDefinitionService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param schemaId
     */
    ViewDefinitionService.prototype.fetchDefinitionsForSchema = function (schemaId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/views', 'GET', undefined, {
                            queryParams: {
                                schemaId: schemaId,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param viewDefinitionId
     */
    ViewDefinitionService.prototype.fetchDefinition = function (viewDefinitionId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/views/" + viewDefinitionId, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns statistics for all views of a specific schema
     * @param schemaIdOrName
     */
    ViewDefinitionService.prototype.fetchStatistics = function (schemaIdOrName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/views/" + schemaIdOrName + "/statistics", 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param viewDefinitionId
     * @param viewDefinition
     */
    ViewDefinitionService.prototype.updateDefinition = function (viewDefinitionId, viewDefinition) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/views/" + viewDefinitionId, 'PUT', viewDefinition)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param viewDefinition
     */
    ViewDefinitionService.prototype.createDefinition = function (viewDefinition) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/views', 'POST', viewDefinition)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param viewDefinitionId
     */
    ViewDefinitionService.prototype.deleteDefinition = function (viewDefinitionId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/views/" + viewDefinitionId, 'DELETE')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param viewId
     * @param categoryName
     * @param categoryDefinition
     */
    ViewDefinitionService.prototype.updateCategory = function (viewId, categoryName, categoryDefinition) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/views/" + viewId + "/categories/" + categoryName, 'PATCH', categoryDefinition)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param viewId
     * @param categoryDefinition
     */
    ViewDefinitionService.prototype.addCategory = function (viewId, categoryDefinition) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/views/" + viewId + "/categories", 'PATCH', categoryDefinition)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param viewId
     * @param categoryName
     */
    ViewDefinitionService.prototype.deleteCategory = function (viewId, categoryName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/views/" + viewId + "/categories/" + categoryName, 'DELETE')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param viewName
     */
    ViewDefinitionService.prototype.listFieldsOfViews = function (viewName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/views/fields/" + viewName, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param viewName
     */
    ViewDefinitionService.prototype.fetchBySchemaAndName = function (schemaId, viewName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/views/schema/" + schemaId + "/name/" + viewName, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns views of the current company with a specific type
     * @param schemaId
     * @param viewType
     */
    ViewDefinitionService.prototype.fetchBySchemaAndType = function (schemaId, viewType) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/views/schema/" + schemaId + "/type/" + viewType, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns one or more view definitions by given types for a specific schema
     * @param schemaId
     * @param viewTypes
     */
    ViewDefinitionService.prototype.fetchBySchemaAndTypes = function (schemaId, viewTypes) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/views/schema/" + schemaId, 'GET', undefined, {
                            params: { types: viewTypes },
                            paramsSerializer: function (params) { return qs.stringify(params, { indices: false }); }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Saves the given customisation and triggers an event applying the customisation
     * @param customisation
     */
    ViewDefinitionService.prototype.saveCustomisation = function (customisation) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/customisations', 'POST', customisation)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This function sends a whole view definition to the view-definition-service. The service compares the new view definition to
     * the current one in the database to save which changes are made.
     * @param viewDefinition
     */
    ViewDefinitionService.prototype.saveCustomisations = function (viewDefinition) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/customisations/view/" + viewDefinition.id, 'PUT', viewDefinition)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ViewDefinitionService;
}(http_1.APIClient));
exports.ViewDefinitionService = ViewDefinitionService;
exports.default = new ViewDefinitionService();
//# sourceMappingURL=ViewDefinitionService.js.map