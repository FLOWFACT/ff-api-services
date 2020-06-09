import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var InquiryService = /** @class */ (function (_super) {
    tslib_1.__extends(InquiryService, _super);
    function InquiryService() {
        return _super.call(this, APIMapping.inquiryService) || this;
    }
    /**
     * Fetches all inquiries with pagination support
     * @param {number} page - Number of times the result will be offset by given size.
     * @param {number} size - Number of entities to fetch.
     */
    InquiryService.prototype.fetchAll = function (page, size) {
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 100; }
        return this.invokeApi("/inquiry?page=" + page + "&size=" + size, 'GET');
    };
    /**
     * Fetches all inquiries with pagination support
     * @param {Flowdsl} flowDsl - Search what you like.
     * @param {number} page - Number of times the result will be offset by given size.
     * @param {number} size - Number of entities to fetch.
     */
    InquiryService.prototype.fetchWithFlowDsl = function (flowDsl, page, size) {
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = 100; }
        return this.invokeApi("/inquiry?page=" + page + "&size=" + size, 'POST', flowDsl);
    };
    /**
     * Use this method to link an estate with given ID to an inquiry with given ID, that has no estate linked yet.
     * @param {string} inquiryId - ID of the inquiry that will be updated.
     * @param {string} estateId - ID of the estate that will be linked to the inquiry.
     * @returns the updated inquiry
     */
    InquiryService.prototype.linkEstateAndStartAutomation = function (inquiryId, estateId) {
        return this.invokeApi("/inquiry/" + inquiryId + "/setEstate/" + estateId, 'POST');
    };
    InquiryService.prototype.isInquiryAutomationActive = function (companyId) {
        return this.invokeApi("/inquiry/automation/" + companyId, 'GET');
    };
    InquiryService.prototype.toggleAutomation = function (companyId) {
        return this.invokeApi("/inquiry/automation/" + companyId, 'POST');
    };
    return InquiryService;
}(APIClient));
export { InquiryService };
export default new InquiryService();
//# sourceMappingURL=InquiryService.js.map