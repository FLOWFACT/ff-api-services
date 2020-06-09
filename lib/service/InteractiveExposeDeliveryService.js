"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var APIMapping_1 = require("../http/APIMapping");
var InteractiveExposeDeliveryService = /** @class */ (function (_super) {
    tslib_1.__extends(InteractiveExposeDeliveryService, _super);
    function InteractiveExposeDeliveryService() {
        return _super.call(this, APIMapping_1.default.interactiveExposeDeliveryService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param model
     */
    InteractiveExposeDeliveryService.prototype.sendInteractiveExposes = function (model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/interactiveExposes', 'POST', model)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param model
     */
    InteractiveExposeDeliveryService.prototype.sendInteractiveExposesV2 = function (model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/interactiveExposes/send', 'POST', model)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param requestId
     */
    InteractiveExposeDeliveryService.prototype.fetchSendingStatus = function (requestId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/interactiveExposes/status/" + requestId, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return InteractiveExposeDeliveryService;
}(http_1.APIClient));
exports.InteractiveExposeDeliveryService = InteractiveExposeDeliveryService;
exports.default = new InteractiveExposeDeliveryService();
//# sourceMappingURL=InteractiveExposeDeliveryService.js.map