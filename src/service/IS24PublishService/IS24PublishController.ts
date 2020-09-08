import { APIClient, APIMapping } from '../../http';
import {IS24PublishTypes} from "./IS24Publish.Types";


export class IS24PublishController extends APIClient {

    constructor() {
        super(APIMapping.is24PublishService);
    }

    /**
     * This generates a is24 report for a specific estate and a timerange
     * @param estateId
     * @param startDate
     * @param toDate
     */
    async fetchReport(estateId: string, startDate: any, toDate: any) {
        return await this.invokeApiWithErrorHandling<IS24PublishTypes.IS24Statistics>(`/statistics/estates/${estateId}`, 'GET', undefined, {
            queryParams: {
                startDate: startDate,
                toDate: toDate,
            },
        });
    }

    /**
     * Fetches projects for special portal
     * @param portalId
     */
    async fetchProjects(portalId: string) {
        return await this.invokeApiWithErrorHandling<IS24PublishTypes.IS24Projects[]>(`/portals/${portalId}/projects`, 'GET');
    }

    /**
     * Fetches an url for special IS24 offers
     * @param estateId
     * @param portalId
     */
    async fetchOffer(estateId: string, portalId: string) {
        return await this.invokeApiWithErrorHandling<IS24PublishTypes.IS24UpsellOffer>(`/OTP/estate/${estateId}/portal/${portalId}`, 'GET');
    }
}

export default new IS24PublishController();
