import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var FlowfactExportInternalService = /** @class */ (function (_super) {
    tslib_1.__extends(FlowfactExportInternalService, _super);
    function FlowfactExportInternalService() {
        return _super.call(this, APIMapping.flowfactExporterInternalService) || this;
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
}(APIClient));
export { FlowfactExportInternalService };
export default new FlowfactExportInternalService();
//# sourceMappingURL=FlowfactExportInternalService.js.map