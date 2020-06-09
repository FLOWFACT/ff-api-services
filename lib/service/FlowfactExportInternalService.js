"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var FlowfactExportInternalService = /** @class */ (function (_super) {
    tslib_1.__extends(FlowfactExportInternalService, _super);
    function FlowfactExportInternalService() {
        return _super.call(this, http_1.APIMapping.flowfactExporterInternalService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param createAdminTokenRequest
     */
    FlowfactExportInternalService.prototype.createAdminUser = function (createAdminTokenRequest) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/adminUser', 'POST', createAdminTokenRequest)];
            });
        });
    };
    return FlowfactExportInternalService;
}(http_1.APIClient));
exports.FlowfactExportInternalService = FlowfactExportInternalService;
exports.default = new FlowfactExportInternalService();
//# sourceMappingURL=FlowfactExportInternalService.js.map