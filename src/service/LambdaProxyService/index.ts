import {APIClient, APIMapping, ApiResponse} from '../../http';
import {ActivityReportRequestBody, ActivityReportRequestMethod, LambdaServiceResponse} from './ActivityReportV2.Types';
import {EnvironmentManagementInstance} from '../..'


class LambdaProxyService extends APIClient {
    constructor() {
        super(APIMapping.lambdaProxyService);
    }

    private async prepareActivityReportV2Body(method: ActivityReportRequestMethod, entityId: string): Promise<ActivityReportRequestBody> {
        const authenticationToken = await this.getAuthenticationToken();
        return {
            cognitoToken: authenticationToken,
            entityId: entityId,
            method: method,
        };
    }

    private async invokeActivityReportV2(method: ActivityReportRequestMethod, entityId: string): Promise<ApiResponse<LambdaServiceResponse>> {
        const body = await this.prepareActivityReportV2Body(method, entityId);
        return await this.invokeApiWithErrorHandling<LambdaServiceResponse>(`/activity-report2-lambda`, 'POST', body, {headers: {'Content-Type': 'application/json'}});
    }

    async fetchLogDirectories() {
        return this.invokeApiWithErrorHandling('/ff-importer-v2-record-log-s3-directory-entries', 'GET');
    }

    async fetchDirectoryContents(table: string) {
        return this.invokeApiWithErrorHandling('/ff-importer-v2-record-log-s3-directory-content', 'POST', {table});
    }

    /**
     * generate activity report from estate
     * @param entityId entity id of the estate object
     */
    public async generateActivityReportV2(entityId: string): Promise<ApiResponse<LambdaServiceResponse>> {
        return this.invokeActivityReportV2('generate', entityId);
    }

    /**
     * publish activity report data as context file in the preconfigured AWS S3 bucket
     * @param entityId entity id of the activity report object
     */
    public async publicActivityReportV2(entityId: string): Promise<ApiResponse<LambdaServiceResponse>> {
        return this.invokeActivityReportV2('publish', entityId);
    }

    /**
     * Generate a URL to get a preview of activity report, without creating a context file
     * @param activityReportId entity id of the activity report instance
     */
    public async generateActivityReportPreviewUrl(activityReportId: string): Promise<string> {
        const baseUrl = EnvironmentManagementInstance.getActivityReportUrl();
        const authenticationToken = await this.getAuthenticationToken();
        return `${baseUrl}/preview?hash=${authenticationToken}&id=${activityReportId}`;
    }
}

export const LambdaProxyServiceInstance = new LambdaProxyService();
