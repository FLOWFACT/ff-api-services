import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var CompanyService = /** @class */ (function (_super) {
    tslib_1.__extends(CompanyService, _super);
    function CompanyService() {
        return _super.call(this, APIMapping.companyService) || this;
    }
    /**
     * domain -> can also be an email
     * @param companyName
     * @param companyUrl
     * @param domain
     */
    CompanyService.prototype.createCompany = function (companyName, companyUrl, domain) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/company', 'POST', {
                        companyName: companyName,
                        companyUrl: companyUrl,
                        domain: domain,
                    })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param presets
     */
    CompanyService.prototype.usePreset = function (presets) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/company/usepreset', 'PUT', {
                        presets: presets,
                    })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param companyId
     */
    CompanyService.prototype.startTrial = function (companyId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/internal/company/" + companyId + "/startTrial", 'PUT')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param companyId
     */
    CompanyService.prototype.endTrial = function (companyId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/internal/company/" + companyId + "/endTrial", 'PUT')];
            });
        });
    };
    /**
     * Update a company
     * @param body
     */
    CompanyService.prototype.updateCompany = function (body) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/company', 'PUT', body)];
            });
        });
    };
    /**
     * Find a company by id and return it.
     * @param companyId
     */
    CompanyService.prototype.findCompany = function (companyId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/company/" + encodeURIComponent(companyId), 'GET')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param mailaddress
     */
    CompanyService.prototype.memberCountByEMailAddress = function (mailaddress) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/company/numberOfUsers', 'PUT', {
                        mailaddress: mailaddress,
                    })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param image
     */
    CompanyService.prototype.postImage = function (image) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var formData;
            return tslib_1.__generator(this, function (_a) {
                formData = new FormData();
                formData.append('logo', image);
                return [2 /*return*/, this.invokeApi('/company/logo', 'POST', formData, { headers: { 'Content-Type': 'multipart/form-data' } })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param terms
     */
    CompanyService.prototype.postTerms = function (terms) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var formData;
            return tslib_1.__generator(this, function (_a) {
                formData = new FormData();
                formData.append('terms-file', terms);
                return [2 /*return*/, this.invokeApi('/company/terms/upload', 'POST', formData, { headers: { 'Content-Type': 'multipart/form-data' } })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param fileName
     */
    CompanyService.prototype.removeTerms = function (fileName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var formData;
            return tslib_1.__generator(this, function (_a) {
                formData = new FormData();
                formData.append('file-name', fileName);
                return [2 /*return*/, this.invokeApi('/company/terms/remove', 'POST', formData)];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param currentName
     * @param newName
     */
    CompanyService.prototype.renameTerms = function (currentName, newName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var formData;
            return tslib_1.__generator(this, function (_a) {
                formData = new FormData();
                formData.append('current-name', currentName);
                formData.append('new-name', newName);
                return [2 /*return*/, this.invokeApi('/company/terms/rename', 'POST', formData)];
            });
        });
    };
    /**
     * Get all legislations texts from the company as JSON
     * @returns {Promise<AxiosResponse>}
     */
    CompanyService.prototype.fetchLegislationTexts = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/legislationTexts', 'GET')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param companyId
     */
    CompanyService.prototype.fetchLegislationTextsByCompanyId = function (companyId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/public/legislationTexts', 'GET', undefined, {
                        queryParams: {
                            companyId: companyId,
                        },
                    })];
            });
        });
    };
    /**
     * Updates one legislation text and if it does not exists, then it will create it
     * @param {LegislationText} legislationText
     * @returns {Promise<AxiosResponse>}
     */
    CompanyService.prototype.createOrUpdateLegislationText = function (legislationText) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/legislationTexts', 'PUT', legislationText)];
            });
        });
    };
    /**
     * Deletes one legislation text of the company
     * @param {string} id
     * @returns {Promise<AxiosResponse>}
     */
    CompanyService.prototype.deleteLegislationText = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/legislationTexts/" + id, 'DELETE')];
            });
        });
    };
    /**
     * Gets the currently valid consent text that the user must accept before we put our example legislation texts into his or her system.
     * Thats because we do not want to hold the text in the client, but in the service so the customer has no chance to modify it.
     */
    CompanyService.prototype.fetchCurrentlyValidConsentText = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/legislationTexts/consentText', 'GET')];
            });
        });
    };
    /**
     * Restore default legislation texts of the company.
     * Other texts then the ones from FLOWFACT will not be modified.
     */
    CompanyService.prototype.restoreDefaults = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/legislationTexts/restoreDefaults', 'PUT', undefined, {
                        headers: { 'Content-Type': 'application/json' },
                    })];
            });
        });
    };
    /**
     * Gets the details of a company group.
     */
    CompanyService.prototype.fetchGroup = function (name) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/internal/company/groups/" + name)];
            });
        });
    };
    /**
     * This ressource is used for setting the ownerClass of a company.
     * @param {string} companyId - The companyId of the company that should be updated
     * @param {OwnerClass} ownerClass - The OwnerClass that the company should get. Values: "INTERNAL/CUSTOMER/EXTERNAL_DEVELOPER"
     * @returns {Promise<AxiosResponse>}
     */
    CompanyService.prototype.setOwnerClassForCompany = function (companyId, ownerClass) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/company/" + companyId + "/ownerclass/" + ownerClass, 'PUT')];
            });
        });
    };
    return CompanyService;
}(APIClient));
export { CompanyService };
export default new CompanyService();
var StatusMapping = {
    create: {
        ALREADY_EXIST: 400,
        MANDANTORY_FIELD_NOT_FILLED: 422,
        INTERNAL_SERVER_ERROR: 500,
    },
    findByEmail: {
        NO_COMPANY_FOUND: 204,
        INTERNAL_SERVER_ERROR: 500,
    },
    findById: {
        ID_NOT_FOUND: 204,
        INTERNAL_SERVER_ERROR: 500,
    },
};
export { StatusMapping, };
//# sourceMappingURL=CompanyService.js.map