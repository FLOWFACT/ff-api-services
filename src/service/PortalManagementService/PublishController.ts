import {APIClient, APIMapping} from "../../http";
import {PortalManagementTypes} from "./PortalManagementService.Types";
import PublishRequest = PortalManagementTypes.PublishRequest;

export class PublishController extends APIClient {
    constructor() {
        super(APIMapping.portalManagementService);

    }

    /**
     * TODO: Please comment this method
     * @param publishRequest
     */
    async publishEstates(publishRequest: PublishRequest){
        return await this.invokeApiWithErrorHandling<PublishRequest>('/publish', 'POST', publishRequest);
    }
}

