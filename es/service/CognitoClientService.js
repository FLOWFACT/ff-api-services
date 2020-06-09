import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var CognitoClientService = /** @class */ (function (_super) {
    tslib_1.__extends(CognitoClientService, _super);
    function CognitoClientService() {
        var _this = _super.call(this, APIMapping.cognitoClientService) || this;
        /**
         * check if the specific mail address is blocked, return 200 when the email is blocked, otherwise 404
         * @param mailAddress mail address to check
         */
        _this.isMailBlocked = function (mailAddress) {
            return _this.invokeApi("/public/mailing/blocks/" + mailAddress, 'GET');
        };
        return _this;
    }
    /**
     * TODO: Please comment this method
     * @param aliasMailAddress
     */
    CognitoClientService.prototype.fetchLoginNameByAliasMailAddress = function (aliasMailAddress) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/public/users/loginname/", 'GET', undefined, {
                        queryParams: {
                            aliasMailAddress: aliasMailAddress
                        }
                    })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param aliasMailAddress
     */
    CognitoClientService.prototype.linkAccount = function (aliasMailAddress) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/public/users/link", 'POST', undefined, {
                        queryParams: {
                            aliasMailAddress: aliasMailAddress
                        }
                    })];
            });
        });
    };
    /**
     * This method resets the password of a specific user
     * @param aliasMailAddress
     * @param businessMailAddress
     */
    CognitoClientService.prototype.resetPassword = function (aliasMailAddress, businessMailAddress) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/users/password", 'POST', {
                        aliasMailAddress: aliasMailAddress,
                        businessMailAddress: businessMailAddress
                    })];
            });
        });
    };
    return CognitoClientService;
}(APIClient));
export { CognitoClientService };
export default new CognitoClientService();
//# sourceMappingURL=CognitoClientService.js.map