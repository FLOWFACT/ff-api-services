"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var PresetService = /** @class */ (function (_super) {
    tslib_1.__extends(PresetService, _super);
    function PresetService() {
        return _super.call(this, http_1.APIMapping.presetService) || this;
    }
    /**
     * TODO: Please comment this method
     */
    PresetService.prototype.fetchPresets = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/preset', 'GET').then(function (s) { return s.data; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return PresetService;
}(http_1.APIClient));
exports.PresetService = PresetService;
exports.default = new PresetService();
//# sourceMappingURL=PresetService.js.map