import { NylasController } from './NylasController';

export * from './NylasService.Types';

export class NylasService{

    public readonly nylas : NylasController;

    constructor(){
        this.nylas = new NylasController();
    }
}

export const NylasServiceInstance = new NylasService();
