import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var SlackIntegrationService = /** @class */ (function (_super) {
    tslib_1.__extends(SlackIntegrationService, _super);
    function SlackIntegrationService() {
        var _this = _super.call(this, APIMapping.slackIntegrationService) || this;
        _this._slackApi = {
            postMessage: function (postMessageRequest) { return _this.invokeApi('/slack/postMessage', 'POST', postMessageRequest); },
            createChannel: function (createChannelRequest) { return _this.invokeApi('/slack/createChannel', 'POST', createChannelRequest); },
            deleteChannel: function (deleteChannelRequest) { return _this.invokeApi('/slack/deleteChannel', 'POST', deleteChannelRequest); },
            oAuthAccess: function (oAuthAccessRequest) { return _this.invokeApi('/slack/oauthAccess', 'POST', oAuthAccessRequest); }
        };
        _this._settingsApi = {
            getSettings: function () { return _this.invokeApi('/companyIntegrationSettings', 'GET'); },
            postSettings: function (slackConfiguration) { return _this.invokeApi('/companyIntegrationSettings', 'POST', slackConfiguration); },
            deleteSettings: function () { return _this.invokeApi('/companyIntegrationSettings', 'DELETE'); }
        };
        return _this;
    }
    Object.defineProperty(SlackIntegrationService.prototype, "slack", {
        get: function () {
            return this._slackApi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlackIntegrationService.prototype, "settings", {
        get: function () {
            return this._settingsApi;
        },
        enumerable: true,
        configurable: true
    });
    return SlackIntegrationService;
}(APIClient));
export { SlackIntegrationService };
export default new SlackIntegrationService();
//# sourceMappingURL=SlackIntegrationService.js.map