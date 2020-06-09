"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var TemplateService = /** @class */ (function (_super) {
    tslib_1.__extends(TemplateService, _super);
    function TemplateService() {
        return _super.call(this, http_1.APIMapping.templateService) || this;
    }
    /**
     * TODO: Please comment this method
     */
    TemplateService.prototype.fetchAllTemplates = function () {
        return this.invokeApi('/templates', 'GET').then(function (s) { return s.data; }).then(function (s) { return s ? s : []; });
    };
    /**
     * TODO: Please comment this method
     * @param type
     */
    TemplateService.prototype.fetchTemplatesByType = function (type) {
        return this.invokeApi("/templates?templateType=" + type, 'GET').then(function (s) { return s.data; }).then(function (s) { return s ? s : []; });
    };
    TemplateService.prototype.fetchFullTemplatesByType = function (type) {
        return this.invokeApi("/templates?full=true&templateType=" + type, 'GET').then(function (s) { return s.data; }).then(function (s) { return s ? s : []; });
    };
    /**
     * TODO: Please comment this method
     * @param body
     */
    TemplateService.prototype.createTemplate = function (body) {
        return this.invokeApi('/templates', 'POST', body).then(function (s) { return s.data; });
    };
    /**
     * TODO: Please comment this method
     * @param id
     * @param file
     */
    TemplateService.prototype.uploadContent = function (id, file) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        return this.invokeApi("/templates/" + id + "/content", 'POST', formData);
    };
    /**
     * TODO: Please comment this method
     * @param templateId
     * @param file
     */
    TemplateService.prototype.uploadAttachment = function (templateId, file) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        return this.invokeApi("/templates/" + templateId + "/attachments", 'POST', formData);
    };
    /**
     * TODO: Please comment this method
     * @param templateId
     * @param attachmentId
     */
    TemplateService.prototype.removeAttachment = function (templateId, attachmentId) {
        return this.invokeApi("/templates/" + templateId + "/attachments/delete", 'POST', attachmentId);
    };
    /**
     * TODO: Please comment this method
     * @param id
     */
    TemplateService.prototype.fetchTemplateById = function (id) {
        return this.invokeApi("/templates/" + id, 'GET').then(function (s) { return s.data; });
    };
    /**
     * TODO: Please comment this method
     * @param id
     * @param withResponse
     */
    TemplateService.prototype.delete = function (id, withResponse) {
        if (!withResponse) {
            withResponse = false;
        }
        return this.invokeApi("/templates/" + id, 'DELETE').then(function (response) { return withResponse ? response : response.data; });
    };
    TemplateService.prototype.fetchPlaceholderPrefixesById = function (id) {
        return this.invokeApi("/templates/getPlaceholderPrefixes/" + id, 'GET').then(function (response) { return response.data; });
    };
    TemplateService.prototype.fillTemplate = function (requestBody) {
        return this.invokeApi('/templates/fillTemplate', 'POST', requestBody).then(function (response) { return response.data; });
    };
    /**
     * TODO: Please comment this method
     * @param body
     * @param id
     */
    TemplateService.prototype.updateTemplate = function (body, id) {
        return this.invokeApi("/templates/" + id, 'PUT', body).then(function (s) { return s.data; });
    };
    return TemplateService;
}(http_1.APIClient));
exports.TemplateService = TemplateService;
exports.default = new TemplateService();
//# sourceMappingURL=TemplateService.js.map