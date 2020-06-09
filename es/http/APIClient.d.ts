import { AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';
import { APIService } from './APIMapping';
export declare type ParamMap = {
    [key: string]: string | boolean | number | undefined;
};
export interface APIClientAdditionalParams extends AxiosRequestConfig {
    headers?: string | ParamMap;
    queryParams?: ParamMap;
    cancelToken?: CancelToken;
}
export declare type MethodTypes = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'OPTIONS' | 'PATCH' | 'HEAD';
export default abstract class APIClient {
    private userId;
    private readonly _serviceName;
    private static languages;
    private gql;
    static changeLanguages(newLanguages: string): void;
    protected constructor(service: APIService);
    withUserId(userId: string): this;
    private getUserIdentification;
    invokeGqlQuery<T = any>(query: any, variables?: any): Promise<import("apollo-client/core/types").ApolloQueryResult<T>>;
    invokeGqlMutation<T = any>(mutation: any, variables?: any): Promise<import("apollo-link/lib/types").FetchResult<T, Record<string, any>, Record<string, any>>>;
    invokeApi<T = any>(path: string, method?: MethodTypes, body?: string | {}, additionalParams?: APIClientAdditionalParams): Promise<AxiosResponse<T>>;
}
