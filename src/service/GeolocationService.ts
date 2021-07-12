import { APIClient, APIMapping } from '../http';
import { CancelToken } from 'axios';
import { GeoInformationsServiceTypes as types } from './GeoInformationService';

export class GeolocationService extends APIClient {
    constructor() {
        super(APIMapping.geolocationService);
    }

    /**
     * TODO: Please comment this method
     * @param query
     * @param cancelToken
     */
    fetchAutocompletionResults(query: string, cancelToken: CancelToken) {
        const additionalParams = {
            queryParams: {
                q: query,
            },
            cancelToken,
        };
        return this.invokeApi('/search', 'GET', undefined, additionalParams).then((s) => s.data);
    }

    /**
     * TODO: Please comment this method
     * @param query
     */
    fetchBestMatchCoordinates(query: string) {
        const additionalParams = {
            queryParams: {
                q: query,
            },
        };
        return this.invokeApi('/getBestMatchCoordinates', 'GET', undefined, additionalParams).then((s) => s.data);
    }

    fetchAddressCoordinates(locationAddress: types.LocationAddress) {
        const additionalParams = {
            queryParams: locationAddress,
        };
        return this.invokeApiWithErrorHandling<types.Coordinates>('/searchByAddress', 'GET', undefined, additionalParams);
    }
}

export default new GeolocationService();
