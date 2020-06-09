import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var PortalManagementService = /** @class */ (function (_super) {
    tslib_1.__extends(PortalManagementService, _super);
    function PortalManagementService() {
        return _super.call(this, APIMapping.portalManagementService) || this;
    }
    /**
     *
     * @param ignoreInactivePortals
     */
    PortalManagementService.prototype.fetchPortals = function (ignoreInactivePortals) {
        if (ignoreInactivePortals === void 0) { ignoreInactivePortals = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/portals', 'GET', undefined, {
                            queryParams: {
                                ignoreInactivePortals: ignoreInactivePortals,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param portalId
     */
    PortalManagementService.prototype.fetchPortal = function (portalId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/portals/" + portalId, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     */
    PortalManagementService.prototype.fetchPredefinedPortals = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/predefinedPortals', 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     */
    PortalManagementService.prototype.fetchPortalTypes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/portalTypes', 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param entityId
     */
    PortalManagementService.prototype.fetchPublishedOn = function (entityId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/estates/" + entityId + "/portals", 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param portalType
     * @param portal
     */
    PortalManagementService.prototype.createPortal = function (portalType, portal) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/portals/create/" + portalType, 'POST', portal, {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param portalId
     * @param portal
     */
    PortalManagementService.prototype.updatePortal = function (portalId, portal) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/portals/" + portalId, 'PATCH', portal)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param portalId
     */
    PortalManagementService.prototype.deletePortal = function (portalId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/portals/" + portalId, 'DELETE')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param portalId
     */
    PortalManagementService.prototype.forceDeletePortal = function (portalId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/portals/" + portalId + "/force", 'DELETE')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param portalId
     * @param portalAuthenticationModel
     */
    PortalManagementService.prototype.authenticatePortal = function (portalId, portalAuthenticationModel) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/portals/" + portalId + "/authenticate", 'POST', portalAuthenticationModel)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param publishRequest
     */
    PortalManagementService.prototype.publishEstates = function (publishRequest) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/publish', 'POST', publishRequest)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param portalId
     * @param estateId
     * @param portalEstateSettings
     */
    PortalManagementService.prototype.updatePortalEstateSettings = function (portalId, estateId, portalEstateSettings) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/portals/" + portalId + "/estates/" + estateId, 'POST', portalEstateSettings)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param estateId
     */
    PortalManagementService.prototype.fetchPortalEstateSettings = function (estateId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/portals/estates/" + estateId, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Fetches the information on which portal a estate is published on.
     * @param estateId
     */
    PortalManagementService.prototype.fetchPublishInformation = function (estateId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/estates/" + estateId + "/portals", 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Fetches app published estates for special portal
     * @param portalId
     */
    PortalManagementService.prototype.fetchPortalEstates = function (portalId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/portals/" + portalId + "/estates", 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param portalId
     * @param verifier
     * @param token
     * @param state
     */
    PortalManagementService.prototype.is24AuthenticationCallback = function (portalId, verifier, token, state) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/portals/is24/authenticate/" + portalId + "/callback", 'GET', undefined, {
                            queryParams: {
                                oauth_verifier: verifier,
                                oauth_token: token,
                                state: state,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param portalId
     */
    PortalManagementService.prototype.checkAuthentication = function (portalId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/portals/" + portalId + "/checkAuthentication", 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return PortalManagementService;
}(APIClient));
export { PortalManagementService };
export default new PortalManagementService();
//# sourceMappingURL=PortalManagementService.js.map