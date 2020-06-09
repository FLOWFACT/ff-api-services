import { InteractiveExposeDeliveryModel, SendInteractiveExposeModel } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class InteractiveExposeDeliveryService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param model
     */
    sendInteractiveExposes(model: SendInteractiveExposeModel[]): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param model
     */
    sendInteractiveExposesV2(model: InteractiveExposeDeliveryModel): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param requestId
     */
    fetchSendingStatus(requestId: string): Promise<AxiosResponse>;
}
declare const _default: InteractiveExposeDeliveryService;
export default _default;
