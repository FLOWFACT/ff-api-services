import { AuthRequest, NylasConfig, NylasConfigPatch, RegistrationUrl, SendEmailRequest } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import APIClient from '../http/APIClient';
/**
 * See https://docs.nylas.com/reference for more info
 */
export declare class NylasService extends APIClient {
    constructor();
    /**
     * Authorize a user with the code from the nylas callback
     * @param code
     */
    authorizeUser(code: string, isGmail?: boolean): Promise<AxiosResponse>;
    /**
     * Authorize a user with specific credentials
     * @param authRequest IMAP/SMTP credentials
     */
    nativeAuth(authRequest: AuthRequest): Promise<AxiosResponse>;
    /**
     * Reactivates a 'cancelled' account and sets it back to 'paid' in nylas
     * @param email the email address to reactivate
     */
    reactivate(email: string): Promise<AxiosResponse>;
    /**
     * Sends an email using the nylas api
     * @param emailAccount the email to be sending from
     * @param email
     */
    sendMail(emailAccount: string, email: SendEmailRequest): Promise<AxiosResponse>;
    /**
     *
     */
    fetchConfig(): Promise<AxiosResponse<NylasConfig>>;
    /**
     * Generate a url that follows the nylas hosted authorization flow
     * @param email
     * @param callbackUrl URL that has to be confiured
     */
    getRegistrationUrl(email: string, callbackUrl?: string, isGmail?: boolean): Promise<AxiosResponse<RegistrationUrl>>;
    /**
     * Sets the email account values to the supplied settings, nulls them if they are left out
     * @param config
     */
    overwriteSettings(config: NylasConfigPatch): Promise<AxiosResponse>;
    /**
     * Updates the settings to the specified values, keeps existing values if none are supplied
     * @param config
     */
    updateSettings(config: NylasConfigPatch): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     */
    deleteAccount(email: string): Promise<AxiosResponse>;
    /**
     * This method returns all information of the given provider.
     * @param mail
     */
    fetchMailSettings(mail: string): Promise<AxiosResponse>;
    /**
     * This method returns all available calendars for the account
     * @param email
     */
    fetchCalendars(email: string): Promise<AxiosResponse>;
}
declare const _default: NylasService;
export default _default;
