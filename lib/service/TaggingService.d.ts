import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
export declare class TaggingService extends APIClient {
    constructor();
    /**
     * Adds a tag into the database and creates a consumable kafka topic.
     * @param body as a tagRequest containing schemaId, entityId, tagName and metadata object.
     */
    addTag(body: any): Promise<AxiosResponse>;
}
declare const _default: TaggingService;
export default _default;
