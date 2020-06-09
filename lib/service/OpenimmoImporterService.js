"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var OpenimmoImporterService = /** @class */ (function (_super) {
    tslib_1.__extends(OpenimmoImporterService, _super);
    function OpenimmoImporterService() {
        return _super.call(this, http_1.APIMapping.openimmoImporterService) || this;
    }
    OpenimmoImporterService.prototype.fetchLastUsedSenderSoftwareForCompanies = function (companyIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/internal/statistics/lastUsedSenderSoftwares', 'POST', companyIds)];
            });
        });
    };
    return OpenimmoImporterService;
}(http_1.APIClient));
exports.OpenimmoImporterService = OpenimmoImporterService;
exports.default = new OpenimmoImporterService();
//# sourceMappingURL=OpenimmoImporterService.js.map