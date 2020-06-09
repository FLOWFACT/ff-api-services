import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class OmniChannelService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param from
     * @param to
     * @param message
     */
    sendSMS(from: string, to: string, message: string): Promise<AxiosResponse>;
}
declare const _default: OmniChannelService;
export default _default;
