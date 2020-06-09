import { AxiosRequestConfig, AxiosResponse } from 'axios';
export declare type InterceptorMethod<V = any> = (value: V) => V | Promise<V>;
export declare type InterceptorRequestEntry = {
    type: 'request';
    method: InterceptorMethod<AxiosRequestConfig>;
};
export declare type InterceptorResponseEntry = {
    type: 'response';
    method: InterceptorMethod<AxiosResponse>;
};
export declare type InterceptorEntry = InterceptorRequestEntry | InterceptorResponseEntry;
export declare class Interceptor {
    private readonly _interceptors;
    readonly interceptors: InterceptorEntry[];
    constructor();
    addRequestInterceptor(interceptorMethod: InterceptorMethod<AxiosRequestConfig>): void;
    addResponseInterceptor(interceptorMethod: InterceptorMethod<AxiosResponse>): void;
}
declare const _default: Interceptor;
export default _default;
