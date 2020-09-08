import { APIClient, APIMapping } from '../../http';
import { Customisation, ViewDefinition } from './ViewDefinitionService.Types';

export class CustomisationsController extends APIClient {

    constructor() {
        super(APIMapping.viewDefinitionService);
    }

    /**
     * Saves the given customisation and triggers an event applying the customisation
     * @param customisation
     */
    async saveCustomisation(customisation: Customisation) {
        await this.invokeApiWithErrorHandling('/customisations', 'POST', customisation);
    }

    /**
     * This function sends a whole view definition to the view-definition-service. The service compares the new view definition to
     * the current one in the database to save which changes are made.
     * @param viewDefinition
     */
    async saveCustomisations(viewDefinition: ViewDefinition) {
        await this.invokeApiWithErrorHandling(`/customisations/view/${viewDefinition.id}`, 'PUT', viewDefinition);
    }

}
