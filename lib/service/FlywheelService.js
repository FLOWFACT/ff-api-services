"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var FlywheelService = /** @class */ (function (_super) {
    tslib_1.__extends(FlywheelService, _super);
    function FlywheelService() {
        return _super.call(this, http_1.APIMapping.flywheelService) || this;
    }
    /**
     * Creates a new flywheel based on the title
     * @param title
     */
    FlywheelService.prototype.createFlywheel = function (title) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/flywheels', 'POST', {
                        title: title,
                    })];
            });
        });
    };
    /**
     * Deletes a flywheel based on the name (id)
     * @param flywheelName
     */
    FlywheelService.prototype.deleteFlywheel = function (flywheelName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/flywheels/" + flywheelName, 'DELETE')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * Returns all flywheels with no param given or no-content
     */
    FlywheelService.prototype.fetchAllFlywheels = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/flywheels', 'GET')];
            });
        });
    };
    /**
     * only for dev
     * @deprecated
     */
    FlywheelService.prototype.fetchAllMocks = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/flywheels/mockAll', 'GET')];
            });
        });
    };
    /**
     * Return a specific flywheel by name or not-found
     * @param flywheelName
     */
    FlywheelService.prototype.fetchFlywheel = function (flywheelName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/flywheels/" + flywheelName)];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * Returns all phases which have childrens
     */
    FlywheelService.prototype.fetchAllKanbans = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/phases', 'GET', undefined, {
                        queryParams: {
                            filters: JSON.stringify({
                                type: 'EXCLUDE_PHASE_STEPS',
                            }),
                        },
                    })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param filters
     */
    FlywheelService.prototype.fetchAllPhases = function (filters) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var params;
            return tslib_1.__generator(this, function (_a) {
                params = {};
                if (filters) {
                    params.queryParams = {
                        filters: JSON.stringify(filters),
                    };
                }
                return [2 /*return*/, this.invokeApi('/phases', 'GET', undefined, params)];
            });
        });
    };
    /**
     * Return a specific phase with all subphases
     * @param phaseName
     */
    FlywheelService.prototype.fetchPhase = function (phaseName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/phases/" + phaseName)];
            });
        });
    };
    /**
     * Return all transactions for a specific phase
     * @param phaseName
     * @param view
     * @deprecated Because same functionality plus filter possibility can be found in POST method: fetchTransactionsForPhaseWithFilter
     */
    FlywheelService.prototype.fetchTransactionsForPhase = function (phaseName, view) {
        if (view === void 0) { view = 'card'; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/transactions/phases/" + phaseName + "?view=" + view)];
            });
        });
    };
    /**
     * Return all transactions for a specific phase
     * @param phaseName
     * @param view
     * @param {Flowdsl} flowdsl
     */
    FlywheelService.prototype.fetchTransactionsForPhaseWithFilter = function (phaseName, view, flowdsl) {
        if (view === void 0) { view = 'card'; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/transactions/phases/" + phaseName + "?view=" + view, 'POST', flowdsl)];
            });
        });
    };
    /**
     * Moves a transaction to another phase
     * @param transactionId
     * @param fromPhaseName
     * @param toPhaseName
     */
    FlywheelService.prototype.moveTransaction = function (transactionId, fromPhaseName, toPhaseName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/transactions/" + transactionId, 'PUT', { fromPhaseName: fromPhaseName, toPhaseName: toPhaseName })];
            });
        });
    };
    /**
     * Creates or updates a phase.
     * @param phase
     */
    FlywheelService.prototype.createPhase = function (phase) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/phases', 'POST', phase)];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param phase
     */
    FlywheelService.prototype.updatePhase = function (phase) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi('/phases', 'PUT', phase, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param phaseName
     */
    FlywheelService.prototype.deletePhase = function (phaseName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/phases/" + phaseName, 'DELETE')];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param flywheelName
     * @param phaseNames
     */
    FlywheelService.prototype.updatePhases = function (flywheelName, phaseNames) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/flywheels/" + flywheelName, 'PATCH', [{
                            op: 'set-phases',
                            phaseNames: phaseNames,
                        }], {
                        headers: {
                            'Content-Type': 'application/json-patch+json',
                        },
                    })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param transactionId
     */
    FlywheelService.prototype.exitPhase = function (transactionId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/transactions/" + transactionId, 'PATCH', [{
                            op: 'exitPhase',
                        }], {
                        headers: {
                            'Content-Type': 'application/json-patch+json',
                        },
                    })];
            });
        });
    };
    /**
     * TODO: Please comment this method
     * @param transactionId
     * @param entityId
     * @param targetPhase
     */
    FlywheelService.prototype.linkTransaction = function (transactionId, entityId, targetPhase) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.invokeApi("/transactions/" + transactionId, 'PATCH', [{
                            op: 'linkTransaction',
                            entityId: entityId,
                            targetPhase: targetPhase,
                        }], {
                        headers: {
                            'Content-Type': 'application/json-patch+json',
                        },
                    })];
            });
        });
    };
    return FlywheelService;
}(http_1.APIClient));
exports.FlywheelService = FlywheelService;
exports.default = new FlywheelService();
//# sourceMappingURL=FlywheelService.js.map