import {IS24ImportServiceTypes} from "../IS24ImportService";
import ProjectInfo = IS24ImportServiceTypes.ProjectInfo;

export namespace PortalManagementTypes {
    export interface PortalAuthenticationModel {
        callbackUrl: string;
    }

    export interface PublishRequest {
        portalId: string;
        entries: PublishRequestEntry[];
        portalType?: PortalType;
    }

    export interface PublishRequestEntry {
        entityId: string;
        externalId?: string;
        targetStatus: 'OFFLINE' | 'ONLINE';
        entityLocation?: string;
        publishChannels?: PublishChannel[];
        schema?: string;
        schemaId?: string;
        showAddress?: boolean;
    }

    export interface PublishChannel {
        channelIdentifier: string;
        type: 'SCOUT' | 'HOMEPAGE' | 'PROJECT';
    }

    export interface Portal {
        companyId?: string;
        description?: string;
        ftpConnectionType?: 'FTP';
        ftpPort?: number;
        ftpServer?: string;
        id?: string;
        loginName?: string;
        logo?: string;
        name?: string;
        password?: string;
        portalKey?: string;
        portalType?: PortalType;
        contingent?: number;
        authenticated: boolean;
        ftpFolder?: string;
        fullUpdate: boolean;
        vendor?: string;
    }

    export interface PortalEstate {
        portalId?: string;
        entityId?: string;
        lastUpdate?: number;
        onlineSince?: number;
        showAddress?: boolean;
        channels: PublishChannel[];
    }

    export interface PortalEstateSettings {
        id: string;
        portalId: string;
        schemaId: string;
        entityId: string;
        externalId: string;
        showAddress: boolean;
    }

    export type PortalType = 'IS24' | 'OPENIMMO' | 'WORDPRESS' | 'IDX' | 'IDX_SUB';

    export type PredefinedPortal = {
        category: string;
        defaultCaption: string;
        ftpServer: string;
        fullUpdate?: boolean;
        logo: string;
        port: number;
        portalType: PortalType;
    };

    export interface ProjectPublishResponseEntry {
        entityId: string;
        schemaId: string;
        schema: string;
        messages: string[];
    }

    export interface ProjectDetails {
        id: string;
        schema: string;
        name: string;
        title: string;
    }

    export interface ProjectEstateResponse {
        assignedProjects: ProjectDetails[];
        importedProjects: ProjectInfo[];
    }

    export interface ProjectPublishResponse {
        targetStatus: 'OFFLINE' | 'ONLINE';
        warnings: ProjectPublishResponseEntry[];
        errors: ProjectPublishResponseEntry[];
    }

    export interface PortalTypeWithCaption {
        captions: { [key: string]: string };
        logo: string;
        portalType: PortalType;
    }

    export interface PortalPublishInformation {
        portalId: string;
        entityId?: string;
        lastUpdate?: number;
        onlineSince?: number;
        showAddress?: boolean;
        channels?: PublishChannel[];
    }

}
