import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var CustomerLegitimationArchiveService = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerLegitimationArchiveService, _super);
    function CustomerLegitimationArchiveService() {
        return _super.call(this, APIMapping.customerLegitimationArchiveService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param type
     */
    CustomerLegitimationArchiveService.prototype.findByType = function (type) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/public/master/legitimation/type/" + type, 'GET')];
            });
        });
    };
    return CustomerLegitimationArchiveService;
}(APIClient));
export { CustomerLegitimationArchiveService };
export default new CustomerLegitimationArchiveService();
//# sourceMappingURL=CustomerLegitimationArchiveService.js.map