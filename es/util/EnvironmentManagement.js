import * as store from 'store';
import * as isNode from 'detect-node';
var StoreKeys = {
    edgeServiceStage: 'HTTPCLIENT.APICLIENT.STAGE',
    edgeServiceVersionTag: 'HTTPCLIENT.APICLIENT.VERSIONTAG'
};
var StageTypes;
(function (StageTypes) {
    StageTypes["PRODUCTION"] = "production";
    StageTypes["STAGING"] = "staging";
    StageTypes["DEVELOPMENT"] = "development";
    StageTypes["LOCAL"] = "local";
})(StageTypes || (StageTypes = {}));
var VersionTagTypes;
(function (VersionTagTypes) {
    VersionTagTypes["LATEST"] = "latest";
    VersionTagTypes["STABLE"] = "stable";
})(VersionTagTypes || (VersionTagTypes = {}));
var defaultStage = isNode ? (process.env.STAGE_NAME || StageTypes.DEVELOPMENT) : StageTypes.PRODUCTION;
var defaultVersionTag = defaultStage === StageTypes.PRODUCTION ? VersionTagTypes.STABLE : VersionTagTypes.LATEST;
var instance = null;
var EnvironmentManagement = /** @class */ (function () {
    function EnvironmentManagement() {
        var _this = this;
        this.getBaseUrl = function (internal) {
            if (internal === void 0) { internal = false; }
            var stage = _this.getStage();
            var account = stage === StageTypes.DEVELOPMENT ? 'flowfact-dev' : 'flowfact-prod';
            if (stage === StageTypes.LOCAL) {
                return 'http://localhost:8080';
            }
            if (internal) {
                return "https://router-vs." + stage + ".cloudios.internal." + account + ".cloud";
            }
            return "https://api." + stage + ".cloudios." + account + ".cloud";
        };
        if (!instance) {
            instance = this;
        }
        return this;
    }
    // noinspection JSMethodCanBeStatic
    EnvironmentManagement.prototype.getStage = function () {
        return store.get(StoreKeys.edgeServiceStage) || defaultStage;
    };
    // noinspection JSMethodCanBeStatic
    EnvironmentManagement.prototype.getVersionTag = function () {
        return store.get(StoreKeys.edgeServiceVersionTag) || defaultVersionTag;
    };
    // noinspection JSMethodCanBeStatic
    EnvironmentManagement.prototype.setStage = function (stage) {
        if (stage) {
            store.set(StoreKeys.edgeServiceStage, stage);
        }
    };
    EnvironmentManagement.prototype.setVersionTag = function (versionTag) {
        if (versionTag) {
            store.set(StoreKeys.edgeServiceVersionTag, versionTag);
        }
    };
    EnvironmentManagement.prototype.isDefaultApi = function () {
        return (this.getStage() === defaultStage) && (this.getVersionTag() === defaultVersionTag);
    };
    return EnvironmentManagement;
}());
export { EnvironmentManagement };
export default new EnvironmentManagement();
export { StoreKeys, VersionTagTypes, StageTypes };
//# sourceMappingURL=EnvironmentManagement.js.map