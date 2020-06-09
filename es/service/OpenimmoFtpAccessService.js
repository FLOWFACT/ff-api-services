import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var OpenimmoFtpAccessService = /** @class */ (function (_super) {
    tslib_1.__extends(OpenimmoFtpAccessService, _super);
    function OpenimmoFtpAccessService() {
        return _super.call(this, APIMapping.openimmoFtpAccessService) || this;
    }
    /**
     * get all openimmmos
     */
    OpenimmoFtpAccessService.prototype.fetchAllOpenimmos = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/ftp', 'GET', undefined)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * get one openimmo by using user
     * @param user
     */
    OpenimmoFtpAccessService.prototype.fetchOpenimmo = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/ftp/" + user, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * update an openimmo
     * @param user
     * @param openimmo
     */
    OpenimmoFtpAccessService.prototype.updateOpenimmo = function (user, openimmo) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/ftp/" + user, 'PUT', openimmo)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * create an openimmo
     * @param openimmo
     */
    OpenimmoFtpAccessService.prototype.createOpenimmo = function (openimmo) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/ftp', 'POST', openimmo)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * delete an openimmo
     * @param user
     */
    OpenimmoFtpAccessService.prototype.deleteOpenimmo = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/ftp/" + user, 'DELETE')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return OpenimmoFtpAccessService;
}(APIClient));
export { OpenimmoFtpAccessService };
export default new OpenimmoFtpAccessService();
//# sourceMappingURL=OpenimmoFtpAccessService.js.map