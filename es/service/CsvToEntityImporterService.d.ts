import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class CsvToEntityImporterService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param file
     * @param targetSchema
     * @param delimiter
     */
    uploadCsvFile(file: FormData, targetSchema: string, delimiter?: string): Promise<AxiosResponse>;
}
declare const _default: CsvToEntityImporterService;
export default _default;
