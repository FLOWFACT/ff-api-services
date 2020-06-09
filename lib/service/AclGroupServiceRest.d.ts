import { APIClient } from '../http';
import { AclGroup, AclGroupType } from '@flowfact/types';
declare class AclGroupServiceRest extends APIClient {
    constructor();
    /**
     * This method fetches a group. If a groupType is provided, only groups with this type will be returned
     * @param groupType
     */
    fetchGroups(groupType?: AclGroupType): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Create a new acl group
     * @param group
     */
    createGroup(group: AclGroup): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Updates a group by the id
     * @param group
     */
    updateGroup(group: AclGroup): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Deletes a group by the id
     * @param group
     */
    deleteGroup(group: AclGroup): Promise<import("axios").AxiosResponse<any>>;
}
declare const _default: AclGroupServiceRest;
export default _default;
