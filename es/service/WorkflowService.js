import * as tslib_1 from "tslib";
import { APIClient, APIMapping } from '../http';
var WorkflowService = /** @class */ (function (_super) {
    tslib_1.__extends(WorkflowService, _super);
    function WorkflowService() {
        var _this = _super.call(this, APIMapping.workflowService) || this;
        _this.fetchAvailableConditions = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/action/ids', 'GET', undefined, {
                            queryParams: {
                                type: 'condition'
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        _this.fetchAvailableActions = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/action/ids', 'GET', undefined, {
                            queryParams: {
                                type: 'action'
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        /**
         * Fetch all available templates
         */
        _this.fetchTemplates = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/flow-type/templates', 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        /**
         * Fetches a specific workflow
         * @param workflowId
         *  The id of the workflow
         */
        _this.fetchWorkflow = function (workflowId) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/flow/" + workflowId, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        /**
         * Fetches specific workflows by the ids. If the array is empty, all workflows will be returned.
         * @param workflowIds
         */
        _this.fetchWorkflows = function (workflowIds) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/flow", 'GET', undefined, {
                            queryParams: {
                                ids: workflowIds.join(',')
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        /**
         * Fetches statistics for the given workflow ids. If the array is empty, it returns all statistics for all workflows
         * @param workflowIds
         */
        _this.fetchWorkflowsStatistics = function (workflowIds) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/flow", 'GET', undefined, {
                            queryParams: {
                                stats: true,
                                ids: workflowIds.join(',')
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        /**
         * Creates a workflow by his name.
         */
        _this.createWorkflow = function (workflow) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/flow', 'POST', workflow)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        /**
         * Updates a workflow by his id.
         * @param workflowId
         * @param workflow
         */
        _this.updateWorkflow = function (workflowId, workflow) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/flow/" + workflowId, 'PUT', workflow)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        _this.deleteWorkflow = function (workflowId) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/flow/" + workflowId, 'DELETE')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        _this.patchWorkflow = function (body) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/flow', 'PATCH', body)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        return _this;
    }
    return WorkflowService;
}(APIClient));
export default new WorkflowService();
//# sourceMappingURL=WorkflowService.js.map