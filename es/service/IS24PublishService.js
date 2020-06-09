import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var IS24PublishService = /** @class */ (function (_super) {
    tslib_1.__extends(IS24PublishService, _super);
    function IS24PublishService() {
        var _this = _super.call(this, APIMapping.is24PublishService) || this;
        /**
         * This generates a is24 report for a specific estate and a timerange
         * @param estateId
         * @param startDate
         * @param toDate
         */
        _this.fetchReport = function (estateId, startDate, toDate) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/statistics/estates/" + estateId, 'GET', undefined, {
                            queryParams: {
                                startDate: startDate,
                                toDate: toDate,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        /**
         * Fetches projects for special portal
         * @param portalId
         */
        _this.fetchProjects = function (portalId) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/portals/" + portalId + "/projects", 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        return _this;
    }
    return IS24PublishService;
}(APIClient));
export { IS24PublishService };
export default new IS24PublishService();
//# sourceMappingURL=IS24PublishService.js.map