import APIClient from '../http/APIClient';
import { TrackingEvent } from '@flowfact/types';
export declare class BehaviourService extends APIClient {
    private events;
    private timeout?;
    constructor();
    /**
     * Tracks usage of a feature
     * @param event
     */
    track(event: TrackingEvent): void;
    private postEvents;
}
declare const _default: BehaviourService;
export default _default;
