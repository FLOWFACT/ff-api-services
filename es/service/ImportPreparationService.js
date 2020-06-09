import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var ImportPreparationService = /** @class */ (function (_super) {
    tslib_1.__extends(ImportPreparationService, _super);
    function ImportPreparationService() {
        return _super.call(this, APIMapping.importPreparationService) || this;
    }
    /**
     * Gets the importer user. If it does not exist, it will be created.
     */
    ImportPreparationService.prototype.getImporterUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/userAndTokenManagement/importerUser', 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets the API token for the importerUser.
     */
    ImportPreparationService.prototype.getImporterToken = function (importerUserId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/userAndTokenManagement/token/importerUser/" + importerUserId, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates the API token for the importerUser.
     */
    ImportPreparationService.prototype.createImporterToken = function (importerUserId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/userAndTokenManagement/token/importerUser/" + importerUserId, 'POST', {})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets the status of the currently running import.
     */
    ImportPreparationService.prototype.getImportStatus = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/status', 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ImportPreparationService;
}(APIClient));
export { ImportPreparationService };
export default new ImportPreparationService();
//# sourceMappingURL=ImportPreparationService.js.map