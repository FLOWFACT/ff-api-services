import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var GeolocationService = /** @class */ (function (_super) {
    tslib_1.__extends(GeolocationService, _super);
    function GeolocationService() {
        return _super.call(this, APIMapping.geolocationService) || this;
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
}(APIClient));
export { GeolocationService };
export default new GeolocationService();
//# sourceMappingURL=GeolocationService.js.map