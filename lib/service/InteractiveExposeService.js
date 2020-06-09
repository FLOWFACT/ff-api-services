"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var InteractiveExposeService = /** @class */ (function (_super) {
    tslib_1.__extends(InteractiveExposeService, _super);
    function InteractiveExposeService() {
        return _super.call(this, http_1.APIMapping.interactiveExposeService) || this;
    }
    InteractiveExposeService.prototype.getSettings = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/settings', 'GET')];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    InteractiveExposeService.prototype.changeSettings = function (settings) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/settings', 'POST', settings)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    InteractiveExposeService.prototype.getPreviewUrl = function (entityId, templateName, attachDocuments, creatorId, showFinanceCalculator) {
        if (templateName === void 0) { templateName = 'standard'; }
        if (attachDocuments === void 0) { attachDocuments = false; }
        if (showFinanceCalculator === void 0) { showFinanceCalculator = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/preview', 'POST', {
                            entityId: entityId,
                            templateName: templateName,
                            attachDocuments: attachDocuments,
                            showFinanceCalculator: showFinanceCalculator,
                            creatorId: creatorId,
                        })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    InteractiveExposeService.prototype.sendInteractiveExpose = function (model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/interactiveExposes', 'POST', model)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InteractiveExposeService.prototype.changeLogo = function (type, image) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var formData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = new FormData();
                        formData.append('logo', image);
                        return [4 /*yield*/, this.invokeApi("/settings/logos/" + type, 'POST', formData, {
                                headers: { 'Content-Type': 'multipart/form-data' }
                            })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    InteractiveExposeService.prototype.deleteLogo = function (type) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/settings/logos/" + type, 'DELETE')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get all interactive expose templates.
     * Add a role parameter to filter the templates by the roles.
     */
    InteractiveExposeService.prototype.getTemplates = function (role) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (role) {
                    return [2 /*return*/, this.invokeApi('/templates', 'GET', {}, {
                            queryParams: {
                                role: role
                            }
                        })];
                }
                return [2 /*return*/, this.invokeApi('/templates', 'GET')];
            });
        });
    };
    /**
     * Check requirements of the interactive exposé and if necessary solve them
     */
    InteractiveExposeService.prototype.checkRequirements = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/interactiveExposes/checkRequirements", 'GET')];
            });
        });
    };
    /**
     * Get a template by its id.
     */
    InteractiveExposeService.prototype.getTemplateById = function (templateId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/templates/" + templateId, 'GET')];
            });
        });
    };
    /**
     * Gets all existing design Templates of a company
     */
    InteractiveExposeService.prototype.fetchDesignTemplates = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/interactiveExposes/templates/assignments', 'GET')];
            });
        });
    };
    /**
     * Returns all design templates for the company the user is logged in for of the specified type.
     */
    InteractiveExposeService.prototype.fetchDesignTemplatesOfType = function (type) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/interactiveExposes/templates/assignments/?type=' + type, 'GET')];
            });
        });
    };
    InteractiveExposeService.prototype.updateDesignTemplates = function (designTemplates) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/interactiveExposes/templates/assignments', 'POST', designTemplates, {
                        headers: { 'Content-Type': 'application/json' }
                    })];
            });
        });
    };
    InteractiveExposeService.prototype.deleteDesignTemplates = function (designTemplates) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/interactiveExposes/templates/assignments', 'DELETE', designTemplates, {
                        headers: { 'Content-Type': 'application/json' }
                    })];
            });
        });
    };
    /**
     * Create a new interactive expose template.
     * @param template
     * @param fillDefaultContent
     *      true if the content of the template have to be filled with default content
     */
    InteractiveExposeService.prototype.createTemplate = function (template, fillDefaultContent) {
        if (fillDefaultContent === void 0) { fillDefaultContent = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var queryParams;
            return tslib_1.__generator(this, function (_a) {
                queryParams = {
                    queryParams: {
                        fillDefaultContent: String(fillDefaultContent)
                    }
                };
                return [2 /*return*/, this.invokeApi('/templates', 'POST', template, queryParams)];
            });
        });
    };
    InteractiveExposeService.prototype.createInteractiveExposeTemplate = function (templateName, body) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/interactiveExposes/templates/' + templateName, 'POST', body, {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    })];
            });
        });
    };
    InteractiveExposeService.prototype.uploadInteractiveExposeTemplateFiles = function (templateName, body) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/interactiveExposes/templates/' + templateName, 'PUT', body, {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    })];
            });
        });
    };
    InteractiveExposeService.prototype.deleteInteractiveExposeTemplate = function (templateName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/interactiveExposes/templates/' + templateName, 'DELETE')];
            });
        });
    };
    InteractiveExposeService.prototype.fetchInteractiveExposeTemplateFiles = function (templateName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/public/interactiveExposes/templates/' + templateName, 'GET')];
            });
        });
    };
    InteractiveExposeService.prototype.fetchInteractiveExposeTemplateFilesByFileType = function (templateName, fileType) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/public/interactiveExposes/templates/" + templateName + "/fileType/" + fileType, 'GET')];
            });
        });
    };
    InteractiveExposeService.prototype.fetchInteractiveExposeTemplateFileData = function (templateName, fileType, body) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/public/interactiveExposes/templates/" + templateName + "/fileType/" + fileType + "/content", 'POST', body, {
                        headers: { 'Content-Type': 'application/json' }
                    })];
            });
        });
    };
    /**
     * Update a interactive expose template by his id.
     */
    InteractiveExposeService.prototype.updateTemplate = function (templateId, template) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/templates/" + templateId, 'PUT', template)];
            });
        });
    };
    /**
     * Delete a interactive expose template on the server.
     */
    InteractiveExposeService.prototype.deleteTemplate = function (templateId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/templates/" + templateId, 'DELETE')];
            });
        });
    };
    /**
     * Add a domain to the company.
     */
    InteractiveExposeService.prototype.addDomain = function (domain) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/domain', 'POST', '', { queryParams: { domain: domain } })];
            });
        });
    };
    /**
     * Uninitialize the company domain.
     */
    InteractiveExposeService.prototype.startDomainTeardown = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/domain/startTeardown', 'POST')];
            });
        });
    };
    /**
     * Perform the setup steps for the domain.
     */
    InteractiveExposeService.prototype.setupDomain = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/domain/setup', 'POST')];
            });
        });
    };
    /**
     * Get interactive expose mapping. Default mapping is just named so, cause of convienience
     */
    InteractiveExposeService.prototype.getMappingOrDefault = function (schemaId) {
        if (schemaId === void 0) { schemaId = 'defaultMapping'; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/mapping/" + schemaId, 'GET')];
            });
        });
    };
    /**
     * Get interactive expose mapping. Default mapping is just named so, cause of convienience
     */
    InteractiveExposeService.prototype.getAllMappings = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/mapping/all', 'GET')];
            });
        });
    };
    /**
     * Update interactive expose mapping
     */
    InteractiveExposeService.prototype.updateMapping = function (mapping) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/mapping', 'PUT', mapping)];
            });
        });
    };
    /**
     * Put restored example legislation texts into the company scoped default mapping
     */
    InteractiveExposeService.prototype.restoreDefaults = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/mapping/restoreDefaults', 'PUT', undefined, {
                        headers: { 'Content-Type': 'application/json' }
                    })];
            });
        });
    };
    /**
     * Sets the last activity time of the user session
     */
    InteractiveExposeService.prototype.keepAlive = function (token, userSessionId) {
        return this.invokeApi('/public/interactiveExposes/keepAlive', 'GET', {}, {
            queryParams: {
                token: token,
                userSessionId: userSessionId
            }
        });
    };
    return InteractiveExposeService;
}(http_1.APIClient));
exports.InteractiveExposeService = InteractiveExposeService;
exports.default = new InteractiveExposeService();
//# sourceMappingURL=InteractiveExposeService.js.map