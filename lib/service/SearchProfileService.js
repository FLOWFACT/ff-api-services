"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var SearchProfileService = /** @class */ (function (_super) {
    tslib_1.__extends(SearchProfileService, _super);
    function SearchProfileService() {
        return _super.call(this, http_1.APIMapping.searchProfileService) || this;
    }
    /**
     * Fetches the configuration on how the Matchmaking-UI should be displayed
     * Tries to retrieve config for current company, when none is found, falls back to a global config
     */
    SearchProfileService.prototype.fetchConfiguration = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/matchmaking/configuration", 'GET')];
            });
        });
    };
    /**
     * Creates a configuration on how the Matchmaking-UI should be displayed for the current company
     */
    SearchProfileService.prototype.createConfiguration = function (config) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/matchmaking/configuration", 'POST', config)];
            });
        });
    };
    /**
     * Updates the configuration on how the Matchmaking-UI should be displayed for the current company
     */
    SearchProfileService.prototype.updateConfiguration = function (config) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/matchmaking/configuration", 'PUT', config)];
            });
        });
    };
    /**
     * Deletes the configuration on how the Matchmaking-UI should be displayed for the current company
     */
    SearchProfileService.prototype.deleteConfiguration = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/matchmaking/configuration", 'DELETE')];
            });
        });
    };
    /**
     * Retrieves all searchprofiles of a company
     * @param page
     * @param size
     */
    SearchProfileService.prototype.fetchAllSearchProfiles = function (page, size) {
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 10; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var queryParams;
            return tslib_1.__generator(this, function (_a) {
                queryParams = {
                    page: page.toString(),
                    size: size.toString()
                };
                return [2 /*return*/, this.invokeApi("/search-profiles", 'GET', undefined, { queryParams: queryParams })];
            });
        });
    };
    /**
     * Creates a new searchprofile
     * @param searchProfile
     */
    SearchProfileService.prototype.createSearchProfile = function (searchProfile) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/search-profiles", 'POST', searchProfile)];
            });
        });
    };
    /**
     * Retrieves an existing searchprofile by its id
     * @param searchProfileId
     */
    SearchProfileService.prototype.fetchSearchProfile = function (searchProfileId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/search-profiles/" + searchProfileId, 'GET', undefined)];
            });
        });
    };
    /**
     * Updates an existing searchprofile
     * @param searchProfile
     */
    SearchProfileService.prototype.updateSearchProfile = function (searchProfile) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/search-profiles/" + searchProfile.id, 'PUT', searchProfile)];
            });
        });
    };
    /**
     * Deletes a searchprofile by its id
     * @param searchProfileId
     */
    SearchProfileService.prototype.deleteSearchProfile = function (searchProfileId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/search-profiles/" + searchProfileId, 'DELETE', undefined)];
            });
        });
    };
    /**
     * Executes a search using the search terms (conditions) in the searchprofile
     * @param model
     */
    SearchProfileService.prototype.searchEntities = function (model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/search", 'POST', model)];
            });
        });
    };
    /**
     * Executes a reverse search against saved searchprofiles for the specified schemaGroup and saved entity (by Id)
     * @param entityId
     * @param schemaGroup
     */
    SearchProfileService.prototype.searchProfiles = function (entityId, schemaGroup) {
        if (schemaGroup === void 0) { schemaGroup = 'estates'; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/search/reverse/schema/" + schemaGroup + "/entity/" + entityId, 'POST')];
            });
        });
    };
    return SearchProfileService;
}(http_1.APIClient));
exports.SearchProfileService = SearchProfileService;
exports.default = new SearchProfileService();
//# sourceMappingURL=SearchProfileService.js.map