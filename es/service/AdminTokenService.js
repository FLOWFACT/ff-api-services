import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var AdminTokenService = /** @class */ (function (_super) {
    tslib_1.__extends(AdminTokenService, _super);
    function AdminTokenService() {
        return _super.call(this, APIMapping.adminTokenService) || this;
    }
    /**
     * TODO: Please comment this method
     */
    AdminTokenService.prototype.createOrReturnAdminToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/createOrReturnAdminToken', 'POST')];
            });
        });
    };
    /**
     * Authenticate the user with the platformToken and returns the cognitoToken
     * @param {string} platformToken
     * @returns {Promise<AxiosResponse>}
     */
    AdminTokenService.prototype.authenticate = function (platformToken) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/public/adminUser/authenticate', 'GET', undefined, {
                        headers: {
                            token: platformToken
                        }
                    })];
            });
        });
    };
    /**
     * Authenticate the user with the platformToken and returns the cognitoToken + username
     * @param {string} platformToken
     * @returns {Promise<AxiosResponse>}
     */
    AdminTokenService.prototype.authenticateAndReturnUsernameWithToken = function (platformToken) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/public/adminUser/authenticateAndReturnUsernameWithToken', 'GET', undefined, {
                        headers: {
                            token: platformToken
                        }
                    })];
            });
        });
    };
    return AdminTokenService;
}(APIClient));
export { AdminTokenService };
export default new AdminTokenService();
//# sourceMappingURL=AdminTokenService.js.map