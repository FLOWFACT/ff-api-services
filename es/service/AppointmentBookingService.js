import * as tslib_1 from "tslib";
import { APIClient } from '../http';
import APIMapping from '../http/APIMapping';
/**
 * This class provides methods that grant access to the appointment-booking-service. All methods Return AxiosPromises
 * that represent the answer that the appointment-booking-service provided.
 */
var AppointmentBookingService = /** @class */ (function (_super) {
    tslib_1.__extends(AppointmentBookingService, _super);
    function AppointmentBookingService() {
        return _super.call(this, APIMapping.appointmentBookingService) || this;
    }
    /**
     * fetches All objects from the current user.
     */
    AppointmentBookingService.prototype.fetchAllObjects = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/objectlist', 'GET')];
            });
        });
    };
    /**
     * fetches All Events (possible and existing)
     */
    AppointmentBookingService.prototype.fetchAllEvents = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/eventlist', 'GET')];
            });
        });
    };
    /**
     * posts the provided config against the service. New eventslots will be created)
     * @param config
     */
    AppointmentBookingService.prototype.addConfig = function (config) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/eventconfig', 'POST', config)];
            });
        });
    };
    /**
     * Posts the eventId against the service. This event will be deleted.
     * @param eventId
     */
    AppointmentBookingService.prototype.deleteEvent = function (eventId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/eventconfig/delete/event', 'POST', { eventSlotId: eventId })];
            });
        });
    };
    /**
     * This Get ressource returns all information needed for the view to display the prospect-booking-views
     * @param token
     */
    AppointmentBookingService.prototype.fetchAppointmentRequestData = function (token) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/public/request/' + token, 'GET')];
            });
        });
    };
    /**
     * This method posts the given appointment against the service. The appointment will be created.
     * @param token
     * @param appointment
     */
    AppointmentBookingService.prototype.bookAppointment = function (token, appointment) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/public/request/' + token, 'POST', appointment)];
            });
        });
    };
    return AppointmentBookingService;
}(APIClient));
export { AppointmentBookingService };
export default new AppointmentBookingService();
//# sourceMappingURL=AppointmentBookingService.js.map