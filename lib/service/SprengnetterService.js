"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var SprengnetterService = /** @class */ (function (_super) {
    tslib_1.__extends(SprengnetterService, _super);
    function SprengnetterService() {
        return _super.call(this, http_1.APIMapping.spregnetterService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param body
     */
    SprengnetterService.prototype.fetchRentHeatmap = function (body) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/api/rent/heatmap', 'POST', body)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param body
     */
    SprengnetterService.prototype.fetchValuationHeatmap = function (body) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/api/valuation/heatmap', 'POST', body)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param body
     */
    SprengnetterService.prototype.fetchValuation = function (body) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/api/valuation', 'POST', body)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param body
     */
    SprengnetterService.prototype.fetchRentValuation = function (body) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/api/rent', 'POST', body)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets the HTML that is necessary to display the market report
     * @param {String} entityId - The entityId of the estate that should the htmlView should be created for.
     * @returns {Promise<AxiosResponse>} The response contains the html that represents the marketanalysis.
     */
    SprengnetterService.prototype.fetchHtml = function (entityId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/htmlView/" + entityId, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets a link to the pdfReport that is stored on S3
     * @param {String} entityId - The entityId of the estate that should the pdfView should be created for.
     * @returns {Promise<AxiosResponse>} The response contains a link to the pdf that is stored on S3.
     */
    SprengnetterService.prototype.fetchPdfLink = function (entityId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/pdfView/" + entityId, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sends the customer feedback regarding the marketanalysis tool to pm
     * @param {Number} rating - The StarRating that was selected
     * @param {String} message - The message that contains the feedback
     * @returns {Promise<AxiosResponse>}
     */
    SprengnetterService.prototype.sendFeedback = function (rating, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/feedback', 'POST', { rating: rating, message: message })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return SprengnetterService;
}(http_1.APIClient));
exports.SprengnetterService = SprengnetterService;
exports.default = new SprengnetterService();
//# sourceMappingURL=SprengnetterService.js.map