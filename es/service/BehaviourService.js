import * as tslib_1 from "tslib";
import APIClient from '../http/APIClient';
import { APIMapping } from '../http';
var BehaviourService = /** @class */ (function (_super) {
    tslib_1.__extends(BehaviourService, _super);
    function BehaviourService() {
        var _this = _super.call(this, APIMapping.behaviourService) || this;
        _this.events = [];
        _this.postEvents = function () {
            if (_this.timeout || _this.events.length === 0) {
                return;
            }
            var eventBatch = _this.events;
            _this.events = [];
            _this.invokeApi('/events', 'POST', { events: eventBatch });
            _this.timeout = setTimeout(function () {
                _this.timeout = undefined;
                _this.postEvents();
            }, 5000);
        };
        return _this;
    }
    /**
     * Tracks usage of a feature
     * @param event
     */
    BehaviourService.prototype.track = function (event) {
        this.events.push(event);
        this.postEvents();
    };
    return BehaviourService;
}(APIClient));
export { BehaviourService };
export default new BehaviourService();
//# sourceMappingURL=BehaviourService.js.map