import { FlowfactImporterStatus, User, UserTokenEntity } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class ImportPreparationService extends APIClient {
    constructor();
    /**
     * Gets the importer user. If it does not exist, it will be created.
     */
    getImporterUser(): Promise<AxiosResponse<User>>;
    /**
     * Gets the API token for the importerUser.
     */
    getImporterToken(importerUserId: string): Promise<AxiosResponse<UserTokenEntity>>;
    /**
     * Creates the API token for the importerUser.
     */
    createImporterToken(importerUserId: string): Promise<AxiosResponse<UserTokenEntity>>;
    /**
     * Gets the status of the currently running import.
     */
    getImportStatus(): Promise<AxiosResponse<FlowfactImporterStatus>>;
}
declare const _default: ImportPreparationService;
export default _default;
