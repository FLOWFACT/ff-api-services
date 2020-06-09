import { APIClient } from '../http';
export declare class TagService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     */
    fetchAllTags(): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param body
     */
    createTag(body: any): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param id
     */
    fetchTagById(id: string): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param body
     * @param id
     */
    updateTag(body: any, id: string): Promise<any>;
}
declare const _default: TagService;
export default _default;
