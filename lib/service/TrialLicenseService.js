"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var TrialLicenseService = /** @class */ (function (_super) {
    tslib_1.__extends(TrialLicenseService, _super);
    function TrialLicenseService() {
        return _super.call(this, http_1.APIMapping.trialLicenseServive) || this;
    }
    /**
     * TODO: Please comment this method
     * @param submissionGuid
     */
    TrialLicenseService.prototype.fetchCustomerDataBySubmissionGuid = function (submissionGuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/public/freeTrial/submissionId/" + submissionGuid, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param submissionGuid
     */
    TrialLicenseService.prototype.fetchCustomerDataByEmail = function (submissionGuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/public/freeTrial/email/" + submissionGuid, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param payload
     */
    TrialLicenseService.prototype.createNewSubscription = function (payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/public/buy', 'POST', payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param hostedPageId
     */
    TrialLicenseService.prototype.upgradeAccount = function (hostedPageId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/upgradeAccount/' + hostedPageId, 'POST')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return TrialLicenseService;
}(http_1.APIClient));
exports.TrialLicenseService = TrialLicenseService;
exports.default = new TrialLicenseService();
//# sourceMappingURL=TrialLicenseService.js.map