import * as tslib_1 from "tslib";
import axios from 'axios';
import * as isNode from 'detect-node';
import { stringify } from 'qs';
import Authentication from '../authentication/Authentication';
import EnvironmentManagement from '../util/EnvironmentManagement';
import Interceptor from '../util/Interceptor';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fragmentTypes from '../schemas/fragmentTypes';
var APIClient = /** @class */ (function () {
    function APIClient(service) {
        var _this = this;
        this._serviceName = service.name;
        var fragmentMatcher = new IntrospectionFragmentMatcher({ introspectionQueryResultData: fragmentTypes });
        var httpLink = new HttpLink({
            uri: EnvironmentManagement.getBaseUrl(isNode) + "/gql"
        });
        var authLink = setContext(function (_, _a) {
            var headers = _a.headers;
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var _b, _c;
                return tslib_1.__generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _b = {};
                            _c = [{}, headers];
                            return [4 /*yield*/, this.getUserIdentification()];
                        case 1: return [2 /*return*/, (_b.headers = tslib_1.__assign.apply(void 0, _c.concat([(_d.sent())])),
                                _b)];
                    }
                });
            });
        });
        var link = authLink.concat(httpLink);
        var cache = new InMemoryCache({ fragmentMatcher: fragmentMatcher });
        this.gql = new ApolloClient({
            link: link,
            cache: cache
        });
    }
    APIClient.changeLanguages = function (newLanguages) {
        this.languages = newLanguages;
    };
    APIClient.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    APIClient.prototype.getUserIdentification = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, supportToken, apiToken, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // setup the request
                        if (isNode) {
                            if (this.userId) {
                                return [2 /*return*/, {
                                        userId: this.userId
                                    }];
                            }
                            return [2 /*return*/, {}];
                        }
                        supportToken = localStorage.getItem('flowfact.support.token') || '';
                        apiToken = localStorage.getItem('flowfact.api.token') || '';
                        if (!(supportToken.length === 0 && apiToken.length === 0)) return [3 /*break*/, 2];
                        _b = {};
                        return [4 /*yield*/, Authentication.getCurrentSession()];
                    case 1: return [2 /*return*/, (_b.cognitoToken = (_c.sent()).getIdToken().getJwtToken(),
                            _b)];
                    case 2: return [2 /*return*/, (_a = {},
                            _a["x-ff-" + (apiToken ? 'api' : 'support') + "-token"] = apiToken || supportToken,
                            _a)];
                }
            });
        });
    };
    APIClient.prototype.invokeGqlQuery = function (query, variables) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.gql.query({ query: query, variables: variables, errorPolicy: 'all' })];
                    case 1:
                        result = _a.sent();
                        if (result.errors) {
                            // intentional ==, do not change to ===
                            if (result.data == null) {
                                throw new Error("GQL query failed:\n\n" + JSON.stringify(result.errors, null, 2));
                            }
                            console.warn('GQL query has warnings', result.errors);
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    APIClient.prototype.invokeGqlMutation = function (mutation, variables) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.gql.mutate({ mutation: mutation, variables: variables, errorPolicy: 'all' })];
                    case 1:
                        result = _a.sent();
                        if (result.errors) {
                            // intentional ==, do not change to ===
                            if (result.data == null) {
                                throw new Error("GQL mutation failed:\n\n" + JSON.stringify(result.errors, null, 2));
                            }
                            console.warn('GQL mutation has warnings', result.errors);
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    APIClient.prototype.invokeApi = function (path, method, body, additionalParams) {
        if (method === void 0) { method = 'GET'; }
        if (body === void 0) { body = ''; }
        if (additionalParams === void 0) { additionalParams = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var queryParams, headers, cancelToken, others, apiUrl, queryString, userIdentification, _a, languages, request, client, _i, _b, interceptor;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!path.startsWith('/')) {
                            throw new Error('Your path has to start with a slash. Path: ' + path);
                        }
                        queryParams = additionalParams.queryParams, headers = additionalParams.headers, cancelToken = additionalParams.cancelToken, others = tslib_1.__rest(additionalParams, ["queryParams", "headers", "cancelToken"]);
                        apiUrl = EnvironmentManagement.getBaseUrl(isNode) + "/" + this._serviceName + path;
                        if (queryParams) {
                            queryString = stringify(queryParams, { addQueryPrefix: true });
                            if (queryString && queryString !== '') {
                                apiUrl += queryString;
                            }
                        }
                        if (!path.startsWith('/public')) return [3 /*break*/, 1];
                        _a = {};
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.getUserIdentification()];
                    case 2:
                        _a = _c.sent();
                        _c.label = 3;
                    case 3:
                        userIdentification = _a;
                        languages = { 'Accept-Language': APIClient.languages };
                        request = tslib_1.__assign({ method: method, url: apiUrl, headers: Object.assign({}, userIdentification, languages, headers || {}), data: body, cancelToken: cancelToken }, others);
                        client = axios.create();
                        for (_i = 0, _b = Interceptor.interceptors; _i < _b.length; _i++) {
                            interceptor = _b[_i];
                            if (interceptor.type === 'request') {
                                axios.interceptors.request.use(interceptor.method);
                            }
                            else if (interceptor.type === 'response') {
                                axios.interceptors.response.use(interceptor.method);
                            }
                        }
                        // fire the request
                        // NEVER put a catch here because it prevents all other error handling
                        // i.e. you can't handle a service returning an http code >= 400 (which is possibly expected)
                        return [2 /*return*/, client.request(request)];
                }
            });
        });
    };
    APIClient.languages = 'de';
    return APIClient;
}());
export default APIClient;
//# sourceMappingURL=APIClient.js.map