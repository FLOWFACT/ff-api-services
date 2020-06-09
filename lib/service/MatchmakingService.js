"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var MatchmakingService = /** @class */ (function (_super) {
    tslib_1.__extends(MatchmakingService, _super);
    function MatchmakingService() {
        return _super.call(this, http_1.APIMapping.matchmakingService) || this;
    }
    MatchmakingService.prototype.getAllMatches = function (page) {
        if (page === void 0) { page = 0; }
        console.warn('getAllMatches() is deprecated! Use getAllMatchesForContacts() instead!');
        return this.fetchAllMatchesForContacts(page);
    };
    /**
     * TODO: Please comment this method
     * @param page
     */
    MatchmakingService.prototype.fetchAllMatchesForContacts = function (page) {
        if (page === void 0) { page = 0; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/matches/contacts', 'GET', undefined, {
                            queryParams: { page: page },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param page
     */
    MatchmakingService.prototype.fetchAllMatchesForEstates = function (page) {
        if (page === void 0) { page = 0; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/matches/estates', 'GET', undefined, {
                            queryParams: { page: page },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param contactId
     * @param page
     */
    MatchmakingService.prototype.fetchMatchesByContact = function (contactId, page) {
        if (page === void 0) { page = 0; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/matches/contacts/" + contactId, 'GET', undefined, {
                            queryParams: { page: page },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param estateId
     * @param page
     */
    MatchmakingService.prototype.fetchMatchesByEstate = function (estateId, page) {
        if (page === void 0) { page = 0; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/matches/estates/" + estateId, 'GET', undefined, {
                            queryParams: { page: page },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param estateId
     */
    MatchmakingService.prototype.fetchMatchCountByEstate = function (estateId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/matches/estates/" + estateId + "/count", 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     */
    MatchmakingService.prototype.initialImport = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/trigger/initial', 'POST')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return MatchmakingService;
}(http_1.APIClient));
exports.MatchmakingService = MatchmakingService;
exports.default = new MatchmakingService();
//# sourceMappingURL=MatchmakingService.js.map