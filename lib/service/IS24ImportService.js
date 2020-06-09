"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var IS24ImportService = /** @class */ (function (_super) {
    tslib_1.__extends(IS24ImportService, _super);
    function IS24ImportService() {
        return _super.call(this, http_1.APIMapping.is24ImportService) || this;
    }
    /**
     * Fetches all properties (estates, garages, plots, etc...) of a authenticated is24 portal
     * @param portalId
     * @param page
     * @param pageSize
     */
    IS24ImportService.prototype.fetchProperties = function (portalId, page, pageSize) {
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/" + portalId + "/previews", 'GET', undefined, {
                        queryParams: {
                            page: page,
                            pageSize: pageSize
                        }
                    })];
            });
        });
    };
    /**
     * Imports is24 properties into the FLOWFACT platform
     * @param portalId
     * @param propertyIds
     */
    IS24ImportService.prototype.importProperties = function (portalId, propertyIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/" + portalId + "/import", 'POST', {
                            is24EstateIds: propertyIds
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Fetches possible users. A possible user can be a contact person of a estate
     * @param portalId
     */
    IS24ImportService.prototype.fetchPossibleUsers = function (portalId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/" + portalId + "/possibleUsers", 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return IS24ImportService;
}(http_1.APIClient));
exports.IS24ImportService = IS24ImportService;
exports.default = new IS24ImportService();
//# sourceMappingURL=IS24ImportService.js.map