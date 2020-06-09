import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
import { Workflows, Workflow } from '@flowfact/types';
interface WorkflowPatchRequest {
    patches: [{
        id: string;
        patch: [{
            op: string;
            path: string;
            value: string;
        }];
    }];
}
interface WorkflowPatchResult {
    results: [{
        id: string;
        success: boolean;
        error?: {
            type: string;
            description: string;
            additionalInfo: string;
        };
    }];
}
declare class WorkflowService extends APIClient {
    constructor();
    fetchAvailableConditions: () => Promise<AxiosResponse<String[]>>;
    fetchAvailableActions: () => Promise<AxiosResponse<String[]>>;
    /**
     * Fetch all available templates
     */
    fetchTemplates: () => Promise<AxiosResponse<any>>;
    /**
     * Fetches a specific workflow
     * @param workflowId
     *  The id of the workflow
     */
    fetchWorkflow: (workflowId: string) => Promise<AxiosResponse<Workflow>>;
    /**
     * Fetches specific workflows by the ids. If the array is empty, all workflows will be returned.
     * @param workflowIds
     */
    fetchWorkflows: (workflowIds: string[]) => Promise<AxiosResponse<Workflows>>;
    /**
     * Fetches statistics for the given workflow ids. If the array is empty, it returns all statistics for all workflows
     * @param workflowIds
     */
    fetchWorkflowsStatistics: (workflowIds: string[]) => Promise<AxiosResponse<Workflows>>;
    /**
     * Creates a workflow by his name.
     */
    createWorkflow: (workflow: Workflow) => Promise<AxiosResponse<Workflow>>;
    /**
     * Updates a workflow by his id.
     * @param workflowId
     * @param workflow
     */
    updateWorkflow: (workflowId: string, workflow: Workflow) => Promise<AxiosResponse<Workflow>>;
    deleteWorkflow: (workflowId: string) => Promise<AxiosResponse<any>>;
    patchWorkflow: (body: WorkflowPatchRequest) => Promise<AxiosResponse<WorkflowPatchResult>>;
}
declare const _default: WorkflowService;
export default _default;
