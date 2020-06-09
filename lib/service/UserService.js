"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var v2Header = { headers: { 'x-ff-version': 2 } };
var UserService = /** @class */ (function (_super) {
    tslib_1.__extends(UserService, _super);
    function UserService() {
        return _super.call(this, http_1.APIMapping.userService) || this;
    }
    /**
     * Creates a user and adds it to either an existing company using the same domain, a new company during registration or the company of the current user.
     * @param companyID
     * @param mailAddress
     * @param firstName
     * @param lastName
     */
    UserService.prototype.createUser = function (companyID, mailAddress, firstName, lastName, useV2) {
        if (useV2 === void 0) { useV2 = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!useV2) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.invokeApi('/users', 'POST', {
                                firstname: firstName,
                                lastname: lastName,
                                businessMailAddress: mailAddress,
                                companyId: companyID,
                            }, v2Header)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.invokeApi('/users', 'POST', {
                            firstname: firstName,
                            lastname: lastName,
                            businessMailAddress: mailAddress,
                            companyId: companyID,
                        })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates a user based on a user-model object. This is necessary to make the new createUser Ressource work for some cases.
     * @param user - The usermodel that is used to create the user.
     */
    UserService.prototype.createUserByModel = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/users', 'POST', user, v2Header)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     */
    UserService.prototype.fetchCurrentUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/users/currentUser', 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     */
    UserService.prototype.fetchAllUsersOfTheCompany = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/users', 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param image
     */
    UserService.prototype.postImage = function (image) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var formData;
            return tslib_1.__generator(this, function (_a) {
                formData = new FormData();
                formData.append('contactPicture', image, 'contactPicture');
                return [2 /*return*/, this.invokeApi('/users/picture', 'POST', formData, { headers: { 'Content-Type': 'multipart/form-data' } })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param userId
     * @param image
     */
    UserService.prototype.postImageForUser = function (userId, image) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var formData;
            return tslib_1.__generator(this, function (_a) {
                formData = new FormData();
                formData.append('contactPicture', image, 'contactPicture');
                return [2 /*return*/, this.invokeApi("/users/" + userId + "/picture", 'POST', formData, { headers: { 'Content-Type': 'multipart/form-data' } })];
            });
        });
    };
    /**
     * Update the currently logged in user
     * @param user
     */
    UserService.prototype.updateUser = function (user, useV2) {
        if (useV2 === void 0) { useV2 = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!useV2) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.invokeApi('/users', 'PUT', user, v2Header)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.invokeApi('/users', 'PUT', user)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update a user from the same company
     * @param userId
     * @param user
     */
    UserService.prototype.updateUserById = function (userId, user, useV2) {
        if (useV2 === void 0) { useV2 = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!useV2) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.invokeApi("/users/" + userId, 'PUT', user, v2Header)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.invokeApi("/users/" + userId, 'PUT', user)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Assignes roles to the user, must be called by an ADMIN user
     * @param userId
     * @param roles
     */
    UserService.prototype.assignRoles = function (userId, roles) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/users/" + userId + "/roles", 'PUT', roles, v2Header)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Checks if any user has the given aliasMailAddress. Will throw an error if more then one user was found.
     * @param aliasMailAddress
     */
    UserService.prototype.isUserAlreadyKnown = function (aliasMailAddress) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/public/users/exists', 'GET', undefined, {
                            queryParams: {
                                aliasMailAddress: aliasMailAddress,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.hasSsoOfType = function (aliasMailAddress, ssoType) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/public/users/sso', 'GET', undefined, {
                            queryParams: {
                                aliasMailAddress: aliasMailAddress,
                                ssoType: ssoType
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Searchs for users with the given aliasMailAddress and if we found exactly one, then we return his businessMailAddress
     * @param aliasMailAddress
     */
    UserService.prototype.resolveAliasMailAddress = function (aliasMailAddress) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/public/users/resolve', 'GET', undefined, {
                            queryParams: {
                                aliasMailAddress: aliasMailAddress,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param aliasMailAddress
     */
    UserService.prototype.fetchUserByAliasMailAddressInternal = function (aliasMailAddress) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/internal/users', 'GET', undefined, {
                            queryParams: {
                                aliasMailAddress: aliasMailAddress,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param loginMailAddress
     */
    UserService.prototype.fetchUserByLoginInternal = function (loginMailAddress) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/internal/users', 'GET', undefined, {
                            queryParams: {
                                login: loginMailAddress,
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
     */
    UserService.prototype.activateUser = function (userId, useV2) {
        if (useV2 === void 0) { useV2 = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/users/" + userId, 'PATCH', [{
                                op: 'activate',
                            }], {
                            headers: {
                                'Content-Type': 'application/json-patch+json',
                                'x-ff-version': useV2 ? 2 : 1,
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
     */
    UserService.prototype.deactivateUser = function (userId, useV2) {
        if (useV2 === void 0) { useV2 = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/users/" + userId, 'PATCH', [{ op: 'deactivate' }], {
                            headers: {
                                'Content-Type': 'application/json-patch+json',
                                'x-ff-version': useV2 ? 2 : 1,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Checks the existence of a user by the given username.
     * This api resource combines the several checks against Cognito.
     */
    UserService.prototype.checkUsername = function (username, useV2) {
        if (useV2 === void 0) { useV2 = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/public/cognito-users", 'GET', undefined, {
                            queryParams: {
                                username: username,
                            },
                            headers: {
                                'x-ff-version': useV2 ? 2 : 1,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UserService;
}(http_1.APIClient));
exports.UserService = UserService;
exports.default = new UserService();
var StatusMapping = {
    create: {
        CREATED: 201,
        ALREADY_EXISTS: 400,
        MANDANTORY_FIELD_NOT_FILLED: 422,
        INTERNAL_SERVER_ERROR: 500,
    },
    current: {
        NOT_FOUND: 404,
        INTERNAL_SERVER_ERROR: 500,
    },
};
exports.StatusMapping = StatusMapping;
//# sourceMappingURL=UserService.js.map