import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var OmniChannelService = /** @class */ (function (_super) {
    tslib_1.__extends(OmniChannelService, _super);
    function OmniChannelService() {
        return _super.call(this, APIMapping.omniChannelService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param from
     * @param to
     * @param message
     */
    OmniChannelService.prototype.sendSMS = function (from, to, message) {
        return this.invokeApi('/sendSMS', 'POST', {
            from: from,
            to: to,
            message: message
        });
    };
    return OmniChannelService;
}(APIClient));
export { OmniChannelService };
export default new OmniChannelService();
//# sourceMappingURL=OmniChannelService.js.map