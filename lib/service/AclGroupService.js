"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var graphql_tag_1 = require("graphql-tag");
exports.GROUP_MANAGEMENT_FRAGMENT = graphql_tag_1.default(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    fragment AclGroupManagement on AclGroup {\n        id\n        groupType\n        captions\n        settings {\n            read\n            write\n            delete\n            affectingAllEntities\n            entityAffectionSchemas\n        }\n        ... on RegularAclGroup {\n            users {\n                id\n            }\n        }\n        ... on CompanyPoolingAclGroup {\n            companies {\n                id\n                name\n                logoUrl\n            }\n            linkCode {\n                code\n                ownerId\n            }\n        }\n    }\n"], ["\n    fragment AclGroupManagement on AclGroup {\n        id\n        groupType\n        captions\n        settings {\n            read\n            write\n            delete\n            affectingAllEntities\n            entityAffectionSchemas\n        }\n        ... on RegularAclGroup {\n            users {\n                id\n            }\n        }\n        ... on CompanyPoolingAclGroup {\n            companies {\n                id\n                name\n                logoUrl\n            }\n            linkCode {\n                code\n                ownerId\n            }\n        }\n    }\n"])));
var AclGroupService = /** @class */ (function (_super) {
    tslib_1.__extends(AclGroupService, _super);
    function AclGroupService() {
        return _super.call(this, http_1.APIMapping.aclGroupService) || this;
    }
    AclGroupService.prototype.fetchAclGroupsWithAccessBy = function (companyId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/internal/acl-groups/by-member-id/" + companyId + "/owner-ids", 'GET')];
            });
        });
    };
    AclGroupService.prototype.fetchAllGroups = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeGqlQuery(graphql_tag_1.default(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n            query AclGroupsFetchAll {\n                aclGroups {\n                    ...AclGroupManagement\n                }\n            }\n            ", "\n        "], ["\n            query AclGroupsFetchAll {\n                aclGroups {\n                    ...AclGroupManagement\n                }\n            }\n            ", "\n        "])), exports.GROUP_MANAGEMENT_FRAGMENT))];
            });
        });
    };
    AclGroupService.prototype.createGroup = function (group) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeGqlMutation(graphql_tag_1.default(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n                mutation AclGroupCreate($group: AclGroupInput) {\n                    createAclGroup(group: $group) {\n                        ...AclGroupManagement\n                    }\n                }\n                ", "\n            "], ["\n                mutation AclGroupCreate($group: AclGroupInput) {\n                    createAclGroup(group: $group) {\n                        ...AclGroupManagement\n                    }\n                }\n                ", "\n            "])), exports.GROUP_MANAGEMENT_FRAGMENT), { group: group })];
            });
        });
    };
    AclGroupService.prototype.updateGroup = function (group) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeGqlMutation(graphql_tag_1.default(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n                mutation AclGroupUpdate($group: AclGroupInput) {\n                    updateAclGroup(group: $group) {\n                        ...AclGroupManagement\n                    }\n                }\n                ", "\n            "], ["\n                mutation AclGroupUpdate($group: AclGroupInput) {\n                    updateAclGroup(group: $group) {\n                        ...AclGroupManagement\n                    }\n                }\n                ", "\n            "])), exports.GROUP_MANAGEMENT_FRAGMENT), { group: group })];
            });
        });
    };
    AclGroupService.prototype.removeGroup = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeGqlMutation(graphql_tag_1.default(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n                mutation AclGroupRemove($id: ID!) {\n                    deleteAclGroup(id: $id)\n                }\n            "], ["\n                mutation AclGroupRemove($id: ID!) {\n                    deleteAclGroup(id: $id)\n                }\n            "]))), { id: id })];
            });
        });
    };
    AclGroupService.prototype.fetchAllCooperations = function (type) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeGqlQuery(graphql_tag_1.default(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n                query CooperationsFetchAll($type: LinkCodeQueryType) {\n                    linkCodes(type: $type) {\n                        code\n                        owner {\n                            id\n                            name\n                            logoUrl\n                        }\n                    }\n                }\n            "], ["\n                query CooperationsFetchAll($type: LinkCodeQueryType) {\n                    linkCodes(type: $type) {\n                        code\n                        owner {\n                            id\n                            name\n                            logoUrl\n                        }\n                    }\n                }\n            "]))), { type: type })];
            });
        });
    };
    AclGroupService.prototype.fetchCooperation = function (code) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeGqlQuery(graphql_tag_1.default(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n                query CooperationFetch($code: String!) {\n                    linkCode(code: $code) {\n                        code\n                        owner {\n                            id\n                            name\n                            logoUrl\n                        }\n                    }\n                }\n            "], ["\n                query CooperationFetch($code: String!) {\n                    linkCode(code: $code) {\n                        code\n                        owner {\n                            id\n                            name\n                            logoUrl\n                        }\n                    }\n                }\n            "]))), { code: code })];
            });
        });
    };
    AclGroupService.prototype.joinCooperation = function (code) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeGqlMutation(graphql_tag_1.default(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n                mutation CooperationJoin($code: String!) {\n                    joinCooperation(code: $code) {\n                        code\n                        owner {\n                            id\n                            name\n                            logoUrl\n                        }\n                    }\n                }\n            "], ["\n                mutation CooperationJoin($code: String!) {\n                    joinCooperation(code: $code) {\n                        code\n                        owner {\n                            id\n                            name\n                            logoUrl\n                        }\n                    }\n                }\n            "]))), { code: code })];
            });
        });
    };
    AclGroupService.prototype.leaveCooperation = function (code) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeGqlMutation(graphql_tag_1.default(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n                mutation CooperationLeave($code: String!) {\n                    leaveCooperation(code: $code)\n                }\n            "], ["\n                mutation CooperationLeave($code: String!) {\n                    leaveCooperation(code: $code)\n                }\n            "]))), { code: code })];
            });
        });
    };
    AclGroupService.prototype.removeCooperation = function (code) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeGqlMutation(graphql_tag_1.default(templateObject_10 || (templateObject_10 = tslib_1.__makeTemplateObject(["\n                mutation CooperationDelete($code: String!) {\n                    deleteCooperation(code: $code)\n                }\n            "], ["\n                mutation CooperationDelete($code: String!) {\n                    deleteCooperation(code: $code)\n                }\n            "]))), { code: code })];
            });
        });
    };
    return AclGroupService;
}(http_1.APIClient));
exports.AclGroupService = AclGroupService;
exports.default = new AclGroupService();
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=AclGroupService.js.map