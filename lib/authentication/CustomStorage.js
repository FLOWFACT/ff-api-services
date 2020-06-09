"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store = require("store");
/**
 * This storage can be used from node and other javascript products.
 * Read more about the storage here: https://aws-amplify.github.io/docs/js/authentication#managing-security-tokens
 */
var CustomStorage = /** @class */ (function () {
    function CustomStorage() {
    }
    // set item with the key
    CustomStorage.setItem = function (key, value) {
        return store.set(key, value);
    };
    // get item with the key
    CustomStorage.getItem = function (key) {
        return store.get(key);
    };
    // remove item with the key
    CustomStorage.removeItem = function (key) {
        store.remove(key);
    };
    // clear out the storage
    CustomStorage.clear = function () {
        store.clear();
    };
    return CustomStorage;
}());
exports.default = CustomStorage;
//# sourceMappingURL=CustomStorage.js.map