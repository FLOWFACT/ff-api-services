"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var CommissionCalculationService = /** @class */ (function (_super) {
    tslib_1.__extends(CommissionCalculationService, _super);
    function CommissionCalculationService() {
        return _super.call(this, http_1.APIMapping.commissionCalculationService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param entityIds
     */
    CommissionCalculationService.prototype.calculateTotalCommission = function (entityIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/calculateTotalCommission", 'POST', entityIds)];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param entityIds
     */
    CommissionCalculationService.prototype.calculateSeparateCommission = function (entityIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/calculateSeparateCommission", 'POST', entityIds)];
            });
        });
    };
    return CommissionCalculationService;
}(http_1.APIClient));
exports.CommissionCalculationService = CommissionCalculationService;
exports.default = new CommissionCalculationService();
//# sourceMappingURL=CommissionCalculationService.js.map