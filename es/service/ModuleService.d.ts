import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
export declare class ModuleService extends APIClient {
    constructor();
    /**
     * Get all active modules for the current company
     * @returns {Promise<AxiosResponse>}
     */
    fetchActiveModules(): Promise<AxiosResponse>;
    /**
     * Get all modules for the current company
     * @returns {Promise<AxiosResponse>}
     */
    fetchAllModules(): Promise<AxiosResponse>;
    /**
     * Get a module by his name
     * @param {string} moduleName
     * @returns {Promise<AxiosResponse>}
     */
    fetchModule(moduleName: string): Promise<AxiosResponse>;
    /**
     * Activate a new or a an deactivated module for the current company
     * @param {string} moduleName
     * @returns {Promise<AxiosResponse>}
     */
    activateModule(moduleName: string): Promise<AxiosResponse>;
    /**
     * Deactivates a new or an activate module for the current company
     * @param {string} moduleName
     * @returns {Promise<AxiosResponse>}
     */
    deactivateModule(moduleName: string): Promise<AxiosResponse>;
}
declare const _default: ModuleService;
export default _default;
