import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var RelogService = /** @class */ (function (_super) {
    tslib_1.__extends(RelogService, _super);
    function RelogService() {
        return _super.call(this, APIMapping.relogService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param logEntry
     */
    RelogService.prototype.log = function (logEntry) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/relog/elk-gelf', 'POST', logEntry)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Here you don't have to pass the userId
     * @param logEntry
     */
    RelogService.prototype.logInternal = function (logEntry) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/internal/relog/elk-gelf', 'POST', logEntry)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param logEntries
     */
    RelogService.prototype.logBatch = function (logEntries) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/relog/elk-gelf/batch', 'POST', { batch: logEntries })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return RelogService;
}(APIClient));
export { RelogService };
export default new RelogService();
//# sourceMappingURL=RelogService.js.map