import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
import EnvironmentManagement from '../util/EnvironmentManagement';
var IS24EntitlementService = /** @class */ (function (_super) {
    tslib_1.__extends(IS24EntitlementService, _super);
    function IS24EntitlementService() {
        return _super.call(this, APIMapping.is24EntitlementService) || this;
    }
    /**
     * This method takes a temporary token created in the IS24 sso authentication flow and return cognito tokens.
     * @param temporaryToken
     */
    IS24EntitlementService.prototype.authenticate = function (temporaryToken) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/public/authentication/cognito', 'GET', undefined, {
                            queryParams: {
                                is24Token: temporaryToken
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Object.defineProperty(IS24EntitlementService.prototype, "authenticationRedirectURL", {
        get: function () {
            return EnvironmentManagement.getBaseUrl() + "/is24-entitlement-service/public/authenticate";
        },
        enumerable: true,
        configurable: true
    });
    return IS24EntitlementService;
}(APIClient));
export { IS24EntitlementService };
export default new IS24EntitlementService();
//# sourceMappingURL=IS24EntitlementService.js.map