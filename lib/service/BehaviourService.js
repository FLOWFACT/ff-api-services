"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var APIClient_1 = require("../http/APIClient");
var http_1 = require("../http");
var BehaviourService = /** @class */ (function (_super) {
    tslib_1.__extends(BehaviourService, _super);
    function BehaviourService() {
        var _this = _super.call(this, http_1.APIMapping.behaviourService) || this;
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
}(APIClient_1.default));
exports.BehaviourService = BehaviourService;
exports.default = new BehaviourService();
//# sourceMappingURL=BehaviourService.js.map