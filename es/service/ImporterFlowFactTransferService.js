import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var ImporterFlowFactTransferService = /** @class */ (function (_super) {
    tslib_1.__extends(ImporterFlowFactTransferService, _super);
    function ImporterFlowFactTransferService() {
        return _super.call(this, APIMapping.importerFlowFactTransferService) || this;
    }
    ImporterFlowFactTransferService.prototype.getNewIdFromLegacySystem = function (tableName, dsn) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/id', 'GET', undefined, {
                        queryParams: {
                            tableName: tableName,
                            oldId: dsn
                        }
                    })];
            });
        });
    };
    return ImporterFlowFactTransferService;
}(APIClient));
export { ImporterFlowFactTransferService };
export default new ImporterFlowFactTransferService();
//# sourceMappingURL=ImporterFlowFactTransferService.js.map