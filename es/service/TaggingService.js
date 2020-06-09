import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var TaggingService = /** @class */ (function (_super) {
    tslib_1.__extends(TaggingService, _super);
    function TaggingService() {
        return _super.call(this, APIMapping.taggingService) || this;
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
}(APIClient));
export { TaggingService };
export default new TaggingService();
//# sourceMappingURL=TaggingService.js.map