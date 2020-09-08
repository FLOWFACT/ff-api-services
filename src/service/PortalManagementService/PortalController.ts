import {APIClient, APIMapping} from "../../http";
import {PortalManagementTypes} from "./PortalManagementService.Types";
import Portal = PortalManagementTypes.Portal;
import PredefinedPortal = PortalManagementTypes.PredefinedPortal;
import PortalAuthenticationModel = PortalManagementTypes.PortalAuthenticationModel;
import PortalType = PortalManagementTypes.PortalType;
import PortalTypeWithCaption = PortalManagementTypes.PortalTypeWithCaption;

export class PortalController extends APIClient {
    constructor() {
        super(APIMapping.portalManagementService);
    }

    /**
     * Gets all portals
     */
    async fetchAll(ignoreInactivePortals: boolean = false) {
        return await this.invokeApiWithErrorHandling<Portal[]>('/portals', 'GET', undefined, {
                queryParams: {
                    ignoreInactivePortals,
                },
            },
        );
    }

    /**
     * Gets the portal with the provided ID
     */
    async fetch(portalId: string) {
        return await this.invokeApiWithErrorHandling<Portal>(`/portals/${portalId}`, 'GET');
    }

    /**
     * TODO: Please comment this method
     */
    async delete(portalId: string) {
        return await this.invokeApiWithErrorHandling(`/portals/${portalId}`, 'DELETE');
    }

    /**
     * Patches the portal with the given id. If no FTP port is provided, it is set to 21 per default
     */
    async update(portalId: string, portal: Portal) {
        return await this.invokeApiWithErrorHandling<Portal>(`/portals/${portalId}`, 'PATCH', portal);
    }

    /**
     * TODO: Please comment this method
     */
    async authenticate(portalId: string, portalAuthenticationModel: PortalAuthenticationModel) {
        return await this.invokeApiWithErrorHandling(`/portals/${portalId}/authenticate`, 'POST', portalAuthenticationModel);
    }

    /**
     * Checks if a portal is authenticated or not
     */
    async checkAuthentication(portalId: string) {
        return await this.invokeApiWithErrorHandling(`/portals/${portalId}/checkAuthentication`, 'GET');
    }

    /**
     * TODO: Please comment this method
     */
    async forceDelete(portalId: string) {
        return await this.invokeApiWithErrorHandling(`/portals/${portalId}/force`, 'DELETE');
    }

    /**
     * TODO: Please comment this method
     */
    async create(portalType: PortalType, portal: Portal) {
        return await this.invokeApiWithErrorHandling<Portal>(`/portals/create/${portalType}`, 'POST', portal, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    /**
     * TODO: Please comment this method
     */
    async is24AuthenticationCallback(portalId: string, verifier: string, token: string, state: string) {
        return await this.invokeApiWithErrorHandling(`/portals/is24/authenticate/${portalId}/callback`, 'GET', undefined, {
            queryParams: {
                oauth_verifier: verifier,
                oauth_token: token,
                state: state,
            },
        });
    }

    /**
     * TODO: Please comment this method
     */
    async fetchPortalTypes() {
        return await this.invokeApiWithErrorHandling<PortalTypeWithCaption>('/portalTypes', 'GET');
    }

    /**
     * TODO: Please comment this method
     */
    async fetchPredefinedPortals() {
        return await this.invokeApiWithErrorHandling<PredefinedPortal>('/predefinedPortals', 'GET');
    }
}
