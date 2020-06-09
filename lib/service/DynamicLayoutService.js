"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var DynamicLayoutService = /** @class */ (function (_super) {
    tslib_1.__extends(DynamicLayoutService, _super);
    function DynamicLayoutService() {
        return _super.call(this, http_1.APIMapping.dynamicLayoutService) || this;
    }
    /**
     * This method fetches a layout for a specific schema. If the provided schema has no overview, then
     * it returns the overview of the group (just if the schema is part of a group)
     * @param schemaId
     */
    DynamicLayoutService.prototype.fetchOverviewForSchema = function (schemaId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/overviews/schemaId/" + schemaId, 'GET')];
            });
        });
    };
    return DynamicLayoutService;
}(http_1.APIClient));
exports.DynamicLayoutService = DynamicLayoutService;
exports.default = new DynamicLayoutService();
//# sourceMappingURL=DynamicLayoutService.js.map