import { ContainerCreate, ContainerDetails, ContainerLogsResponse, ContainerResponse, Database, DatabaseCreate, GetAllContainersResponse, GetAllDatabasesResponse, GetAllProjectsResponse, NiceNameAvailableResponse, Project, ProjectCreate } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import APIClient from '../http/APIClient';
export declare class CaasManagementService extends APIClient {
    constructor();
    /**
     * Fetches all projects
     * @return {GetAllProjectsResponse}
     */
    fetchAllProjects(): Promise<AxiosResponse<GetAllProjectsResponse>>;
    /**
     * Fetches the project with the given id
     * @param id
     * @return {Project}
     */
    fetchProject(id: string): Promise<AxiosResponse<Project>>;
    /**
     * Creates a project with the given configuration
     * @param projectConfiguration
     * @return {Project}
     */
    createProject(projectConfiguration: ProjectCreate): Promise<AxiosResponse<Project>>;
    /**
     * Deletes the project with the given id
     * @param id
     */
    deleteProject(id: string): Promise<AxiosResponse>;
    /**
     * Fetches all containers in their short representation
     * @return {GetAllContainersResponse}
     */
    fetchAllContainers(): Promise<AxiosResponse<GetAllContainersResponse>>;
    /**
     * Fetches the container with the given id
     * @param id
     * @return {ContainerResponse}
     */
    fetchContainer(id: string): Promise<AxiosResponse<ContainerResponse>>;
    /**
     * Fetches the logs for the container with the given id
     * @param id
     * @return {ContainerLogsResponse}
     */
    fetchContainerLogs(id: string): Promise<AxiosResponse<ContainerLogsResponse>>;
    /**
     * Creates a container with the given configuration
     * @param containerConfiguration
     * @return {ContainerResponse}
     */
    createContainer(containerConfiguration: ContainerCreate): Promise<AxiosResponse<ContainerResponse>>;
    /**
     * Updates the container with the given id and configuration
     * @param id
     * @param containerConfiguration
     * @return {ContainerResponse}
     */
    updateContainer(id: string, containerConfiguration: ContainerDetails): Promise<AxiosResponse<ContainerResponse>>;
    /**
     * Deletes the container with the given id
     * @param id
     */
    deleteContainer(id: string): Promise<AxiosResponse>;
    /**
     * GETs the given url and returns the respose
     * @param {string} url
     */
    pingUrl(url: string): Promise<AxiosResponse>;
    /**
     * Checks whether the nice name is available (globally unique)
     * @param niceName
     */
    isNiceNameAvailable(niceName: string): Promise<AxiosResponse<NiceNameAvailableResponse>>;
    /**
     * Fetches all databases
     * @return {GetAllDatabasesResponse}
     */
    fetchAllDatabases(): Promise<AxiosResponse<GetAllDatabasesResponse>>;
    /**
     * Fetches the database with the given id
     * @param id
     * @return {Database}
     */
    fetchDatabase(id: string): Promise<AxiosResponse<Database>>;
    /**
     * Creates a database with the given configuration
     * @param databaseConfiguration
     * @return {Database}
     */
    createDatabase(databaseConfiguration: DatabaseCreate): Promise<AxiosResponse<Database>>;
    /**
     * Deletes the database with the given id
     * @param id
     */
    deleteDatabase(id: string): Promise<AxiosResponse>;
}
declare const _default: CaasManagementService;
export default _default;
