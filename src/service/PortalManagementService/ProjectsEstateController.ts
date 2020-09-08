import {APIClient, APIMapping} from "../../http";
import {PortalManagementTypes} from "./PortalManagementService.Types";
import ProjectEstateResponse = PortalManagementTypes.ProjectEstateResponse;

export class ProjectsEstateController extends APIClient {
    constructor() {
        super(APIMapping.portalManagementService);
    }

    /**
     * Fetches all assigned projects for given estate
     * @param estateId
     */
    async fetchAssignedProjectsByEstateId(estateId: string) {
        return await this.invokeApiWithErrorHandling<ProjectEstateResponse>(`/estates/${estateId}/projects`, 'GET');
    }
}
