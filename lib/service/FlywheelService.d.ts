import { Flowdsl, Flywheel, FlywheelFilter } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class FlywheelService extends APIClient {
    constructor();
    /**
     * Creates a new flywheel based on the title
     * @param title
     */
    createFlywheel(title: string): Promise<AxiosResponse>;
    /**
     * Deletes a flywheel based on the name (id)
     * @param flywheelName
     */
    deleteFlywheel(flywheelName: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * Returns all flywheels with no param given or no-content
     */
    fetchAllFlywheels(): Promise<AxiosResponse>;
    /**
     * only for dev
     * @deprecated
     */
    fetchAllMocks(): Promise<AxiosResponse>;
    /**
     * Return a specific flywheel by name or not-found
     * @param flywheelName
     */
    fetchFlywheel(flywheelName: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * Returns all phases which have childrens
     */
    fetchAllKanbans(): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param filters
     */
    fetchAllPhases(filters?: FlywheelFilter[]): Promise<AxiosResponse>;
    /**
     * Return a specific phase with all subphases
     * @param phaseName
     */
    fetchPhase(phaseName: string): Promise<AxiosResponse>;
    /**
     * Return all transactions for a specific phase
     * @param phaseName
     * @param view
     * @deprecated Because same functionality plus filter possibility can be found in POST method: fetchTransactionsForPhaseWithFilter
     */
    fetchTransactionsForPhase(phaseName: string, view?: string): Promise<AxiosResponse>;
    /**
     * Return all transactions for a specific phase
     * @param phaseName
     * @param view
     * @param {Flowdsl} flowdsl
     */
    fetchTransactionsForPhaseWithFilter(phaseName: string, view?: string, flowdsl?: Flowdsl): Promise<AxiosResponse>;
    /**
     * Moves a transaction to another phase
     * @param transactionId
     * @param fromPhaseName
     * @param toPhaseName
     */
    moveTransaction(transactionId: string, fromPhaseName: string, toPhaseName: string): Promise<AxiosResponse>;
    /**
     * Creates or updates a phase.
     * @param phase
     */
    createPhase(phase: object): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param phase
     */
    updatePhase(phase: object): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param phaseName
     */
    deletePhase(phaseName: string): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param flywheelName
     * @param phaseNames
     */
    updatePhases(flywheelName: string, phaseNames: string[]): Promise<AxiosResponse<Flywheel>>;
    /**
     * TODO: Please comment this method
     * @param transactionId
     */
    exitPhase(transactionId: number): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param transactionId
     * @param entityId
     * @param targetPhase
     */
    linkTransaction(transactionId: number, entityId: string, targetPhase: number): Promise<AxiosResponse<any>>;
}
declare const _default: FlywheelService;
export default _default;
