import {APIClient, APIMapping} from "../../http";
import {PortalManagementTypes} from "./PortalManagementService.Types";
import ProjectPublishResponse = PortalManagementTypes.ProjectPublishResponse;

export class ProjectsController extends APIClient {
    constructor() {
        super(APIMapping.portalManagementService);
    }

    /**
     * Publishes all units of a developer project to its service providers
     * @param projectId main identifier of the project entity
     */
    async publish(projectId: string) {
        return await this.invokeApiWithErrorHandling<ProjectPublishResponse>(`/projects/${projectId}/publish`, 'POST');
    }

    /**
     * Unpublishes all units of a developer project from its service providers
     * @param projectId main identifier of the project entity
     */
    async unpublish(projectId: string) {
        return await this.invokeApiWithErrorHandling<ProjectPublishResponse>(`/projects/${projectId}/unpublish`, 'POST');
    }

}
