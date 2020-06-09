"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var AclGroupServiceRest = /** @class */ (function (_super) {
    tslib_1.__extends(AclGroupServiceRest, _super);
    function AclGroupServiceRest() {
        return _super.call(this, http_1.APIMapping.aclGroupService) || this;
    }
    /**
     * This method fetches a group. If a groupType is provided, only groups with this type will be returned
     * @param groupType
     */
    AclGroupServiceRest.prototype.fetchGroups = function (groupType) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/groups', 'GET', undefined, {
                        queryParams: {
                            groupType: groupType
                        }
                    })];
            });
        });
    };
    /**
     * Create a new acl group
     * @param group
     */
    AclGroupServiceRest.prototype.createGroup = function (group) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/groups', 'POST', group)];
            });
        });
    };
    /**
     * Updates a group by the id
     * @param group
     */
    AclGroupServiceRest.prototype.updateGroup = function (group) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/groups/" + group.id, 'PUT', group)];
            });
        });
    };
    /**
     * Deletes a group by the id
     * @param group
     */
    AclGroupServiceRest.prototype.deleteGroup = function (group) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/groups/" + group.id, 'DELETE', group)];
            });
        });
    };
    return AclGroupServiceRest;
}(http_1.APIClient));
exports.default = new AclGroupServiceRest();
//# sourceMappingURL=AclGroupServiceRest.js.map