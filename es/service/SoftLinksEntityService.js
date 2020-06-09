import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var SoftLinksEntityService = /** @class */ (function (_super) {
    tslib_1.__extends(SoftLinksEntityService, _super);
    function SoftLinksEntityService() {
        return _super.call(this, APIMapping.softLinksEntityService) || this;
    }
    /**
     * Create link between the entities with ids from source and destination
     * @param link
     */
    SoftLinksEntityService.prototype.createLink = function (link) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/link", 'POST', link || {}, {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })];
            });
        });
    };
    /**
     * Delete link
     * @param linkId
     */
    SoftLinksEntityService.prototype.deleteLink = function (linkId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/link/" + linkId, 'DELETE')];
            });
        });
    };
    /**
     * Search link by label
     * @param label
     */
    SoftLinksEntityService.prototype.searchLinksByLabel = function (label) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/link/search", 'GET', undefined, {
                        queryParams: {
                            label: label
                        },
                    })];
            });
        });
    };
    /**
     * Search links with pagination
     * @param link
     * @param page
     * @param size
     */
    SoftLinksEntityService.prototype.searchLinksWithPagination = function (link, page, size) {
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 20; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/link/search", 'POST', link || {}, {
                        queryParams: {
                            page: page,
                            size: size
                        },
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })];
            });
        });
    };
    /**
     * Search all links with pagination
     * @param request
     * @param page
     * @param size
     */
    SoftLinksEntityService.prototype.searchAllSoftLinks = function (request, page, size) {
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 20; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/link/search/all-softlinks", 'POST', request || {}, {
                        queryParams: {
                            page: page,
                            size: size
                        },
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })];
            });
        });
    };
    return SoftLinksEntityService;
}(APIClient));
export { SoftLinksEntityService };
export default new SoftLinksEntityService();
//# sourceMappingURL=SoftLinksEntityService.js.map