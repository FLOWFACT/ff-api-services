"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var ModuleService = /** @class */ (function (_super) {
    tslib_1.__extends(ModuleService, _super);
    function ModuleService() {
        return _super.call(this, http_1.APIMapping.moduleService) || this;
    }
    /**
     * Get all active modules for the current company
     * @returns {Promise<AxiosResponse>}
     */
    ModuleService.prototype.fetchActiveModules = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/modules', 'GET', undefined, {
                            queryParams: {
                                active: 'true'
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get all modules for the current company
     * @returns {Promise<AxiosResponse>}
     */
    ModuleService.prototype.fetchAllModules = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/modules', 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get a module by his name
     * @param {string} moduleName
     * @returns {Promise<AxiosResponse>}
     */
    ModuleService.prototype.fetchModule = function (moduleName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/modules/" + moduleName, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Activate a new or a an deactivated module for the current company
     * @param {string} moduleName
     * @returns {Promise<AxiosResponse>}
     */
    ModuleService.prototype.activateModule = function (moduleName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/modules/activateModule/" + moduleName, 'POST')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deactivates a new or an activate module for the current company
     * @param {string} moduleName
     * @returns {Promise<AxiosResponse>}
     */
    ModuleService.prototype.deactivateModule = function (moduleName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/modules/deactivateModule/" + moduleName, 'POST')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ModuleService;
}(http_1.APIClient));
exports.ModuleService = ModuleService;
exports.default = new ModuleService();
//# sourceMappingURL=ModuleService.js.map