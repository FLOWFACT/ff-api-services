"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var Office365AuthenticationService = /** @class */ (function (_super) {
    tslib_1.__extends(Office365AuthenticationService, _super);
    function Office365AuthenticationService() {
        return _super.call(this, http_1.APIMapping.office365AuthenticationService) || this;
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
}(http_1.APIClient));
exports.Office365AuthenticationService = Office365AuthenticationService;
exports.default = new Office365AuthenticationService();
//# sourceMappingURL=Office365AuthenticationService.js.map