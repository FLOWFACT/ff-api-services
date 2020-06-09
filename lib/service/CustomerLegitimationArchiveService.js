"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var CustomerLegitimationArchiveService = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerLegitimationArchiveService, _super);
    function CustomerLegitimationArchiveService() {
        return _super.call(this, http_1.APIMapping.customerLegitimationArchiveService) || this;
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
}(http_1.APIClient));
exports.CustomerLegitimationArchiveService = CustomerLegitimationArchiveService;
exports.default = new CustomerLegitimationArchiveService();
//# sourceMappingURL=CustomerLegitimationArchiveService.js.map