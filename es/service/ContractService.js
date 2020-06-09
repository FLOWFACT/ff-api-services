import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var ContractService = /** @class */ (function (_super) {
    tslib_1.__extends(ContractService, _super);
    function ContractService() {
        var _this = _super.call(this, APIMapping.contractService) || this;
        /**
         * Get all available template contracts for a specific origin.
         * @param origin
         */
        _this.fetchTemplates = function (origin) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/templates', 'GET', undefined, {
                            queryParams: {
                                origin: origin
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        /**
         * Download a contract template
         * @param templateId
         */
        _this.downloadTemplate = function (templateId) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/templates/" + templateId + "/download", 'GET', undefined, {
                            responseType: 'arraybuffer'
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        return _this;
    }
    return ContractService;
}(APIClient));
export default new ContractService();
//# sourceMappingURL=ContractService.js.map