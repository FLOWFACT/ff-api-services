import { v4 as uuid } from 'uuid/interfaces';
export declare type UniformObject<T> = {
    [key: string]: T;
};
export declare type ParamList = UniformObject<boolean | string | number | undefined>;
export interface SearchResult<T> {
    entries: T[];
    totalCount: number;
    page: number;
    pageSize: number;
}
export interface EntityQuery {
    entityId: string;
    schemaId: string;
}
export interface PhaseConfigurationInformation {
    id: uuid;
    schemaName: string;
    timestamp: number;
    phaseConfiguration: any;
}
export interface EntityPhaseInformation {
    entityId: string;
    schemaId: string;
    phaseName: PhaseName;
}
export declare type PhaseName = 'acquisition' | 'preparation' | 'marketing' | 'closing' | 'after_sales';
