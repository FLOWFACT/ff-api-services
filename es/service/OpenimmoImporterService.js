import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var OpenimmoImporterService = /** @class */ (function (_super) {
    tslib_1.__extends(OpenimmoImporterService, _super);
    function OpenimmoImporterService() {
        return _super.call(this, APIMapping.openimmoImporterService) || this;
    }
    OpenimmoImporterService.prototype.fetchLastUsedSenderSoftwareForCompanies = function (companyIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/internal/statistics/lastUsedSenderSoftwares', 'POST', companyIds)];
            });
        });
    };
    return OpenimmoImporterService;
}(APIClient));
export { OpenimmoImporterService };
export default new OpenimmoImporterService();
//# sourceMappingURL=OpenimmoImporterService.js.map