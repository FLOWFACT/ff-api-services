import { APIClient } from '../http';
export declare class FormService extends APIClient {
    constructor();
    /**
     * TODO: Please comment this method
     * @param integrationId
     */
    render(integrationId: string): Promise<any>;
}
declare const _default: FormService;
export default _default;
