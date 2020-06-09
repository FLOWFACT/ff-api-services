"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var TaggingService = /** @class */ (function (_super) {
    tslib_1.__extends(TaggingService, _super);
    function TaggingService() {
        return _super.call(this, http_1.APIMapping.taggingService) || this;
    }
    /**
     * Adds a tag into the database and creates a consumable kafka topic.
     * @param body as a tagRequest containing schemaId, entityId, tagName and metadata object.
     */
    TaggingService.prototype.addTag = function (body) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/tag', 'POST', body)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return TaggingService;
}(http_1.APIClient));
exports.TaggingService = TaggingService;
exports.default = new TaggingService();
//# sourceMappingURL=TaggingService.js.map