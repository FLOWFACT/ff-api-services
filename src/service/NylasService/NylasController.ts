import { AuthRequest, NylasConfigPatch, SendEmailRequest } from '@flowfact/types';
import APIClient from '../../http/APIClient';
import APIMapping from '../../http/APIMapping';
import { NylasServiceTypes } from './NylasService.Types';
import SchedulerPage = NylasServiceTypes.SchedulerPage;

/**
 * See https://docs.nylas.com/reference for more info
 */
export class NylasController extends APIClient {

    constructor() {
        super(APIMapping.nylasService);
    }

    /**
     * Authorize a user with the code from the nylas callback
     * @param code
     * @param isGmail
     */
    async authorizeUser(code: string, isGmail: boolean = false){
        return await this.invokeApiWithErrorHandling('/account', 'POST', undefined, {
            queryParams: {
                command: 'authorize',
                nativeAuth: false,
                isGmail: isGmail,
                code: code
            }
        });
    }

    /**
     * Authorize a user with specific credentials
     * @param authRequest IMAP/SMTP credentials
     */
    async nativeAuth(authRequest: AuthRequest){
        return await this.invokeApiWithErrorHandling('/account', 'POST', authRequest, {
            queryParams: {
                nativeAuth: true,
                command: 'authorize'
            }
        });
    }

    /**
     * Reactivates a 'cancelled' account and sets it back to 'paid' in nylas
     * @param email the email address to reactivate
     */
    async reactivate(email: string){
        return await this.invokeApiWithErrorHandling('/reactivate', 'POST', undefined, {
            queryParams: {
                email: email
            }
        });
    }

    /**
     * Sends an email using the nylas api
     * @param emailAccount the email to be sending from
     * @param email
     */
    async sendMail(emailAccount: string, email: SendEmailRequest){
        return await this.invokeApiWithErrorHandling('/nylas/send', 'POST', email, {
            'queryParams': {
                'email': emailAccount
            }
        });
    }

    /**
     *
     */
    async fetchConfig(){
        return await this.invokeApiWithErrorHandling('/config', 'GET');
    }

    /**
     * Generate a url that follows the nylas hosted authorization flow
     * @param email
     * @param callbackUrl URL that has to be confiured
     * @param isGmail
     */
    async getRegistrationUrl(email: string, callbackUrl?: string, isGmail: boolean = false){
        return await this.invokeApiWithErrorHandling('/registration-url', 'GET', undefined, {
            queryParams: {
                email: email,
                callbackUrl: callbackUrl,
                isGmail: isGmail
            }
        });
    }

    /**
     * Sets the email account values to the supplied settings, nulls them if they are left out
     * @param config
     */
    async overwriteSettings(config: NylasConfigPatch){
        return await this.invokeApiWithErrorHandling('/config', 'POST', config);
    }

    /**
     * Updates the settings to the specified values, keeps existing values if none are supplied
     * @param config
     */
    async updateSettings(config: NylasConfigPatch){
        return await this.invokeApiWithErrorHandling('/config', 'PATCH', config);
    }

    /**
     * TODO: Please comment this method
     */

    /* UNDER DEVELOPMENT; DOES NOT WORK YET */
    async deleteAccount(email: string){
        return await this.invokeApiWithErrorHandling('/account', 'DELETE', undefined, {
            queryParams: {
                email: email
            }
        });
    }

    /**
     * This method returns all information of the given provider.
     * @param mail
     */
    async fetchMailSettings(mail: string){
        return await this.invokeApiWithErrorHandling('/mailsettings', 'POST', {
            mail: mail
        });
    }

    /**
     * This method returns all available calendars for the account
     * @param email
     */
    async fetchCalendars(email: string){
        return await this.invokeApiWithErrorHandling('/nylas/calendars', 'GET', undefined, {
            queryParams: {
                email: email
            }
        });
    }

    /**
     * This method returns all existing Scheduler pages for the specified nylas account
     * @param accountId
     */
    async fetchSchedulerPages(accountId: string) {
        return await this.invokeApiWithErrorHandling<SchedulerPage[]>(`/schedule/manage/pages?account_id=${accountId}`, 'GET');
    }

    /**
     * This method creates a scheduler page with the given payload. Since this object is really generic there is no good way
     * to map it into an own class therefore it is an object.
     * @param payload
     * @param accountId
     */
    async createSchedulerPage(accountId: string, payload: SchedulerPage) {
        return await this.invokeApiWithErrorHandling<SchedulerPage>(`/schedule/manage/pages?account_id=${accountId}`, 'POST', payload);
    }

    /**
     * This method enables Delete-Requests for a schedulerpage with the give pageId and accountId
     * @param accountId
     * @param pageId
     */
    async deleteSchedulerPage(accountId: string, pageId: number) {
        return await this.invokeApiWithErrorHandling<string>(`/schedule/manage/pages/${pageId}?account_id=${accountId}`, 'DELETE');
    }
}
