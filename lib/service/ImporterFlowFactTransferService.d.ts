import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class ImporterFlowFactTransferService extends APIClient {
    constructor();
    getNewIdFromLegacySystem(tableName: string, dsn: string): Promise<AxiosResponse<string>>;
}
declare const _default: ImporterFlowFactTransferService;
export default _default;
