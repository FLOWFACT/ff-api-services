import { EmailServiceVerifyResponse, Mail } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class EmailService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param domain
     */
    createDomain(domain: string): Promise<EmailServiceVerifyResponse>;
    /**
     * TODO: Please comment this method
     * @param domain
     */
    verifyDomain(domain: string): Promise<EmailServiceVerifyResponse>;
    /**
     * TODO: Please comment this method
     * @param s3Key
     */
    fetchMailBody(s3Key: string): Promise<AxiosResponse<String>>;
    sendMail(mail: Mail): Promise<AxiosResponse>;
    /**
     * Sync a mail manually into the platform
     * @param emailAccount
     * @param subject
     */
    syncEmail(emailAccount: string, subject: string): Promise<AxiosResponse>;
}
declare const _default: EmailService;
export default _default;
