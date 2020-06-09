import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var ExcelExporterService = /** @class */ (function (_super) {
    tslib_1.__extends(ExcelExporterService, _super);
    function ExcelExporterService() {
        return _super.call(this, APIMapping.excelExporterService) || this;
    }
    /**
     *
     * @param schemaName The SchemaOrGroupName that is used to export the data.
     * @param filterConditions FilterConditions that should be used to define the result more specific
     * @returns A fileId that can be used to check if the process is finished.
     */
    ExcelExporterService.prototype.createExport = function (schemaName, filterConditions) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/export/schema/" + schemaName, 'POST', {
                        target: 'entity',
                        conditions: filterConditions
                    })];
            });
        });
    };
    /**
     *
     * @param fileId The Id of the file that will be created when the Exporter finished creating the results.
     * @returns The Download-Link of the file.
     */
    ExcelExporterService.prototype.getDownloadLink = function (fileId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/export/schema/download/" + fileId, 'GET')];
            });
        });
    };
    return ExcelExporterService;
}(APIClient));
export default new ExcelExporterService();
//# sourceMappingURL=ExcelExporterService.js.map