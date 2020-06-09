declare const StoreKeys: {
    edgeServiceStage: string;
    edgeServiceVersionTag: string;
};
declare enum StageTypes {
    PRODUCTION = "production",
    STAGING = "staging",
    DEVELOPMENT = "development",
    LOCAL = "local"
}
declare enum VersionTagTypes {
    LATEST = "latest",
    STABLE = "stable"
}
export declare class EnvironmentManagement {
    constructor();
    getStage(): StageTypes;
    getVersionTag(): VersionTagTypes;
    setStage(stage: StageTypes): void;
    setVersionTag(versionTag: VersionTagTypes): void;
    getBaseUrl: (internal?: boolean) => string;
    isDefaultApi(): boolean;
}
declare const _default: EnvironmentManagement;
export default _default;
export { StoreKeys, VersionTagTypes, StageTypes };
