"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var FormService = /** @class */ (function (_super) {
    tslib_1.__extends(FormService, _super);
    function FormService() {
        return _super.call(this, http_1.APIMapping.formService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param integrationId
     */
    FormService.prototype.render = function (integrationId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/render/" + integrationId, 'POST').then(function (s) { return s.data; })];
            });
        });
    };
    return FormService;
}(http_1.APIClient));
exports.FormService = FormService;
exports.default = new FormService();
//# sourceMappingURL=FormService.js.map