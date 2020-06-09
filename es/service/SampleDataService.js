import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var SampleDataService = /** @class */ (function (_super) {
    tslib_1.__extends(SampleDataService, _super);
    function SampleDataService() {
        return _super.call(this, APIMapping.sampleDataService) || this;
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
}(APIClient));
export { SampleDataService };
export default new SampleDataService();
//# sourceMappingURL=SampleDataService.js.map