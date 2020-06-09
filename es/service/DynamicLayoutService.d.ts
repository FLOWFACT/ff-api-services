import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
export declare class DynamicLayoutService extends APIClient {
    constructor();
    /**
     * This method fetches a layout for a specific schema. If the provided schema has no overview, then
     * it returns the overview of the group (just if the schema is part of a group)
     * @param schemaId
     */
    fetchOverviewForSchema(schemaId: string): Promise<AxiosResponse>;
}
declare const _default: DynamicLayoutService;
export default _default;
