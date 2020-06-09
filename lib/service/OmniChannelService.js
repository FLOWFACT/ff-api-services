"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var OmniChannelService = /** @class */ (function (_super) {
    tslib_1.__extends(OmniChannelService, _super);
    function OmniChannelService() {
        return _super.call(this, http_1.APIMapping.omniChannelService) || this;
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
}(http_1.APIClient));
exports.OmniChannelService = OmniChannelService;
exports.default = new OmniChannelService();
//# sourceMappingURL=OmniChannelService.js.map