import { ImportBundle } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class SampleDataService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param bundleName
     */
    importSampleData(bundleName?: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param bundleName
     */
    removeSampleData(bundleName?: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param bundles
     */
    importSampleDataBatch(bundles: ImportBundle[]): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param scope
     */
    fetchBundles(scope?: 'FLOWFACT' | 'CUSTOM'): Promise<AxiosResponse>;
}
declare const _default: SampleDataService;
export default _default;
