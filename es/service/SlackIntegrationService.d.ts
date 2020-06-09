import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
export interface CompanyIntegrationSetting {
    id: number;
    companyId: string;
    slackConfiguration: SlackConfiguration;
}
export interface CreateChannelRequest {
    name: string;
    purpose?: string;
    topic?: string;
}
export interface DeleteChannelRequest {
    name: string;
    soft?: boolean;
}
export interface PostMessageRequest {
    channel: string;
    message: string;
    senderName: string;
    senderImageUrl?: string;
    threadId?: string;
}
export interface SlackConfiguration {
    oauthToken: string;
    teamId: string;
    relatedChannels: Array<string>;
}
export interface OAuthAccessRequest {
    companyId: string;
    code: string;
}
export declare type TypedAxiosResponse<T> = AxiosResponse & {
    data: T;
};
export interface SlackApi {
    postMessage(postMessageRequest: PostMessageRequest): Promise<AxiosResponse>;
    createChannel(createChannelRequest: CreateChannelRequest): Promise<AxiosResponse>;
    deleteChannel(deleteChannelRequest: DeleteChannelRequest): Promise<AxiosResponse>;
    oAuthAccess(oAuthAccessRequest: OAuthAccessRequest): Promise<AxiosResponse>;
}
export interface SettingsApi {
    getSettings(): Promise<TypedAxiosResponse<CompanyIntegrationSetting>>;
    postSettings(slackConfiguration: SlackConfiguration): Promise<AxiosResponse>;
    deleteSettings(): Promise<AxiosResponse>;
}
export declare class SlackIntegrationService extends APIClient {
    private readonly _slackApi;
    private readonly _settingsApi;
    constructor();
    readonly slack: SlackApi;
    readonly settings: SettingsApi;
}
declare const _default: SlackIntegrationService;
export default _default;
