"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var SampleDataService = /** @class */ (function (_super) {
    tslib_1.__extends(SampleDataService, _super);
    function SampleDataService() {
        return _super.call(this, http_1.APIMapping.sampleDataService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param bundleName
     */
    SampleDataService.prototype.importSampleData = function (bundleName) {
        if (bundleName === void 0) { bundleName = 'All'; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var queryParams;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParams = {
                            bundleName: bundleName,
                        };
                        return [4 /*yield*/, this.invokeApi('/import', 'POST', undefined, { queryParams: queryParams })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param bundleName
     */
    SampleDataService.prototype.removeSampleData = function (bundleName) {
        if (bundleName === void 0) { bundleName = 'All'; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var queryParams;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParams = {
                            bundleName: bundleName,
                        };
                        return [4 /*yield*/, this.invokeApi('/remove', 'DELETE', undefined, { queryParams: queryParams })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param bundles
     */
    SampleDataService.prototype.importSampleDataBatch = function (bundles) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/batchimport', 'POST', {
                            bundles: bundles,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param scope
     */
    SampleDataService.prototype.fetchBundles = function (scope) {
        if (scope === void 0) { scope = 'FLOWFACT'; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/bundles', 'GET', undefined, {
                            queryParams: {
                                scope: scope,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return SampleDataService;
}(http_1.APIClient));
exports.SampleDataService = SampleDataService;
exports.default = new SampleDataService();
//# sourceMappingURL=SampleDataService.js.map