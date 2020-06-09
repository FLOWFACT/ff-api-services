"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Interceptor = /** @class */ (function () {
    function Interceptor() {
        this._interceptors = [];
    }
    Object.defineProperty(Interceptor.prototype, "interceptors", {
        get: function () {
            return this._interceptors;
        },
        enumerable: true,
        configurable: true
    });
    Interceptor.prototype.addRequestInterceptor = function (interceptorMethod) {
        this._interceptors.push({
            type: 'request',
            method: interceptorMethod
        });
    };
    Interceptor.prototype.addResponseInterceptor = function (interceptorMethod) {
        this._interceptors.push({
            type: 'response',
            method: interceptorMethod
        });
    };
    return Interceptor;
}());
exports.Interceptor = Interceptor;
exports.default = new Interceptor();
//# sourceMappingURL=Interceptor.js.map