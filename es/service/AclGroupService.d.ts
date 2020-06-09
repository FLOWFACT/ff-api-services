import { APIClient } from '../http';
import { AclGroup, LinkCode, LinkCodeQueryType, ShortAclGroup } from '@flowfact/types';
export interface OwnerIdsReply {
    aclGroups: ShortAclGroup[];
    size: number;
}
export interface AclGroupsFetchAllResponse {
    aclGroups: AclGroup[];
}
export declare const GROUP_MANAGEMENT_FRAGMENT: any;
export declare class AclGroupService extends APIClient {
    constructor();
    fetchAclGroupsWithAccessBy(companyId: string): Promise<import("axios").AxiosResponse<OwnerIdsReply>>;
    fetchAllGroups(): Promise<import("apollo-client/core/types").ApolloQueryResult<AclGroupsFetchAllResponse>>;
    createGroup(group: AclGroup): Promise<import("apollo-link/lib/types").FetchResult<{
        createAclGroup: AclGroup;
    }, Record<string, any>, Record<string, any>>>;
    updateGroup(group: AclGroup): Promise<import("apollo-link/lib/types").FetchResult<{
        updateAclGroup: AclGroup;
    }, Record<string, any>, Record<string, any>>>;
    removeGroup(id: string): Promise<import("apollo-link/lib/types").FetchResult<{
        deleteAclGroup: boolean;
    }, Record<string, any>, Record<string, any>>>;
    fetchAllCooperations(type: LinkCodeQueryType): Promise<import("apollo-client/core/types").ApolloQueryResult<{
        linkCodes: LinkCode[];
    }>>;
    fetchCooperation(code: string): Promise<import("apollo-client/core/types").ApolloQueryResult<{
        linkCode: LinkCode;
    }>>;
    joinCooperation(code: string): Promise<import("apollo-link/lib/types").FetchResult<{
        joinCooperation: LinkCode;
    }, Record<string, any>, Record<string, any>>>;
    leaveCooperation(code: string): Promise<import("apollo-link/lib/types").FetchResult<{
        leaveCooperation: boolean;
    }, Record<string, any>, Record<string, any>>>;
    removeCooperation(code: string): Promise<import("apollo-link/lib/types").FetchResult<{
        deleteCooperation: boolean;
    }, Record<string, any>, Record<string, any>>>;
}
declare const _default: AclGroupService;
export default _default;
