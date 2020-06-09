import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var PropertyMarketingPhaseService = /** @class */ (function (_super) {
    tslib_1.__extends(PropertyMarketingPhaseService, _super);
    function PropertyMarketingPhaseService() {
        return _super.call(this, APIMapping.propertyMarketingPhaseService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param schemaId
     */
    PropertyMarketingPhaseService.prototype.fetchPhases = function (schemaId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/" + schemaId + "/phases", 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param phaseName
     */
    PropertyMarketingPhaseService.prototype.fetchPhase = function (schemaId, phaseName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/" + schemaId + "/phases/" + phaseName, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param phaseName
     * @param page
     * @param size
     */
    PropertyMarketingPhaseService.prototype.fetchEntitiesInPhase = function (phaseName, page, size, archived, inactive) {
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 50; }
        if (archived === void 0) { archived = true; }
        if (inactive === void 0) { inactive = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/phases/" + phaseName + "/entities", 'GET', undefined, {
                            queryParams: {
                                archived: archived.toString(),
                                inactive: inactive.toString(),
                                page: page,
                                size: size
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param phaseName
     * @param schemaId
     * @param page
     * @param size
     */
    PropertyMarketingPhaseService.prototype.fetchEntitiesInPhaseAndSchema = function (phaseName, schemaId, page, size, archived, inactive) {
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 50; }
        if (archived === void 0) { archived = true; }
        if (inactive === void 0) { inactive = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/phases/" + phaseName + "/entities/" + schemaId, 'GET', undefined, {
                            queryParams: {
                                archived: archived.toString(),
                                inactive: inactive.toString(),
                                page: page,
                                size: size
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     */
    PropertyMarketingPhaseService.prototype.fetchCurrentPhase = function (schemaId, entityId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/" + schemaId + "/" + entityId + "/currentPhase", 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     * @param stepId
     * @param completed
     */
    PropertyMarketingPhaseService.prototype.updateStep = function (schemaId, entityId, stepId, completed) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/" + schemaId + "/" + entityId + "/updateStep", 'POST', {
                            stepId: stepId,
                            completed: completed
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Switches to next step using the step switch validator.
     * @param schemaId
     * @param entityId
     * @param stepId
     * @param source as string / enum, represents either KANBAN or LIFECYCLE
     * @returns {Promise<any>} Status OK or REJECTED and a list of widgets if rejected.
     */
    PropertyMarketingPhaseService.prototype.changeCurrentStep = function (schemaId, entityId, stepId, source) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/" + schemaId + "/" + entityId + "/switchToStep", 'POST', { stepId: stepId, source: source })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param maxCount
     */
    PropertyMarketingPhaseService.prototype.fetchPhaseStatistics = function (maxCount, archived, inactive) {
        if (maxCount === void 0) { maxCount = 50; }
        if (archived === void 0) { archived = true; }
        if (inactive === void 0) { inactive = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/phases/stats", 'GET', undefined, {
                            queryParams: {
                                archived: archived,
                                inactive: inactive,
                                size: maxCount
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     */
    PropertyMarketingPhaseService.prototype.fetchTotalCommissionForAllPhases = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/calculateTotalCommissionForAllPhases", 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param entities
     */
    PropertyMarketingPhaseService.prototype.fetchCurrentPhaseOfSomeEntities = function (entities) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/phases", 'POST', entities)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     */
    PropertyMarketingPhaseService.prototype.fetchAllPhasesForEstate = function (schemaId, entityId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/" + schemaId + "/" + entityId + "/phases", 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param stepId
     * @param schemaId
     * @param entityId
     */
    PropertyMarketingPhaseService.prototype.validateStep = function (stepId, schemaId, entityId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/validateStep/stepId/" + stepId + "/schemaId/" + schemaId + "/entityId/" + entityId, 'POST')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     */
    PropertyMarketingPhaseService.prototype.deleteEntityInformation = function (schemaId, entityId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/steps/" + schemaId + "/" + entityId, 'DELETE')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     */
    PropertyMarketingPhaseService.prototype.fetchConfigurations = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/phaseconfigurations', 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param phaseConfigurationInformation
     */
    PropertyMarketingPhaseService.prototype.saveOrUpdateConfiguration = function (phaseConfigurationInformation) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/phaseconfigurations', 'POST', phaseConfigurationInformation)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param id
     */
    PropertyMarketingPhaseService.prototype.deleteCustomConfiguration = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/phaseconfigurations/" + id, 'DELETE')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return PropertyMarketingPhaseService;
}(APIClient));
export { PropertyMarketingPhaseService };
export default new PropertyMarketingPhaseService();
//# sourceMappingURL=PropertyMarketingPhaseService.js.map