import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
export declare class FunnelService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param funnelId
     */
    fethcPossibleTags(funnelId: string): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param tagName
     */
    fetchKeysForTag(funnelId: string, tagName: string): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param tagName
     * @param metadataKey
     */
    fetchValuesForTagKey(funnelId: string, tagName: string, metadataKey: string): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     */
    fetchFunnelStatistics(funnelId: string): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stageId
     * @param page
     * @param size
     */
    fetchFunnelStageEntities(funnelId: string, stageId: string, page?: number, size?: number): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param funnelToCreate
     */
    createFunnel(funnelToCreate: any): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     */
    duplicateFunnel(funnelId: string): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param includeEntityIds
     */
    findFunnelById(funnelId: string, includeEntityIds?: boolean): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     */
    deleteFunnelById(funnelId: string): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     */
    fetchAllStagesOfAnFunnel(funnelId: string): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stage
     */
    addStageAtTheEndOfTheFunnel(funnelId: string, stage: any): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stageId
     */
    findStageById(funnelId: string, stageId: string): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stageId
     * @param stage
     */
    addStageAfterGivenStageOfGivenFunnel(funnelId: string, stageId: string, stage: any): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stageId
     * @param stage
     */
    changeAStagesOfAFunnel(funnelId: string, stageId: string, stage: any): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stageId
     */
    deleteStageFromFunnel(funnelId: string, stageId: string): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     */
    fetchStateOfTheFunnel(funnelId: string): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param state
     */
    changeStateOfTheFunnel(funnelId: string, state: any): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param type
     */
    fetchAllActions(type?: string): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param action
     * @param schemaId
     * @param entityId
     */
    executeActionForEntity(action: any, schemaId: string, entityId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param state
     */
    fetchDashboardInformation(state: any): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param schemaId
     */
    fetchAvailableEntryConditionsForSchema(schemaId: string): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stageId
     */
    fetchAvailableEntryConditionsForPrevStage(funnelId: string, stageId: string): Promise<any>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param data
     */
    updateFunnelById(funnelId: string, data: any): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stageId
     */
    setStageAsFirstStage(funnelId: string, stageId: string): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param funnelId
     * @param stageId
     * @param parentId
     */
    setStageAfterStage(funnelId: string, stageId: string, parentId: string): Promise<AxiosResponse<any>>;
}
declare const _default: FunnelService;
export default _default;
