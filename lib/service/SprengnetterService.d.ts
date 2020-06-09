import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
export declare class SprengnetterService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param body
     */
    fetchRentHeatmap(body: any): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param body
     */
    fetchValuationHeatmap(body: any): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param body
     */
    fetchValuation(body: any): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param body
     */
    fetchRentValuation(body: any): Promise<AxiosResponse>;
    /**
     * Gets the HTML that is necessary to display the market report
     * @param {String} entityId - The entityId of the estate that should the htmlView should be created for.
     * @returns {Promise<AxiosResponse>} The response contains the html that represents the marketanalysis.
     */
    fetchHtml(entityId: string): Promise<AxiosResponse>;
    /**
     * Gets a link to the pdfReport that is stored on S3
     * @param {String} entityId - The entityId of the estate that should the pdfView should be created for.
     * @returns {Promise<AxiosResponse>} The response contains a link to the pdf that is stored on S3.
     */
    fetchPdfLink(entityId: String): Promise<AxiosResponse>;
    /**
     * Sends the customer feedback regarding the marketanalysis tool to pm
     * @param {Number} rating - The StarRating that was selected
     * @param {String} message - The message that contains the feedback
     * @returns {Promise<AxiosResponse>}
     */
    sendFeedback(rating: number, message: string): Promise<AxiosResponse>;
}
declare const _default: SprengnetterService;
export default _default;
