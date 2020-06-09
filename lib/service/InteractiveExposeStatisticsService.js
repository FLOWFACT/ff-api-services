"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var InteractiveExposeStatisticsService = /** @class */ (function (_super) {
    tslib_1.__extends(InteractiveExposeStatisticsService, _super);
    function InteractiveExposeStatisticsService() {
        return _super.call(this, http_1.APIMapping.interactiveExposeStatisticsService) || this;
    }
    /**
     * Returns the filled statistics data Object for a specific estate
     * @param {string} estateId
     * @returns {Promise<AxiosResponse>}
     */
    InteractiveExposeStatisticsService.prototype.fetchEstateStatistics = function (estateId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/estateStatistics', 'GET', undefined, {
                            queryParams: {
                                estateId: estateId
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Counts all iex which were sent for en estate.
     * @param estateId
     * @param singleCount represent the boolean if only contacts to whom iex was sent should be counted,
     *          or all sent iex including same contacts.
     */
    InteractiveExposeStatisticsService.prototype.fetchSentInteractiveExposeCount = function (estateId, singleCount) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/estateStatistics/" + estateId + "/sent/count", 'GET', undefined, singleCount != null ? {
                            queryParams: {
                                singleCount: singleCount
                            }
                        } : {})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Aggregates different statistics data for given estate by given statistics types.
     * @param estateId
     * @param requestedTypes represents a list with statistic types
     */
    InteractiveExposeStatisticsService.prototype.fetchDynamicEstateStatistics = function (estateId, requestedTypes) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/dynamic/" + estateId, 'POST', requestedTypes)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return InteractiveExposeStatisticsService;
}(http_1.APIClient));
exports.InteractiveExposeStatisticsService = InteractiveExposeStatisticsService;
exports.default = new InteractiveExposeStatisticsService();
//# sourceMappingURL=InteractiveExposeStatisticsService.js.map