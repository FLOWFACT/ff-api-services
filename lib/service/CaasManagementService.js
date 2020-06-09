"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axios_1 = require("axios");
var APIClient_1 = require("../http/APIClient");
var APIMapping_1 = require("../http/APIMapping");
var CaasManagementService = /** @class */ (function (_super) {
    tslib_1.__extends(CaasManagementService, _super);
    function CaasManagementService() {
        return _super.call(this, APIMapping_1.default.caasManamgentService) || this;
    }
    /* ############ Projects ############ */
    /**
     * Fetches all projects
     * @return {GetAllProjectsResponse}
     */
    CaasManagementService.prototype.fetchAllProjects = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/projects', 'GET')];
            });
        });
    };
    /**
     * Fetches the project with the given id
     * @param id
     * @return {Project}
     */
    CaasManagementService.prototype.fetchProject = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/projects/" + id, 'GET')];
            });
        });
    };
    /**
     * Creates a project with the given configuration
     * @param projectConfiguration
     * @return {Project}
     */
    CaasManagementService.prototype.createProject = function (projectConfiguration) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/projects', 'POST', projectConfiguration)];
            });
        });
    };
    /**
     * Deletes the project with the given id
     * @param id
     */
    CaasManagementService.prototype.deleteProject = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/projects/" + id, 'DELETE')];
            });
        });
    };
    /* ############ Containers ############ */
    /**
     * Fetches all containers in their short representation
     * @return {GetAllContainersResponse}
     */
    CaasManagementService.prototype.fetchAllContainers = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/containers', 'GET')];
            });
        });
    };
    /**
     * Fetches the container with the given id
     * @param id
     * @return {ContainerResponse}
     */
    CaasManagementService.prototype.fetchContainer = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/containers/" + id, 'GET')];
            });
        });
    };
    /**
     * Fetches the logs for the container with the given id
     * @param id
     * @return {ContainerLogsResponse}
     */
    CaasManagementService.prototype.fetchContainerLogs = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/containers/" + id + "/logs", 'GET')];
            });
        });
    };
    /**
     * Creates a container with the given configuration
     * @param containerConfiguration
     * @return {ContainerResponse}
     */
    CaasManagementService.prototype.createContainer = function (containerConfiguration) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/containers', 'POST', containerConfiguration)];
            });
        });
    };
    /**
     * Updates the container with the given id and configuration
     * @param id
     * @param containerConfiguration
     * @return {ContainerResponse}
     */
    CaasManagementService.prototype.updateContainer = function (id, containerConfiguration) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/containers/" + id, 'PUT', containerConfiguration)];
            });
        });
    };
    /**
     * Deletes the container with the given id
     * @param id
     */
    CaasManagementService.prototype.deleteContainer = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/containers/" + id, 'DELETE')];
            });
        });
    };
    /**
     * GETs the given url and returns the respose
     * @param {string} url
     */
    CaasManagementService.prototype.pingUrl = function (url) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, axios_1.default.get(url)];
            });
        });
    };
    /**
     * Checks whether the nice name is available (globally unique)
     * @param niceName
     */
    CaasManagementService.prototype.isNiceNameAvailable = function (niceName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/containers/nice-name-available?value=" + niceName, 'GET')];
            });
        });
    };
    /* ############ Databases ############ */
    /**
     * Fetches all databases
     * @return {GetAllDatabasesResponse}
     */
    CaasManagementService.prototype.fetchAllDatabases = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/databases', 'GET')];
            });
        });
    };
    /**
     * Fetches the database with the given id
     * @param id
     * @return {Database}
     */
    CaasManagementService.prototype.fetchDatabase = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/databases/" + id, 'GET')];
            });
        });
    };
    /**
     * Creates a database with the given configuration
     * @param databaseConfiguration
     * @return {Database}
     */
    CaasManagementService.prototype.createDatabase = function (databaseConfiguration) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/databases', 'POST', databaseConfiguration)];
            });
        });
    };
    /**
     * Deletes the database with the given id
     * @param id
     */
    CaasManagementService.prototype.deleteDatabase = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/databases/" + id, 'DELETE')];
            });
        });
    };
    return CaasManagementService;
}(APIClient_1.default));
exports.CaasManagementService = CaasManagementService;
exports.default = new CaasManagementService();
//# sourceMappingURL=CaasManagementService.js.map