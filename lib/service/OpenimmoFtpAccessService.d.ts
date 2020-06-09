import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
import { Openimmo } from '@flowfact/types';
export declare class OpenimmoFtpAccessService extends APIClient {
    constructor();
    /**
     * get all openimmmos
     */
    fetchAllOpenimmos(): Promise<AxiosResponse>;
    /**
     * get one openimmo by using user
     * @param user
     */
    fetchOpenimmo(user: string): Promise<AxiosResponse>;
    /**
     * update an openimmo
     * @param user
     * @param openimmo
     */
    updateOpenimmo(user: string, openimmo: Openimmo): Promise<AxiosResponse<any>>;
    /**
     * create an openimmo
     * @param openimmo
     */
    createOpenimmo(openimmo: Openimmo): Promise<AxiosResponse<any>>;
    /**
     * delete an openimmo
     * @param user
     */
    deleteOpenimmo(user: string): Promise<AxiosResponse<any>>;
}
declare const _default: OpenimmoFtpAccessService;
export default _default;
