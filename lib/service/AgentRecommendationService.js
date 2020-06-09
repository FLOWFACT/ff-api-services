"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var AgentRecommendationService = /** @class */ (function (_super) {
    tslib_1.__extends(AgentRecommendationService, _super);
    function AgentRecommendationService() {
        return _super.call(this, http_1.APIMapping.agentRecommendationService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     */
    AgentRecommendationService.prototype.fetchViewForAgent = function (schemaId, entityId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/agent/schema/" + schemaId + "/entity/" + entityId, 'GET')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     * @param file
     */
    AgentRecommendationService.prototype.uploadAgentVideo = function (schemaId, entityId, file) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var formData;
            return tslib_1.__generator(this, function (_a) {
                formData = new FormData();
                formData.append('file', file);
                return [2 /*return*/, this.invokeApi("/agent/upload/schema/" + schemaId + "/entity/" + entityId, 'POST', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     * @param file
     * @param token
     */
    AgentRecommendationService.prototype.uploadRaterVideo = function (schemaId, entityId, file, token) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var formData;
            return tslib_1.__generator(this, function (_a) {
                formData = new FormData();
                formData.append('file', file);
                return [2 /*return*/, this.invokeApi("/public/authenticated/upload/schema/" + schemaId + "/entity/" + entityId + "?accessToken=" + token, 'POST', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param token
     */
    AgentRecommendationService.prototype.fetchViewForRater = function (token) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/public/authenticated/getViewForProspect?accessToken=" + token, 'GET', undefined, {
                        headers: {
                            'Accept': 'application/json'
                        }
                    })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param token
     */
    AgentRecommendationService.prototype.fetchCompanyAndUser = function (token) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/public/authenticated/companyAndUser?accessToken=" + token, 'GET')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param fieldValueMapping
     * @param token
     */
    AgentRecommendationService.prototype.updateEntity = function (fieldValueMapping, token) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/public/authenticated/updateEntity?accessToken=" + token, 'PATCH', fieldValueMapping)];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param token
     * @param value
     */
    AgentRecommendationService.prototype.finishRating = function (token, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/public/authenticated/finishRating?accessToken=" + token, 'POST', value)];
            });
        });
    };
    /**
     * TODO: Please comment this method
     */
    AgentRecommendationService.prototype.createPreconditions = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/agent/preconditions', 'POST')];
            });
        });
    };
    return AgentRecommendationService;
}(http_1.APIClient));
exports.AgentRecommendationService = AgentRecommendationService;
exports.default = new AgentRecommendationService();
//# sourceMappingURL=AgentRecommendationService.js.map