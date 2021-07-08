import { APIClient, APIMapping } from '../../http';
import { PreconditionServiceTypes } from './PreconditionsService.Types';

export class NylasPreconditionController extends APIClient {
    constructor() {
        super(APIMapping.nylasService);
    }

    async fetchPreconditions() {
        return this.invokeApiWithErrorHandling<PreconditionServiceTypes.Precondition>('/preconditions/activeMailAccount', 'GET');
    }

    async fetchIncorrectAccountPreconditions() {
        return this.invokeApiWithErrorHandling<PreconditionServiceTypes.Precondition>('/preconditions/incorrectMailAccount', 'GET');
    }
}
