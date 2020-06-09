import * as tslib_1 from "tslib";
import Amplify, { Auth } from 'aws-amplify';
import EnvironmentManagement, { StageTypes } from '../util/EnvironmentManagement';
import CustomStorage from './CustomStorage';
var region = 'eu-central-1';
var stageSettings = {
    development: {
        identityPoolId: 'eu-central-1:079515e9-300a-42c6-b608-930f84fed704',
        userPoolId: 'eu-central-1_cvYwwqpk7',
        clientId: '7q16gh49q81pe62ic12su6sghc',
        authFlowType: 'USER_PASSWORD_AUTH',
    },
    staging: {
        identityPoolId: 'eu-central-1:a344597d-b532-4b94-81ef-5d31bf56e504',
        userPoolId: 'eu-central-1_8R899yNNH',
        clientId: '7qpfm5e3625hrf5mpieph9cu2a',
    },
    production: {
        identityPoolId: 'eu-central-1:2b79058f-3250-492a-a7a8-91bb06911ae9',
        userPoolId: 'eu-central-1_RdHzlSKS0',
        clientId: '57brn8csff678o6aee3k1ia00n',
    },
};
var Authentication = /** @class */ (function () {
    function Authentication() {
        if (Authentication.instance) {
            return Authentication.instance;
        }
        // Configure amplify auth
        Amplify.configure({
            storage: CustomStorage,
            Auth: {
                region: region,
                userPoolId: stageSettings[this.stage].userPoolId,
                userPoolWebClientId: stageSettings[this.stage].clientId,
                authenticationFlowType: stageSettings[this.stage].authFlowType,
            },
        });
        Authentication.instance = this;
    }
    Authentication.prototype.reconfigure = function (config) {
        return Amplify.configure(config);
    };
    /**
     * Logins a user with the given username and password.
     * This function returns a promise.
     * @param username
     * @param password
     */
    Authentication.prototype.login = function (username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, Auth.signIn(username.toLowerCase(), password)];
            });
        });
    };
    /**
     * Logout the current user.
     * @param global
     *      if true, then the user will be globally log out on all devices.
     */
    Authentication.prototype.logout = function (global) {
        if (global === void 0) { global = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, Auth.signOut({
                        global: global,
                    })];
            });
        });
    };
    /**
     * Directly insert the cognito token into the storage
     * @param authenticationData
     */
    Authentication.prototype.loginWithTokens = function (authenticationData) {
        var stage = EnvironmentManagement.getStage();
        if (stage === StageTypes.LOCAL) {
            stage = StageTypes.DEVELOPMENT;
        }
        var clientId = Auth.configure(null).userPoolWebClientId || stageSettings[stage].clientId;
        // set the new tokens in the store
        var key = "CognitoIdentityServiceProvider." + clientId;
        localStorage.setItem(key + ".LastAuthUser", authenticationData.username);
        localStorage.setItem(key + "." + authenticationData.username + ".idToken", authenticationData.idToken);
        localStorage.setItem(key + "." + authenticationData.username + ".refreshToken", authenticationData.refreshToken);
        localStorage.setItem(key + "." + authenticationData.username + ".accessToken", authenticationData.accessToken);
        return this.getCurrentSession();
    };
    /**
     * Registers a new user with the given username, password and email.
     * If the registration was successful, the user will receive a email with a code.
     * @param username
     * @param password
     * @param email
     */
    Authentication.prototype.register = function (username, password, email) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Auth.signUp({
                            username: username.toLowerCase(),
                            password: password,
                            validationData: [],
                            attributes: {
                                email: email,
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method confirms the registration of a user.
     * @param code
     * @param username
     */
    Authentication.prototype.confirmRegistration = function (code, username) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Auth.confirmSignUp(username.toLowerCase(), code, {
                            // Force user confirmation irrespective of existing alias
                            forceAliasCreation: true,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method sends a new email to the user with a new confirm code.
     * @param username
     */
    Authentication.prototype.resendConfirmationCode = function (username) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Auth.resendSignUp(username.toLowerCase())];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Check if a username already exists in cognito or not.
     * @param username
     */
    Authentication.prototype.checkUsername = function (username) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var code, error_1, code;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        code = '000000';
                        return [4 /*yield*/, Auth.confirmSignUp(username.toLowerCase(), code, {
                                // If set to False, the API will throw an AliasExistsException error if the phone number/email used already exists as an alias with a different user
                                forceAliasCreation: false
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                exists: true,
                                statusCode: null,
                            }];
                    case 2:
                        error_1 = _a.sent();
                        code = error_1.code;
                        console.log(error_1);
                        switch (code) {
                            case 'AliasExistsException':
                            case 'CodeMismatchException':
                            case 'ExpiredCodeException':
                            case 'NotAuthorizedException':
                            case 'PasswordResetRequiredException':
                            case 'UserNotConfirmedException':
                                return [2 /*return*/, {
                                        exists: true,
                                        statusCode: code,
                                    }];
                            default:
                                return [2 /*return*/, {
                                        exists: false,
                                        statusCode: code,
                                    }];
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set the user into the "forgot password"-mode. The user will receive an email with a confirm code.
     * @param username
     */
    Authentication.prototype.forgotPassword = function (username) {
        return Auth.forgotPassword(username.toLowerCase());
    };
    Authentication.prototype.changePassword = function (oldPassword, newPassword) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var currentUser;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUser()];
                    case 1:
                        currentUser = _a.sent();
                        if (currentUser) {
                            return [2 /*return*/, Auth.changePassword(currentUser, oldPassword, newPassword)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Authentication.prototype.confirmPassword = function (code, username, newPassword) {
        return Auth.forgotPasswordSubmit(username.toLowerCase(), code, newPassword);
    };
    /**
     * Returns the current user if the user has logged in before.
     */
    Authentication.prototype.getCurrentUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Auth.currentAuthenticatedUser()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns the current session if a user is logged in. The session contains
     * all cognito tokens and more.
     */
    Authentication.prototype.getCurrentSession = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Auth.currentSession()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Authentication.prototype.getIdToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var currentSession, idToken;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCurrentSession()];
                    case 1:
                        currentSession = _a.sent();
                        if (!currentSession) {
                            throw new Error('Could not get the current session. Are you logged in?');
                        }
                        idToken = currentSession.getIdToken().getJwtToken();
                        if (!idToken) {
                            throw new Error('Could not get the id token. Are you logged in?');
                        }
                        return [2 /*return*/, idToken];
                }
            });
        });
    };
    Authentication.prototype.getAccessToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var currentSession, accessToken;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCurrentSession()];
                    case 1:
                        currentSession = _a.sent();
                        if (!currentSession) {
                            throw new Error('Could not get the current session. Are you logged in?');
                        }
                        accessToken = currentSession.getAccessToken().getJwtToken();
                        if (!accessToken) {
                            throw new Error('Could not get the access token. Are you logged in?');
                        }
                        return [2 /*return*/, accessToken];
                }
            });
        });
    };
    Object.defineProperty(Authentication.prototype, "stage", {
        get: function () {
            var stage = EnvironmentManagement.getStage() === StageTypes.LOCAL ? StageTypes.DEVELOPMENT : EnvironmentManagement.getStage();
            if (!stage) {
                stage = StageTypes.DEVELOPMENT;
            }
            return stage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authentication.prototype, "region", {
        get: function () {
            return region;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authentication.prototype, "stageSettings", {
        get: function () {
            return stageSettings[this.stage];
        },
        enumerable: true,
        configurable: true
    });
    return Authentication;
}());
export default new Authentication();
//# sourceMappingURL=Authentication.js.map