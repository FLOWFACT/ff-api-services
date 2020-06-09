import * as tslib_1 from "tslib";
import APIClient from '../http/APIClient';
import APIMapping from '../http/APIMapping';
var GDPRService = /** @class */ (function (_super) {
    tslib_1.__extends(GDPRService, _super);
    function GDPRService() {
        return _super.call(this, APIMapping.gdprService) || this;
    }
    /**
     * TODO: Please comment this method
     * @param token
     */
    GDPRService.prototype.fetchConsentData = function (token) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/public/consents/consentdata', 'GET', undefined, {
                            queryParams: {
                                token: token,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param userId
     * @param companyId
     */
    GDPRService.prototype.fetchCompanyTerms = function (userId, companyId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/public/company', 'GET', undefined, {
                            queryParams: {
                                userId: userId,
                                companyId: companyId,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param contactId
     * @param userId
     * @param companyId
     */
    GDPRService.prototype.fetchConsents = function (contactId, userId, companyId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/public/consents', 'GET', undefined, {
                            queryParams: {
                                contactId: contactId,
                                userId: userId,
                                companyId: companyId,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param userId
     * @param companyId
     * @param body
     */
    GDPRService.prototype.exportPersonalData = function (userId, companyId, body) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/public/export', 'POST', body, {
                            queryParams: {
                                userId: userId,
                                companyId: companyId,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param companyId
     * @param userId
     * @param body
     */
    GDPRService.prototype.resolveEntities = function (companyId, userId, body) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/public/resolveEntities', 'POST', body, {
                            queryParams: {
                                userId: userId,
                                companyId: companyId,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param contactId
     * @param userId
     * @param companyId
     * @param type
     * @param changes
     */
    GDPRService.prototype.changeData = function (contactId, userId, companyId, type, changes) {
        if (type === void 0) { type = 'CHANGE'; }
        if (changes === void 0) { changes = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/public/changeRequests', 'POST', {
                            contactId: contactId,
                            type: type,
                            changes: changes,
                        }, {
                            queryParams: {
                                userId: userId,
                                companyId: companyId,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param contactId
     * @param userId
     * @param companyId
     */
    GDPRService.prototype.fetchChangeRequestStatus = function (contactId, userId, companyId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/public/changeRequests/status', 'GET', undefined, {
                            queryParams: {
                                contactId: contactId,
                                userId: userId,
                                companyId: companyId,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param changeRequestId
     * @param status
     * @param reason
     */
    GDPRService.prototype.updateChangeRequestStatus = function (changeRequestId, status, reason) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var formData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = new FormData();
                        formData.append('reason', reason);
                        return [4 /*yield*/, this.invokeApi("/changeRequests/" + changeRequestId + "/status/" + status, 'POST', formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                },
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param consentId
     * @param consentSchemaId
     * @param userId
     * @param companyId
     */
    GDPRService.prototype.revokeConsent = function (consentId, consentSchemaId, userId, companyId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/public/consents/schemaId/" + consentSchemaId + "/entityId/" + consentId + "/revoke", 'POST', undefined, {
                            queryParams: {
                                userId: userId,
                                companyId: companyId,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param consentEntity
     * @param userId
     * @param companyId
     */
    GDPRService.prototype.createConsent = function (consentEntity, userId, companyId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/public/consents', 'POST', consentEntity, {
                            queryParams: {
                                userId: userId,
                                companyId: companyId,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param consentEntity
     */
    GDPRService.prototype.addConsent = function (consentEntity) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/consents', 'POST', consentEntity)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param contactIds
     */
    GDPRService.prototype.fetchConsentForContacts = function (contactIds) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/consents/forContacts', 'POST', contactIds)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     */
    GDPRService.prototype.fetchSettings = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/settings', 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param settings
     */
    GDPRService.prototype.updateSettings = function (settings) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/settings', 'PUT', settings)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     */
    GDPRService.prototype.fetchAllChangeRequests = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/changeRequests/all', 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param page
     * @param size
     */
    GDPRService.prototype.fetchContactsWithPendingConsent = function (page, size) {
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 50; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/contacts', 'GET', undefined, {
                            queryParams: {
                                status: 'CONSENT_PENDING',
                                page: page,
                                size: size,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param contactId
     */
    GDPRService.prototype.isContactBlocked = function (contactId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/contact/blocked', 'GET', undefined, {
                            queryParams: {
                                contactId: contactId,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param contactId
     */
    GDPRService.prototype.consentStatus = function (contactId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/consents/status', 'GET', undefined, {
                            queryParams: {
                                contactId: contactId,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param contactId
     * @param block
     */
    GDPRService.prototype.blockContact = function (contactId, block) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/contact/block', 'POST', undefined, {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            queryParams: {
                                block: block,
                                contactId: contactId,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param contactId
     */
    GDPRService.prototype.sendConsentMail = function (contactId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/consents/mail/" + contactId, 'POST')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param contactId
     */
    GDPRService.prototype.sendCheckContactDetailsMail = function (contactId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/contacts/mail/" + contactId, 'POST')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param contactId
     * @param companyId
     * @param userId
     */
    GDPRService.prototype.sendNewConsentMail = function (contactId, companyId, userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/public/consents/mail', 'POST', undefined, {
                            queryParams: {
                                companyId: companyId,
                                contactId: contactId,
                                userId: userId,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param consentId
     */
    GDPRService.prototype.fetchConsentAuthor = function (consentId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/consents/" + consentId + "/author", 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return GDPRService;
}(APIClient));
export { GDPRService };
export default new GDPRService();
//# sourceMappingURL=GDPRService.js.map