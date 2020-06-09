import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
declare class ExcelExporterService extends APIClient {
    constructor();
    /**
     *
     * @param schemaName The SchemaOrGroupName that is used to export the data.
     * @param filterConditions FilterConditions that should be used to define the result more specific
     * @returns A fileId that can be used to check if the process is finished.
     */
    createExport(schemaName: String, filterConditions: Object): Promise<AxiosResponse>;
    /**
     *
     * @param fileId The Id of the file that will be created when the Exporter finished creating the results.
     * @returns The Download-Link of the file.
     */
    getDownloadLink(fileId: String): Promise<AxiosResponse>;
}
declare const _default: ExcelExporterService;
export default _default;
