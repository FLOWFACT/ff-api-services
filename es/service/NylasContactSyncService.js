import * as tslib_1 from "tslib";
import APIClient from '../http/APIClient';
import APIMapping from '../http/APIMapping';
var NylasContactSyncService = /** @class */ (function (_super) {
    tslib_1.__extends(NylasContactSyncService, _super);
    function NylasContactSyncService() {
        var _this = _super.call(this, APIMapping.nylasContactSyncService) || this;
        /**
         * Retrieves all syncEntries for the given contactId
         * @param {string} contactId - The id of the contact you want to retrieve the syncEntries for
         * @param {number} page - The page you need to set to paginate (default: 1)
         * @param {number} size - The amount of results per page (default: 25)
         * @return {NylasContactSyncEntry[]}
         */
        _this.fetchByContactId = function (contactId, page, size) {
            if (page === void 0) { page = 1; }
            if (size === void 0) { size = 25; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.invokeApi("/syncEntries", 'GET', undefined, { params: { contactId: contactId, page: page, size: size } })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Retrieves the syncEntry with the given id
         * @param {string} syncEntryId - The id of a syncEntry
         * @return {NylasContactSyncEntry}
         */
        _this.fetchBySyncEntryId = function (syncEntryId) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/syncEntries/" + syncEntryId, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        /**
         * Creates a syncEntry
         * @param {NylasContactSyncEntryPostModel} syncEntry - The syncEntry you want to create
         * @return {NylasContactSyncEntry}
         */
        _this.createSyncEntry = function (syncEntry) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/syncEntries", 'POST', syncEntry)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        /**
         * Delete a syncEntry by it's id
         * @param {string} syncEntryId - The id of a syncEntry
         */
        _this.deleteSyncEntryById = function (syncEntryId) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/syncEntries/" + syncEntryId, 'DELETE')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        return _this;
    }
    return NylasContactSyncService;
}(APIClient));
export { NylasContactSyncService };
export default new NylasContactSyncService();
//# sourceMappingURL=NylasContactSyncService.js.map