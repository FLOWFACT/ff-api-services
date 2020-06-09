import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var OnboardingService = /** @class */ (function (_super) {
    tslib_1.__extends(OnboardingService, _super);
    function OnboardingService() {
        return _super.call(this, APIMapping.onboardingService) || this;
    }
    /**
     * Onboards the current user and triggers all the necessary steps
     * @returns {Promise<AxiosResponse>}
     */
    OnboardingService.prototype.onboardCurrentUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/customer', 'POST')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param bundleName
     * @param withEntities
     */
    OnboardingService.prototype.setupAccount = function (bundleName, withEntities) {
        if (withEntities === void 0) { withEntities = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var queryParams;
            return tslib_1.__generator(this, function (_a) {
                queryParams = {
                    bundleName: bundleName,
                    withEntities: withEntities.toString(),
                };
                return [2 /*return*/, this.invokeApi('/customer/setup', 'POST', undefined, { queryParams: queryParams })];
            });
        });
    };
    /**
     * Generates a Zoho hosted page for checkout
     * @param numberOfUsers
     */
    OnboardingService.prototype.createNewSubscription = function (numberOfUsers) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var queryParams;
            return tslib_1.__generator(this, function (_a) {
                queryParams = {
                    numberOfUsers: numberOfUsers,
                };
                return [2 /*return*/, this.invokeApi('/buypage/generateUrl', 'POST', undefined, { queryParams: queryParams })];
            });
        });
    };
    /**
     * Fetch the default zoho plan, to get current information on pricing
     */
    OnboardingService.prototype.fetchSubscriptionPlan = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/plan', 'GET')];
            });
        });
    };
    /**
     * Fetch the default zoho additional user addon
     */
    OnboardingService.prototype.fetchAddon = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/addon', 'GET')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     */
    OnboardingService.prototype.fetchQualificationQuestions = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/qualifications', 'GET')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param questionId
     * @param answer
     */
    OnboardingService.prototype.answerQuestion = function (questionId, answer) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/qualifications/answer/' + questionId, 'POST', { answer: answer })];
            });
        });
    };
    /**
     * Tells backend, that the "Buy Now" button was clicked.
     */
    OnboardingService.prototype.trackBuyNowClicked = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/track/buynowclicked', 'POST')];
            });
        });
    };
    /**
     * Tells backend, that the terms where confirmed. (For example: After click onto the "order now" button)
     */
    OnboardingService.prototype.trackTermsConfirmed = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/track/termsconfirmed', 'POST')];
            });
        });
    };
    return OnboardingService;
}(APIClient));
export { OnboardingService };
export default new OnboardingService();
//# sourceMappingURL=OnboardingService.js.map