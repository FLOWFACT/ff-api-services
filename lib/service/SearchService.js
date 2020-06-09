"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var node_flowdsl_1 = require("@flowfact/node-flowdsl");
var http_1 = require("../http");
var SearchService = /** @class */ (function (_super) {
    tslib_1.__extends(SearchService, _super);
    function SearchService() {
        return _super.call(this, http_1.APIMapping.searchService) || this;
    }
    /**
     * Get all searches as short searches. Just the ID and the Name of the search
     * will be returned in a array.
     */
    SearchService.prototype.fetchSearches = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/search', 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get the full search information by id.
     */
    SearchService.prototype.fetchSearch = function (searchId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/search/" + searchId, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param searchModel
     */
    SearchService.prototype.saveSearch = function (searchModel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/search', 'POST', searchModel)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param searchId
     */
    SearchService.prototype.deleteSearch = function (searchId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/search/" + searchId, 'DELETE')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param searchId
     * @param searchModel
     */
    SearchService.prototype.updateSearch = function (searchId, searchModel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/search/" + searchId, 'PUT', searchModel)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method searches for entities or tags. See swagger documentation of search-service for details
     * @param query
     * @param index
     * @param page
     * @param size
     * @param withCount
     */
    SearchService.prototype.search = function (query, index, page, size, withCount) {
        if (page === void 0) { page = 1; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var queryParams;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParams = {};
                        if (page) {
                            queryParams.page = page;
                        }
                        if (size) {
                            queryParams.size = size;
                        }
                        if (typeof withCount === 'boolean') {
                            queryParams.withCount = withCount;
                        }
                        return [4 /*yield*/, this.invokeApi('/schemas/' + index, 'POST', query, {
                                queryParams: queryParams,
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Fetches the number of entities matching the given query
     * @param query
     * @param index
     */
    SearchService.prototype.count = function (query, index) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/schemas/' + index + '/count', 'POST', query, {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Fetches the number of entities matching the given query
     * @param companyId
     * @param query
     * @param index
     * @param withAclGroups
     */
    SearchService.prototype.internalCount = function (companyId, query, index, withAclGroups) {
        if (withAclGroups === void 0) { withAclGroups = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/internal/schemas/' + index + '/count', 'POST', query, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        params: {
                            companyId: companyId,
                            withAclGroups: withAclGroups.toString()
                        }
                    })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param index
     * @param page
     * @param size
     * @param filter
     * @param sorting
     */
    SearchService.prototype.filter = function (index, page, size, filter, sorting) {
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 30; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var queryParams;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParams = {};
                        if (page) {
                            // page -1 because the the pages start at 0 on the backend
                            queryParams.page = page;
                        }
                        if (size) {
                            queryParams.size = size;
                        }
                        return [4 /*yield*/, this.invokeApi('/schemas/' + index, 'POST', this.buildQuery(filter, sorting), {
                                queryParams: queryParams,
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SearchService.prototype.buildQuery = function (filterConfiguration, sorting) {
        var builder = new node_flowdsl_1.DslBuilder();
        builder.target('ENTITY');
        builder.distinct(false);
        if (filterConfiguration) {
            if (filterConfiguration.value && filterConfiguration.value !== '') {
                var conditions = filterConfiguration.fields.map(function (field) {
                    if (field === 'id') {
                        return {
                            type: 'ENTITYID',
                            values: [filterConfiguration.value],
                        };
                    }
                    return {
                        type: 'HASFIELDWITHVALUE',
                        field: field,
                        value: filterConfiguration.value,
                        operator: 'LIKE',
                    };
                });
                builder.withCondition({
                    type: 'OR',
                    conditions: conditions,
                });
            }
            if (filterConfiguration.limitResponse) {
                builder.fetch(filterConfiguration.fields);
            }
        }
        if (sorting) {
            // don't do anything right now, because the flowdsl doesn't support sorting.
        }
        return builder.build();
    };
    return SearchService;
}(http_1.APIClient));
exports.SearchService = SearchService;
exports.default = new SearchService();
//# sourceMappingURL=SearchService.js.map