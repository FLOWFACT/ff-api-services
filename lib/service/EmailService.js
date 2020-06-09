"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var EmailService = /** @class */ (function (_super) {
    tslib_1.__extends(EmailService, _super);
    function EmailService() {
        return _super.call(this, http_1.APIMapping.emailService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param domain
     */
    EmailService.prototype.createDomain = function (domain) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/configuration/whitelabel', 'POST', { domain: domain })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param domain
     */
    EmailService.prototype.verifyDomain = function (domain) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/configuration/whitelabel/verify', 'POST', { domain: domain })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param s3Key
     */
    EmailService.prototype.fetchMailBody = function (s3Key) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/body/html', 'GET', undefined, {
                        queryParams: {
                            s3key: s3Key,
                        },
                    })];
            });
        });
    };
    EmailService.prototype.sendMail = function (mail) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var formData;
            return tslib_1.__generator(this, function (_a) {
                formData = new FormData();
                formData.append('model', JSON.stringify(mail));
                return [2 /*return*/, this.invokeApi('/mails/html', 'POST', formData, { headers: { 'Content-Type': 'multipart/form-data' } })];
            });
        });
    };
    /**
     * Sync a mail manually into the platform
     * @param emailAccount
     * @param subject
     */
    EmailService.prototype.syncEmail = function (emailAccount, subject) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/emails/sync', 'POST', {
                        emailAccount: emailAccount,
                        subject: subject
                    })];
            });
        });
    };
    return EmailService;
}(http_1.APIClient));
exports.EmailService = EmailService;
exports.default = new EmailService();
//# sourceMappingURL=EmailService.js.map