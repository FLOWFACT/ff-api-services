import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var FormService = /** @class */ (function (_super) {
    tslib_1.__extends(FormService, _super);
    function FormService() {
        return _super.call(this, APIMapping.formService) || this;
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
}(APIClient));
export { FormService };
export default new FormService();
//# sourceMappingURL=FormService.js.map