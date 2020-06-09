"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var FullTextSearchService = /** @class */ (function (_super) {
    tslib_1.__extends(FullTextSearchService, _super);
    function FullTextSearchService() {
        return _super.call(this, http_1.APIMapping.fullTextSearchService) || this;
    }
    /**
     * Get the full search information by id.
     * @param schemaName
     * @param searchTerm
     * @param page
     * @param size
     * @param params
     */
    FullTextSearchService.prototype.search = function (schemaName, searchTerm, page, size, params) {
        if (page === void 0) { page = 1; }
        if (params === void 0) { params = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/search/' + schemaName, 'GET', '', {
                        queryParams: tslib_1.__assign({ page: page,
                            size: size,
                            searchTerm: searchTerm }, params),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })];
            });
        });
    };
    return FullTextSearchService;
}(http_1.APIClient));
exports.FullTextSearchService = FullTextSearchService;
exports.default = new FullTextSearchService();
//# sourceMappingURL=FullTextSearchService.js.map