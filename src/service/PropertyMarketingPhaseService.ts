import { APIClient, APIMapping } from '../http';
import { AxiosResponse } from 'axios';
import { v4 as uuid } from 'uuid/interfaces';
import { EntityQuery, EntityPhaseInformation, PhaseConfigurationInformation } from '../util/InternalTypes';

export class PropertyMarketingPhaseService extends APIClient {

    constructor() {
        super(APIMapping.propertyMarketingPhaseService);
    }

    /**
     * TODO: Please comment this method
     * @param schemaId
     */
    async fetchPhases(schemaId: string): Promise<AxiosResponse> {
        return await this.invokeApi(`/${schemaId}/phases`, 'GET');
    }

    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param phaseName
     */
    async fetchPhase(schemaId: string, phaseName: string): Promise<AxiosResponse> {
        return await this.invokeApi(`/${schemaId}/phases/${phaseName}`, 'GET');
    }

    /**
     * TODO: Please comment this method
     * @param phaseName
     * @param page
     * @param size
     */
    async fetchEntitiesInPhase(phaseName: string, page: number = 1, size: number = 50, archived = true, inactive = true) {
        return await this.invokeApi<string[]>(`/phases/${phaseName}/entities`, 'GET', undefined, {
            queryParams: {
                archived,
                inactive,
                page,
                size
            }
        });
    }

    /**
     * TODO: Please comment this method
     * @param phaseName
     * @param schemaId
     * @param page
     * @param size
     */
    async fetchEntitiesInPhaseAndSchema(phaseName: string, schemaId: string, page: number = 1, size: number = 50, archived = true, inactive = true) {
        return await this.invokeApi<string[]>(`/phases/${phaseName}/entities/${schemaId}`, 'GET', undefined, {
            queryParams: {
                archived,
                inactive,
                page,
                size
            }
        });
    }

    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     */
    async fetchCurrentPhase(schemaId: string, entityId: string): Promise<AxiosResponse> {
        return await this.invokeApi(`/${schemaId}/${entityId}/currentPhase`, 'GET');
    }

    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     * @param stepId
     * @param completed
     */
    async updateStep(schemaId: string, entityId: string, stepId: string, completed: boolean): Promise<AxiosResponse> {
        return await this.invokeApi(`/${schemaId}/${entityId}/updateStep`, 'POST', {
            stepId: stepId,
            completed: completed
        });
    }

    /**
     * Switches to next step using the step switch validator.
     * @param schemaId
     * @param entityId
     * @param stepId
     * @param source as string / enum, represents either KANBAN or LIFECYCLE
     * @returns {Promise<any>} Status OK or REJECTED and a list of widgets if rejected.
     */
    async changeCurrentStep(schemaId: string, entityId: string, stepId: string, source?: 'KANBAN' | 'LIFECYCLE'): Promise<AxiosResponse> {
        return await this.invokeApi(`/${schemaId}/${entityId}/switchToStep`, 'POST', {stepId, source});
    }

    /**
     * TODO: Please comment this method
     * @param maxCount
     */
    async fetchPhaseStatistics(maxCount: number = 50, archived = true, inactive = true): Promise<AxiosResponse> {
        return await this.invokeApi(`/phases/stats`, 'GET', undefined, {
            queryParams: {
                archived,
                inactive,
                size: maxCount
            }
        });
    }

    /**
     * TODO: Please comment this method
     */
    async fetchTotalCommissionForAllPhases(): Promise<AxiosResponse> {
        return await this.invokeApi(`/calculateTotalCommissionForAllPhases`, 'GET');
    }

    /**
     * TODO: Please comment this method
     * @param entities
     */
    async fetchCurrentPhaseOfSomeEntities(entities: EntityQuery[]): Promise<AxiosResponse<EntityPhaseInformation[]>> {
        return await this.invokeApi(`/phases`, 'POST', entities);
    }

    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     */
    async fetchAllPhasesForEstate(schemaId: string, entityId: string) {
        return await this.invokeApi(`/${schemaId}/${entityId}/phases`, 'GET');
    }

    /**
     * TODO: Please comment this method
     * @param stepId
     * @param schemaId
     * @param entityId
     */
    async validateStep(stepId: string, schemaId: string, entityId: string): Promise<AxiosResponse> {
        return await this.invokeApi(`/validateStep/stepId/${stepId}/schemaId/${schemaId}/entityId/${entityId}`, 'POST');
    }

    /**
     * TODO: Please comment this method
     * @param schemaId
     * @param entityId
     */
    async deleteEntityInformation(schemaId: uuid, entityId: uuid): Promise<AxiosResponse> {
        return await this.invokeApi(`/steps/${schemaId}/${entityId}`, 'DELETE');
    }

    /**
     * TODO: Please comment this method
     */
    async fetchConfigurations() {
        return await this.invokeApi('/phaseconfigurations', 'GET');
    }

    /**
     * TODO: Please comment this method
     * @param phaseConfigurationInformation
     */
    async saveOrUpdateConfiguration(phaseConfigurationInformation: PhaseConfigurationInformation): Promise<AxiosResponse> {
        return await this.invokeApi('/phaseconfigurations', 'POST', phaseConfigurationInformation);
    }

    /**
     * TODO: Please comment this method
     * @param id
     */
    async deleteCustomConfiguration(id: uuid): Promise<AxiosResponse> {
        return await this.invokeApi(`/phaseconfigurations/${id}`, 'DELETE');
    }
}

export default new PropertyMarketingPhaseService();
