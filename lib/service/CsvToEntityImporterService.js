"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var CsvToEntityImporterService = /** @class */ (function (_super) {
    tslib_1.__extends(CsvToEntityImporterService, _super);
    function CsvToEntityImporterService() {
        return _super.call(this, http_1.APIMapping.csvToEntityImporterService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param file
     * @param targetSchema
     * @param delimiter
     */
    CsvToEntityImporterService.prototype.uploadCsvFile = function (file, targetSchema, delimiter) {
        if (delimiter === void 0) { delimiter = ','; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/upload?targetSchema=" + targetSchema + "&delimiter=" + delimiter, 'POST', file)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    return CsvToEntityImporterService;
}(http_1.APIClient));
exports.CsvToEntityImporterService = CsvToEntityImporterService;
exports.default = new CsvToEntityImporterService();
//# sourceMappingURL=CsvToEntityImporterService.js.map