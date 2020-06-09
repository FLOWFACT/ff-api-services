import { Portal, PortalAuthenticationModel, PortalEstateSettings, PortalType, PublishRequest } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class PortalManagementService extends APIClient {
    constructor();
    /**
     *
     * @param ignoreInactivePortals
     */
    fetchPortals(ignoreInactivePortals?: boolean): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param portalId
     */
    fetchPortal(portalId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     */
    fetchPredefinedPortals(): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     */
    fetchPortalTypes(): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param entityId
     */
    fetchPublishedOn(entityId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param portalType
     * @param portal
     */
    createPortal(portalType: PortalType, portal: Portal): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param portalId
     * @param portal
     */
    updatePortal(portalId: string, portal: Portal): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param portalId
     */
    deletePortal(portalId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param portalId
     */
    forceDeletePortal(portalId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param portalId
     * @param portalAuthenticationModel
     */
    authenticatePortal(portalId: string, portalAuthenticationModel: PortalAuthenticationModel): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param publishRequest
     */
    publishEstates(publishRequest: PublishRequest): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param portalId
     * @param estateId
     * @param portalEstateSettings
     */
    updatePortalEstateSettings(portalId: string, estateId: string, portalEstateSettings: PortalEstateSettings): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param estateId
     */
    fetchPortalEstateSettings(estateId: string): Promise<AxiosResponse<PortalEstateSettings[]>>;
    /**
     * Fetches the information on which portal a estate is published on.
     * @param estateId
     */
    fetchPublishInformation(estateId: string): Promise<AxiosResponse>;
    /**
     * Fetches app published estates for special portal
     * @param portalId
     */
    fetchPortalEstates(portalId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param portalId
     * @param verifier
     * @param token
     * @param state
     */
    is24AuthenticationCallback(portalId: string, verifier: string, token: string, state: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param portalId
     */
    checkAuthentication(portalId: string): Promise<AxiosResponse>;
}
declare const _default: PortalManagementService;
export default _default;
