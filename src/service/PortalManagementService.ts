import { Portal, PortalAuthenticationModel, PortalEstateSettings, PortalType, PublishRequest } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient, APIMapping } from '../http';

export class PortalManagementService extends APIClient {

    constructor() {
        super(APIMapping.portalManagementService);
    }

    /**
     *
     * @param ignoreInactivePortals
     */
    async fetchPortals(ignoreInactivePortals: boolean = false): Promise<AxiosResponse> {
        return await this.invokeApi('/portals', 'GET', undefined, {
                queryParams: {
                    ignoreInactivePortals,
                },
            },
        );
    }

    /**
     * TODO: Please comment this method
     * @param portalId
     */
    async fetchPortal(portalId: string): Promise<AxiosResponse> {
        return await this.invokeApi(`/portals/${portalId}`, 'GET');
    }

    /**
     * TODO: Please comment this method
     */
    async fetchPredefinedPortals(): Promise<AxiosResponse> {
        return await this.invokeApi('/predefinedPortals', 'GET');
    }

    /**
     * TODO: Please comment this method
     */
    async fetchPortalTypes(): Promise<AxiosResponse> {
        return await this.invokeApi('/portalTypes', 'GET');
    }

    /**
     * TODO: Please comment this method
     * @param entityId
     */
    async fetchPublishedOn(entityId: string): Promise<AxiosResponse> {
        return await this.invokeApi(`/estates/${entityId}/portals`, 'GET');
    }

    /**
     * TODO: Please comment this method
     * @param portalType
     * @param portal
     */
    async createPortal(portalType: PortalType, portal: Portal): Promise<AxiosResponse> {
        return await this.invokeApi(`/portals/create/${portalType}`, 'POST', portal, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    /**
     * TODO: Please comment this method
     * @param portalId
     * @param portal
     */
    async updatePortal(portalId: string, portal: Portal): Promise<AxiosResponse> {
        return await this.invokeApi(`/portals/${portalId}`, 'PATCH', portal);
    }

    /**
     * TODO: Please comment this method
     * @param portalId
     */
    async deletePortal(portalId: string): Promise<AxiosResponse> {
        return await this.invokeApi(`/portals/${portalId}`, 'DELETE');
    }

    /**
     * TODO: Please comment this method
     * @param portalId
     */
    async forceDeletePortal(portalId: string): Promise<AxiosResponse> {
        return await this.invokeApi(`/portals/${portalId}/force`, 'DELETE');
    }

    /**
     * TODO: Please comment this method
     * @param portalId
     * @param portalAuthenticationModel
     */
    async authenticatePortal(portalId: string, portalAuthenticationModel: PortalAuthenticationModel) {
        return await this.invokeApi(`/portals/${portalId}/authenticate`, 'POST', portalAuthenticationModel);
    }

    /**
     * TODO: Please comment this method
     * @param publishRequest
     */
    async publishEstates(publishRequest: PublishRequest): Promise<AxiosResponse> {
        return await this.invokeApi('/publish', 'POST', publishRequest);
    }

    /**
     * Publishes all units of a developer project to its service providers
     * @param projectId main identifier of the project entity
     */
    async publishProject(projectId: String): Promise<AxiosResponse> {
        return await this.invokeApi(`/projects/${projectId}/publish`, 'POST');
    }

    /**
     * Unpublishes all units of a developer project from its service providers
     * @param projectId main identifier of the project entity
     */
    async unpublishProject(projectId: String): Promise<AxiosResponse> {
        return await this.invokeApi(`/projects/${projectId}/unpublish`, 'POST');
    }

    /**
     * TODO: Please comment this method
     * @param portalId
     * @param estateId
     * @param portalEstateSettings
     */
    async updatePortalEstateSettings(portalId: string, estateId: string, portalEstateSettings: PortalEstateSettings): Promise<AxiosResponse> {
        return await this.invokeApi(`/portals/${portalId}/estates/${estateId}`, 'POST', portalEstateSettings);
    }

    /**
     * TODO: Please comment this method
     * @param estateId
     */
    async fetchPortalEstateSettings(estateId: string): Promise<AxiosResponse<PortalEstateSettings[]>> {
        return await this.invokeApi(`/portals/estates/${estateId}`, 'GET');
    }

    /**
     * Fetches the information on which portal a estate is published on.
     * @param estateId
     */
    async fetchPublishInformation(estateId: string): Promise<AxiosResponse> {
        return await this.invokeApi(`/estates/${estateId}/portals`, 'GET');
    }

    /**
     * Fetches app published estates for special portal
     * @param portalId
     */
    async fetchPortalEstates(portalId: string): Promise<AxiosResponse> {
        return await this.invokeApi(`/portals/${portalId}/estates`, 'GET');
    }

    /**
     * Fetches a specified app published estate for special portal
     * @param portalId
     * @param estateId
     */
    async fetchPortalEstate(portalId: string, estateId: string): Promise<AxiosResponse> {
        return await this.invokeApi(`/portals/${portalId}/estates/${estateId}`, 'GET');
    }

    async getNumberOfPublishedEstates(portalId: string): Promise<AxiosResponse> {
        return await this.invokeApi(`/portals/${portalId}/estates/count`, 'GET');
    }

    /**
     * TODO: Please comment this method
     * @param portalId
     * @param verifier
     * @param token
     * @param state
     */
    async is24AuthenticationCallback(portalId: string, verifier: string, token: string, state: string): Promise<AxiosResponse> {
        return await this.invokeApi(`/portals/is24/authenticate/${portalId}/callback`, 'GET', undefined, {
            queryParams: {
                oauth_verifier: verifier,
                oauth_token: token,
                state: state,
            },
        });
    }

    /**
     * TODO: Please comment this method
     * @param portalId
     */
    async checkAuthentication(portalId: string): Promise<AxiosResponse> {
        return await this.invokeApi(`/portals/${portalId}/checkAuthentication`, 'GET');
    }
}

export default new PortalManagementService();
