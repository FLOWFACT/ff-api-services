"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var APIClient_1 = require("../http/APIClient");
var APIMapping_1 = require("../http/APIMapping");
var HistoryModuleService = /** @class */ (function (_super) {
    tslib_1.__extends(HistoryModuleService, _super);
    function HistoryModuleService() {
        return _super.call(this, APIMapping_1.default.historyModuleService) || this;
    }
    /**
     * Fetches a history of an entity
     * @param schemaId
     * @param entityId
     * @param size
     * @param offset
     * @param filter
     */
    HistoryModuleService.prototype.fetchHistory = function (schemaId, entityId, size, offset, filter) {
        if (size === void 0) { size = 20; }
        if (offset === void 0) { offset = 0; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var body;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = {
                            schemaId: schemaId,
                            entityId: entityId,
                            size: size,
                            offset: offset,
                        };
                        if (filter) {
                            body.filter = filter;
                        }
                        return [4 /*yield*/, this.invokeApi('/history', 'POST', [body])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return HistoryModuleService;
}(APIClient_1.default));
exports.HistoryModuleService = HistoryModuleService;
exports.default = new HistoryModuleService();
//# sourceMappingURL=HistoryModuleService.js.map