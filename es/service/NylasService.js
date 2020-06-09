import * as tslib_1 from "tslib";
import APIClient from '../http/APIClient';
import APIMapping from '../http/APIMapping';
/**
 * See https://docs.nylas.com/reference for more info
 */
var NylasService = /** @class */ (function (_super) {
    tslib_1.__extends(NylasService, _super);
    function NylasService() {
        return _super.call(this, APIMapping.nylasService) || this;
    }
    /**
     * Authorize a user with the code from the nylas callback
     * @param code
     */
    NylasService.prototype.authorizeUser = function (code, isGmail) {
        if (isGmail === void 0) { isGmail = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/account', 'POST', undefined, {
                            queryParams: {
                                command: 'authorize',
                                nativeAuth: false,
                                isGmail: isGmail,
                                code: code
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Authorize a user with specific credentials
     * @param authRequest IMAP/SMTP credentials
     */
    NylasService.prototype.nativeAuth = function (authRequest) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/account', 'POST', authRequest, {
                            queryParams: {
                                nativeAuth: true,
                                command: 'authorize'
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Reactivates a 'cancelled' account and sets it back to 'paid' in nylas
     * @param email the email address to reactivate
     */
    NylasService.prototype.reactivate = function (email) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/reactivate', 'POST', undefined, {
                            queryParams: {
                                email: email
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sends an email using the nylas api
     * @param emailAccount the email to be sending from
     * @param email
     */
    NylasService.prototype.sendMail = function (emailAccount, email) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/nylas/send', 'POST', email, {
                            'queryParams': {
                                'email': emailAccount
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *
     */
    NylasService.prototype.fetchConfig = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/config', 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Generate a url that follows the nylas hosted authorization flow
     * @param email
     * @param callbackUrl URL that has to be confiured
     */
    NylasService.prototype.getRegistrationUrl = function (email, callbackUrl, isGmail) {
        if (isGmail === void 0) { isGmail = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/registration-url', 'GET', undefined, {
                            queryParams: {
                                email: email,
                                callbackUrl: callbackUrl,
                                isGmail: isGmail
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sets the email account values to the supplied settings, nulls them if they are left out
     * @param config
     */
    NylasService.prototype.overwriteSettings = function (config) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/config', 'POST', config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates the settings to the specified values, keeps existing values if none are supplied
     * @param config
     */
    NylasService.prototype.updateSettings = function (config) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/config', 'PATCH', config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     */
    /* UNDER DEVELOPMENT; DOES NOT WORK YET */
    NylasService.prototype.deleteAccount = function (email) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/account', 'DELETE', undefined, {
                            queryParams: {
                                email: email
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method returns all information of the given provider.
     * @param mail
     */
    NylasService.prototype.fetchMailSettings = function (mail) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/mailsettings', 'POST', {
                            mail: mail
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method returns all available calendars for the account
     * @param email
     */
    NylasService.prototype.fetchCalendars = function (email) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/nylas/calendars', 'GET', undefined, {
                            queryParams: {
                                email: email
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return NylasService;
}(APIClient));
export { NylasService };
export default new NylasService();
//# sourceMappingURL=NylasService.js.map