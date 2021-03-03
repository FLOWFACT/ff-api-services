import * as store from 'store';
import * as isNode from 'detect-node';
import { LambdaAPIService } from '../http/APIMapping';

const StoreKeys = {
    edgeServiceStage: 'HTTPCLIENT.APICLIENT.STAGE',
    edgeServiceVersionTag: 'HTTPCLIENT.APICLIENT.VERSIONTAG',
};

enum StageTypes {
    PRODUCTION = 'production',
    STAGING = 'staging',
    DEVELOPMENT = 'development',
    LOCAL = 'local',
}

enum VersionTagTypes {
    LATEST = 'latest',
    STABLE = 'stable',
}

const defaultStage = isNode ? process.env.STAGE_NAME || StageTypes.DEVELOPMENT : StageTypes.PRODUCTION;
const defaultVersionTag = defaultStage === StageTypes.PRODUCTION ? VersionTagTypes.STABLE : VersionTagTypes.LATEST;

let instance: EnvironmentManagement | null = null;

export class EnvironmentManagement {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return this;
    }

    // noinspection JSMethodCanBeStatic
    getStage(): StageTypes {
        return store.get(StoreKeys.edgeServiceStage) || defaultStage;
    }

    // noinspection JSMethodCanBeStatic
    getVersionTag(): VersionTagTypes {
        return store.get(StoreKeys.edgeServiceVersionTag) || defaultVersionTag;
    }

    // noinspection JSMethodCanBeStatic
    setStage(stage: StageTypes) {
        if (stage) {
            store.set(StoreKeys.edgeServiceStage, stage);
        }
    }

    setVersionTag(versionTag: VersionTagTypes) {
        if (versionTag) {
            store.set(StoreKeys.edgeServiceVersionTag, versionTag);
        }
    }

    getBaseUrl = (internal = false) => {
        const stage = this.getStage();
        const account = stage === StageTypes.DEVELOPMENT ? 'flowfact-dev' : 'flowfact-prod';
        if (stage === StageTypes.LOCAL) {
            return 'http://localhost:8080';
        }
        if (internal) {
            return `https://router-vs.${stage}.cloudios.internal.${account}.cloud`;
        }
        return `https://api.${stage}.cloudios.${account}.cloud`;
    };

    getLambdaUrl = (service: LambdaAPIService) => {
        const stage = this.getStage();
        const account = stage === StageTypes.DEVELOPMENT ? 'flowfact-dev' : 'flowfact-prod';

        return service.url ?? `https://${service.name}.${stage}.sf.${account}.cloud`;
    };

    /**
     * URL for activity report based on stage
     * We only have DEV and PROD environment for activity report.
     */
    getActivityReportUrl(): string {
        const stage = this.getStage();
        if (stage === StageTypes.DEVELOPMENT) {
            return 'https://latest-development-activity-report-v2-cloud.fe.flowfact-dev.cloud';
        } else {
            return 'https://latest-development-activity-report-v2-cloud.fe.flowfact-dev.cloud';
        }
    }

    isDefaultApi() {
        return this.getStage() === defaultStage && this.getVersionTag() === defaultVersionTag;
    }
}

const EnvironmentManagementInstance = new EnvironmentManagement();

export { StoreKeys, VersionTagTypes, StageTypes, EnvironmentManagementInstance };
