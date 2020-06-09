"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var TagService = /** @class */ (function (_super) {
    tslib_1.__extends(TagService, _super);
    function TagService() {
        return _super.call(this, http_1.APIMapping.tagService) || this;
    }
    /**
     * TODO: Please comment this method
     */
    TagService.prototype.fetchAllTags = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/tags', 'GET').then(function (s) { return s.data; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param body
     */
    TagService.prototype.createTag = function (body) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/tags', 'POST', body).then(function (s) { return s.data; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param id
     */
    TagService.prototype.fetchTagById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/tags/" + id, 'GET').then(function (s) { return s.data; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param body
     * @param id
     */
    TagService.prototype.updateTag = function (body, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/tags/" + id, 'PUT', body).then(function (s) { return s.data; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return TagService;
}(http_1.APIClient));
exports.TagService = TagService;
exports.default = new TagService();
//# sourceMappingURL=TagService.js.map