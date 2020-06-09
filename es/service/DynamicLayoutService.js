import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var DynamicLayoutService = /** @class */ (function (_super) {
    tslib_1.__extends(DynamicLayoutService, _super);
    function DynamicLayoutService() {
        return _super.call(this, APIMapping.dynamicLayoutService) || this;
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
}(APIClient));
export { DynamicLayoutService };
export default new DynamicLayoutService();
//# sourceMappingURL=DynamicLayoutService.js.map