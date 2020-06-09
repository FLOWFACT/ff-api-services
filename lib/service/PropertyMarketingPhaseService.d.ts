import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
import { v4 as uuid } from 'uuid/interfaces';
import { EntityQuery, EntityPhaseInformation, PhaseConfigurationInformation } from '../util/InternalTypes';
export declare class PropertyMarketingPhaseService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param schemaId
     */
    fetchPhases(schemaId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param phaseName
     */
    fetchPhase(schemaId: string, phaseName: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param phaseName
     * @param page
     * @param size
     */
    fetchEntitiesInPhase(phaseName: string, page?: number, size?: number, archived?: boolean, inactive?: boolean): Promise<AxiosResponse<string[]>>;
    /**
     * TODO: Please comment this method
     * @param phaseName
     * @param schemaId
     * @param page
     * @param size
     */
    fetchEntitiesInPhaseAndSchema(phaseName: string, schemaId: string, page?: number, size?: number, archived?: boolean, inactive?: boolean): Promise<AxiosResponse<string[]>>;
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     */
    fetchCurrentPhase(schemaId: string, entityId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     * @param stepId
     * @param completed
     */
    updateStep(schemaId: string, entityId: string, stepId: string, completed: boolean): Promise<AxiosResponse>;
    /**
     * Switches to next step using the step switch validator.
     * @param schemaId
     * @param entityId
     * @param stepId
     * @param source as string / enum, represents either KANBAN or LIFECYCLE
     * @returns {Promise<any>} Status OK or REJECTED and a list of widgets if rejected.
     */
    changeCurrentStep(schemaId: string, entityId: string, stepId: string, source?: 'KANBAN' | 'LIFECYCLE'): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param maxCount
     */
    fetchPhaseStatistics(maxCount?: number, archived?: boolean, inactive?: boolean): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     */
    fetchTotalCommissionForAllPhases(): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param entities
     */
    fetchCurrentPhaseOfSomeEntities(entities: EntityQuery[]): Promise<AxiosResponse<EntityPhaseInformation[]>>;
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     */
    fetchAllPhasesForEstate(schemaId: string, entityId: string): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param stepId
     * @param schemaId
     * @param entityId
     */
    validateStep(stepId: string, schemaId: string, entityId: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     */
    deleteEntityInformation(schemaId: uuid, entityId: uuid): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     */
    fetchConfigurations(): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param phaseConfigurationInformation
     */
    saveOrUpdateConfiguration(phaseConfigurationInformation: PhaseConfigurationInformation): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param id
     */
    deleteCustomConfiguration(id: uuid): Promise<AxiosResponse>;
}
declare const _default: PropertyMarketingPhaseService;
export default _default;
