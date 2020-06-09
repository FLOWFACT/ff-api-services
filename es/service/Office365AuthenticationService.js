import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var Office365AuthenticationService = /** @class */ (function (_super) {
    tslib_1.__extends(Office365AuthenticationService, _super);
    function Office365AuthenticationService() {
        return _super.call(this, APIMapping.office365AuthenticationService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param temporaryToken
     */
    Office365AuthenticationService.prototype.authenticate = function (temporaryToken) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/public/authentication/cognito', 'GET', undefined, {
                            queryParams: {
                                temporaryToken: temporaryToken
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param code
     * @param redirectUrl
     * @param clientId
     */
    Office365AuthenticationService.prototype.registerContract = function (code, redirectUrl, clientId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/public/authentication/salesautomat', 'GET', undefined, {
                            queryParams: {
                                code: code,
                                redirectUrl: redirectUrl,
                                clientId: clientId,
                                origin: 'client'
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Office365AuthenticationService;
}(APIClient));
export { Office365AuthenticationService };
export default new Office365AuthenticationService();
//# sourceMappingURL=Office365AuthenticationService.js.map