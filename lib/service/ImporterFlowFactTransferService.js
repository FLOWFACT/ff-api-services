"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var ImporterFlowFactTransferService = /** @class */ (function (_super) {
    tslib_1.__extends(ImporterFlowFactTransferService, _super);
    function ImporterFlowFactTransferService() {
        return _super.call(this, http_1.APIMapping.importerFlowFactTransferService) || this;
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
}(http_1.APIClient));
exports.ImporterFlowFactTransferService = ImporterFlowFactTransferService;
exports.default = new ImporterFlowFactTransferService();
//# sourceMappingURL=ImporterFlowFactTransferService.js.map