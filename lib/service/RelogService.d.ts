import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
export interface MandatoryElkData {
    message: string;
    Severity: 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';
    SenderName: string;
    SenderVersion: string;
    product: string;
}
export interface FFAdditionalElkData {
    SenderFramework?: string;
    stage?: string;
    facility?: string;
    timestamp?: number;
    requestURI?: string;
    receivedStatusCode?: number;
    sentStatusCode?: number;
    location?: string;
    userId?: string;
    companyId?: string;
    requestId?: string;
    docker_host?: string;
    sourceName?: string;
}
export declare type FFElkData = MandatoryElkData & FFAdditionalElkData;
export declare class RelogService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param logEntry
     */
    log(logEntry: FFElkData): Promise<AxiosResponse>;
    /**
     * Here you don't have to pass the userId
     * @param logEntry
     */
    logInternal(logEntry: FFElkData): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param logEntries
     */
    logBatch(logEntries: FFElkData[]): Promise<AxiosResponse<any>>;
}
declare const _default: RelogService;
export default _default;
