import { APIClient, APIMapping } from '../http';
import { AxiosResponse } from 'axios';

export class SprengnetterService extends APIClient {

    constructor() {
        super(APIMapping.spregnetterService);
    }

    /**
     * TODO: Please comment this method
     * @param body
     */
    async fetchRentHeatmap(body: any): Promise<AxiosResponse> {
        return await this.invokeApi('/api/rent/heatmap', 'POST', body);
    }

    /**
     * TODO: Please comment this method
     * @param body
     */
    async fetchValuationHeatmap(body: any): Promise<AxiosResponse> {
        return await this.invokeApi('/api/valuation/heatmap', 'POST', body);
    }

    /**
     * TODO: Please comment this method
     * @param body
     */
    async fetchValuation(body: any): Promise<AxiosResponse> {
        return await this.invokeApi('/api/valuation', 'POST', body);
    }

    /**
     * TODO: Please comment this method
     * @param body
     */
    async fetchRentValuation(body: any): Promise<AxiosResponse> {
        return await this.invokeApi('/api/rent', 'POST', body);
    }

    /**
     * Fetches all inquiries with pagination support
     * @param {String} entityId - The entityId of the estate that should the htmlView should be created for.
     * @returns {Promise<AxiosResponse>} The response contains the html that represents the marketanalysis.
     */
    async fetchHtml(entityId: string): Promise<AxiosResponse> {
        return await this.invokeApi('/htmlView/' + entityId, 'GET');
    }

    /**
     * Fetches all inquiries with pagination support
     * @param {String} entityId - The entityId of the estate that should the pdfView should be created for.
     * @returns {Promise<AxiosResponse>} The response contains a link to the pdf that is stored on S3.
     */
    async fetchPdfLink(entityId: String): Promise<AxiosResponse> {
        return await this.invokeApi('/pdfView/' + entityId, 'GET');
    }

    /**
     * Fetches all inquiries with pagination support
     * @param {Number} rating - The StarRating that was selected
     * @param {String} message - The message that contains the feedback
     * @returns {Promise<AxiosResponse>}
     */
    async sendFeedback(rating: number, message: string): Promise<AxiosResponse> {
        return await this.invokeApi('/feedback', 'POST', {rating: rating, message: message});
    }

}

export default new SprengnetterService();
