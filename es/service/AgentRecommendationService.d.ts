import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
export declare class AgentRecommendationService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     */
    fetchViewForAgent(schemaId: string, entityId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     * @param file
     */
    uploadAgentVideo(schemaId: string, entityId: string, file: any): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     * @param file
     * @param token
     */
    uploadRaterVideo(schemaId: string, entityId: string, file: any, token: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param token
     */
    fetchViewForRater(token: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param token
     */
    fetchCompanyAndUser(token: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param fieldValueMapping
     * @param token
     */
    updateEntity(fieldValueMapping: object, token: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param token
     * @param value
     */
    finishRating(token: string, value: any): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     */
    createPreconditions(): Promise<AxiosResponse<any>>;
}
declare const _default: AgentRecommendationService;
export default _default;
