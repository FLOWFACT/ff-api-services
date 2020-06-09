import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var CommissionCalculationService = /** @class */ (function (_super) {
    tslib_1.__extends(CommissionCalculationService, _super);
    function CommissionCalculationService() {
        return _super.call(this, APIMapping.commissionCalculationService) || this;
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
}(APIClient));
export { CommissionCalculationService };
export default new CommissionCalculationService();
//# sourceMappingURL=CommissionCalculationService.js.map