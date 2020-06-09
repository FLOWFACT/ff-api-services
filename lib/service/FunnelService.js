"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var FunnelService = /** @class */ (function (_super) {
    tslib_1.__extends(FunnelService, _super);
    function FunnelService() {
        return _super.call(this, http_1.APIMapping.funnelService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param funnelId
     */
    FunnelService.prototype.fethcPossibleTags = function (funnelId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId + "/possibletags", 'GET').then(function (s) { return s.data; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param tagName
     */
    FunnelService.prototype.fetchKeysForTag = function (funnelId, tagName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId + "/tags/" + tagName + "/metadata/keys", 'GET').then(function (s) { return s.data; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param tagName
     * @param metadataKey
     */
    FunnelService.prototype.fetchValuesForTagKey = function (funnelId, tagName, metadataKey) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId + "/tags/" + tagName + "/metadata/keys/" + metadataKey + "/values", 'GET').then(function (s) { return s.data; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     */
    FunnelService.prototype.fetchFunnelStatistics = function (funnelId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId + "/statistics", 'GET').then(function (s) { return s.data; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stageId
     * @param page
     * @param size
     */
    FunnelService.prototype.fetchFunnelStageEntities = function (funnelId, stageId, page, size) {
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 10; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/funnels/" + funnelId + "/stage/" + stageId + "/entities", 'GET', { page: page, size: size })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelToCreate
     */
    FunnelService.prototype.createFunnel = function (funnelToCreate) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/funnels', 'POST', funnelToCreate || {}).then(function (s) { return s.data; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     */
    FunnelService.prototype.duplicateFunnel = function (funnelId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/funnels/' + funnelId + '/duplicate', 'POST')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param includeEntityIds
     */
    FunnelService.prototype.findFunnelById = function (funnelId, includeEntityIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId, 'GET', undefined, includeEntityIds ? {
                        queryParams: {
                            includeEntityIds: "" + includeEntityIds
                        }
                    } : undefined)];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     */
    FunnelService.prototype.deleteFunnelById = function (funnelId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId, 'DELETE').then(function (s) { return s.data; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     */
    FunnelService.prototype.fetchAllStagesOfAnFunnel = function (funnelId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId + "/stages", 'GET').then(function (s) { return s.data; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stage
     */
    FunnelService.prototype.addStageAtTheEndOfTheFunnel = function (funnelId, stage) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId + "/stages", 'POST', stage || {}).then(function (s) { return s.data; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stageId
     */
    FunnelService.prototype.findStageById = function (funnelId, stageId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId + "/stages/" + stageId, 'GET').then(function (s) { return s.data; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stageId
     * @param stage
     */
    FunnelService.prototype.addStageAfterGivenStageOfGivenFunnel = function (funnelId, stageId, stage) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId + "/stages/" + stageId, 'POST', stage).then(function (s) { return s.data; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stageId
     * @param stage
     */
    FunnelService.prototype.changeAStagesOfAFunnel = function (funnelId, stageId, stage) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId + "/stages/" + stageId, 'PUT', stage).then(function (s) { return s.data; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stageId
     */
    FunnelService.prototype.deleteStageFromFunnel = function (funnelId, stageId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId + "/stages/" + stageId, 'DELETE').then(function (s) { return s.data; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     */
    FunnelService.prototype.fetchStateOfTheFunnel = function (funnelId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId + "/state", 'GET').then(function (s) { return s.data; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param state
     */
    FunnelService.prototype.changeStateOfTheFunnel = function (funnelId, state) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId + "/state", 'POST', state || {}).then(function (s) { return s.data; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param type
     */
    FunnelService.prototype.fetchAllActions = function (type) {
        if (type === void 0) { type = 'automatic'; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/funnels/actions/?type=' + type, 'GET').then(function (s) { return s.data; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param action
     * @param schemaId
     * @param entityId
     */
    FunnelService.prototype.executeActionForEntity = function (action, schemaId, entityId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/funnels/actions/execute/schemas/' + schemaId + '/entityId/' + entityId, 'POST', action)];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param state
     */
    FunnelService.prototype.fetchDashboardInformation = function (state) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (state) {
                    return [2 /*return*/, this.invokeApi('/funnels/dashboard', 'GET', undefined, { queryParams: { state: state } }).then(function (s) { return s.data.dashboardFunnels; })];
                }
                return [2 /*return*/, this.invokeApi('/funnels/dashboard', 'GET').then(function (s) { return s.data.dashboardFunnels; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param schemaId
     */
    FunnelService.prototype.fetchAvailableEntryConditionsForSchema = function (schemaId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/availableEntryConditions/" + schemaId, 'GET').then(function (s) { return s.data; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stageId
     */
    FunnelService.prototype.fetchAvailableEntryConditionsForPrevStage = function (funnelId, stageId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId + "/stages/" + stageId + "/availableEntryConditions", 'GET').then(function (s) { return s.data; })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param data
     */
    FunnelService.prototype.updateFunnelById = function (funnelId, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId, 'PUT', data)];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stageId
     */
    FunnelService.prototype.setStageAsFirstStage = function (funnelId, stageId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId + "/stages/" + stageId + "/parent", 'PUT')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stageId
     * @param parentId
     */
    FunnelService.prototype.setStageAfterStage = function (funnelId, stageId, parentId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/funnels/" + funnelId + "/stages/" + stageId + "/parent/" + parentId, 'PUT')];
            });
        });
    };
    return FunnelService;
}(http_1.APIClient));
exports.FunnelService = FunnelService;
exports.default = new FunnelService();
//# sourceMappingURL=FunnelService.js.map