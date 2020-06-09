import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
/**
 * This class provides methods that grant access to the appointment-booking-service. All methods Return AxiosPromises
 * that represent the answer that the appointment-booking-service provided.
 */
export declare class AppointmentBookingService extends APIClient {
    constructor();
    /**
     * fetches All objects from the current user.
     */
    fetchAllObjects(): Promise<AxiosResponse>;
    /**
     * fetches All Events (possible and existing)
     */
    fetchAllEvents(): Promise<AxiosResponse>;
    /**
     * posts the provided config against the service. New eventslots will be created)
     * @param config
     */
    addConfig(config: any): Promise<AxiosResponse>;
    /**
     * Posts the eventId against the service. This event will be deleted.
     * @param eventId
     */
    deleteEvent(eventId: any): Promise<AxiosResponse>;
    /**
     * This Get ressource returns all information needed for the view to display the prospect-booking-views
     * @param token
     */
    fetchAppointmentRequestData(token: any): Promise<AxiosResponse>;
    /**
     * This method posts the given appointment against the service. The appointment will be created.
     * @param token
     * @param appointment
     */
    bookAppointment(token: any, appointment: any): Promise<AxiosResponse>;
}
declare const _default: AppointmentBookingService;
export default _default;
