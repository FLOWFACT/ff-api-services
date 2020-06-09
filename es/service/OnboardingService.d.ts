import { CreateNewSubscriptionResponse, ZohoAddon, ZohoPlan } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class OnboardingService extends APIClient {
    constructor();
    /**
     * Onboards the current user and triggers all the necessary steps
     * @returns {Promise<AxiosResponse>}
     */
    onboardCurrentUser(): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param bundleName
     * @param withEntities
     */
    setupAccount(bundleName: string, withEntities?: boolean): Promise<AxiosResponse>;
    /**
     * Generates a Zoho hosted page for checkout
     * @param numberOfUsers
     */
    createNewSubscription(numberOfUsers: string): Promise<AxiosResponse<CreateNewSubscriptionResponse>>;
    /**
     * Fetch the default zoho plan, to get current information on pricing
     */
    fetchSubscriptionPlan(): Promise<AxiosResponse<ZohoPlan>>;
    /**
     * Fetch the default zoho additional user addon
     */
    fetchAddon(): Promise<AxiosResponse<ZohoAddon>>;
    /**
     * TODO: Please comment this method
     */
    fetchQualificationQuestions(): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param questionId
     * @param answer
     */
    answerQuestion(questionId: number, answer: any): Promise<AxiosResponse>;
    /**
     * Tells backend, that the "Buy Now" button was clicked.
     */
    trackBuyNowClicked(): Promise<AxiosResponse>;
    /**
     * Tells backend, that the terms where confirmed. (For example: After click onto the "order now" button)
     */
    trackTermsConfirmed(): Promise<AxiosResponse>;
}
declare const _default: OnboardingService;
export default _default;
