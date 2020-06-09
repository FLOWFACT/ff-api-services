import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
interface IS24Property {
    id: string;
    headline: string;
    type: string;
    mainImageUrl: string;
    city: string;
    price: string;
    zip: string;
    status: 'ACTIVE' | 'INACTIVE' | 'TO_BE_DELETED' | 'DRAFT' | 'ARCHIVED';
}
interface PossibleUser {
    firstName: string;
    lastName: string;
    email: string;
}
export declare class IS24ImportService extends APIClient {
    constructor();
    /**
     * Fetches all properties (estates, garages, plots, etc...) of a authenticated is24 portal
     * @param portalId
     * @param page
     * @param pageSize
     */
    fetchProperties(portalId: string, page?: number, pageSize?: number): Promise<AxiosResponse<{
        entities: IS24Property[];
        totalCount: number;
        page: number;
    }>>;
    /**
     * Imports is24 properties into the FLOWFACT platform
     * @param portalId
     * @param propertyIds
     */
    importProperties(portalId: string, propertyIds: string[]): Promise<AxiosResponse>;
    /**
     * Fetches possible users. A possible user can be a contact person of a estate
     * @param portalId
     */
    fetchPossibleUsers(portalId: string): Promise<AxiosResponse<{
        users: PossibleUser[];
    }>>;
}
declare const _default: IS24ImportService;
export default _default;
