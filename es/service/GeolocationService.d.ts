import { APIClient } from '../http';
import { CancelToken } from 'axios';
export declare class GeolocationService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param query
     * @param cancelToken
     */
    fetchAutocompletionResults(query: string, cancelToken: CancelToken): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param query
     */
    fetchBestMatchCoordinates(query: string): Promise<any>;
}
declare const _default: GeolocationService;
export default _default;
