"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var ContactService = /** @class */ (function (_super) {
    tslib_1.__extends(ContactService, _super);
    function ContactService() {
        return _super.call(this, http_1.APIMapping.contactService) || this;
    }
    /**
     * Retrieves a contact
     * @param email
     * @param firstName
     * @param lastName
     */
    ContactService.prototype.fetchContact = function (email, firstName, lastName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/contact', 'GET', undefined, {
                        queryParams: { email: email, firstName: firstName, lastName: lastName },
                    })];
            });
        });
    };
    /**
     * Creates a contact
     * @param {Contact} contact
     */
    ContactService.prototype.createContact = function (contact) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/contact', 'POST', contact)];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param contact
     * @param schemaId
     */
    ContactService.prototype.createContactInSpecificSchema = function (contact, schemaId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/contact/schema/" + schemaId, 'POST', contact)];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param {Contact} contact
     */
    ContactService.prototype.updateContact = function (contact) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/contact', 'PUT', contact)];
            });
        });
    };
    /**
     * Updates a contact using it's id
     * @param id - The id of the contact that needs to be updated
     * @param {Contact} contact
     */
    ContactService.prototype.updateContactById = function (id, contact) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/contact/" + id, 'PUT', contact)];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param contact
     * @param id
     * @param schemaId
     */
    ContactService.prototype.updateContactByIdInSpecificSchema = function (contact, id, schemaId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/contact/schema/" + schemaId + "/" + id, 'POST', contact)];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param email
     * @param firstName
     * @param lastName
     */
    ContactService.prototype.fetchContactGroup = function (email, firstName, lastName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/contact', 'GET', undefined, {
                        queryParams: { email: email, firstName: firstName, lastName: lastName },
                    })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param id
     */
    ContactService.prototype.fetchContactById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/contact/" + id, 'GET')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param id
     * @param schemaId
     */
    ContactService.prototype.fetchContactByIdInSpecificSchema = function (id, schemaId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/contact/schema/" + schemaId + "/" + id, 'GET')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param id
     */
    ContactService.prototype.deleteContactById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/contact/" + id, 'DELETE')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param id
     * @param schemaId
     */
    ContactService.prototype.deleteContactByIdInSpecificSchema = function (id, schemaId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/contact/schema/" + schemaId + "/" + id, 'DELETE')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param flowDsl
     * @param maxContacts
     */
    ContactService.prototype.searchForContactsWithCustomSearch = function (flowDsl, maxContacts) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/contact/customSearch', 'POST', flowDsl, { queryParams: { maxContacts: maxContacts } })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param flowDsl
     * @param schemaId
     * @param maxContacts
     */
    ContactService.prototype.searchForContactsInSpecificShemaWithCustomSearch = function (flowDsl, schemaId, maxContacts) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/contact/schema/" + schemaId + "/customSearch", 'POST', flowDsl, { queryParams: { maxContacts: maxContacts } })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param pastedAddress
     */
    ContactService.prototype.parsePastedAddress = function (pastedAddress) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/parse', 'POST', pastedAddress, { headers: { 'Content-Type': 'text/plain' } })];
            });
        });
    };
    return ContactService;
}(http_1.APIClient));
exports.ContactService = ContactService;
exports.default = new ContactService();
//# sourceMappingURL=ContactService.js.map