import { ViewsController } from './ViewsController';
import { CustomisationsController } from './CustomisationsController';

export * from './ViewDefinitionService.Types';

export class ViewDefinitionService {

    public readonly viewsController: ViewsController;
    public readonly customisationsController: CustomisationsController;

    constructor() {
        this.viewsController = new ViewsController();
        this.customisationsController = new CustomisationsController();
    }

}

export const ViewDefinitionServiceInstance = new ViewDefinitionService();
