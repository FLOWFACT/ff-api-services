"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var GeolocationService = /** @class */ (function (_super) {
    tslib_1.__extends(GeolocationService, _super);
    function GeolocationService() {
        return _super.call(this, http_1.APIMapping.geolocationService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param query
     * @param cancelToken
     */
    GeolocationService.prototype.fetchAutocompletionResults = function (query, cancelToken) {
        var additionalParams = {
            queryParams: {
                q: query
            },
            cancelToken: cancelToken
        };
        return this.invokeApi('/search', 'GET', undefined, additionalParams).then(function (s) { return s.data; });
    };
    /**
     * TODO: Please comment this method
     * @param query
     */
    GeolocationService.prototype.fetchBestMatchCoordinates = function (query) {
        var additionalParams = {
            queryParams: {
                q: query
            }
        };
        return this.invokeApi('/getBestMatchCoordinates', 'GET', undefined, additionalParams).then(function (s) { return s.data; });
    };
    return GeolocationService;
}(http_1.APIClient));
exports.GeolocationService = GeolocationService;
exports.default = new GeolocationService();
//# sourceMappingURL=GeolocationService.js.map