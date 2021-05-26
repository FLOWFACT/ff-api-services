import { Captions } from '@flowfact/types';

export namespace WidgetLayoutTypes {
    export enum LayoutDomainType {
        GENERAL = 'GENERAL',
        SCHEMA_BOUND = 'SCHEMA_BOUND',
    }

    export interface BaseWidgetLayout {
        id: string;
        sorting?: number;
        captions: Captions;
        global: boolean;
        layout: LayoutContainer;
        domainType: LayoutDomainType;
        categories: string[];
    }

    export interface GeneralWidgetLayout extends BaseWidgetLayout {
        domainType: LayoutDomainType.GENERAL;
    }

    export interface SchemaBoundWidgetLayout extends BaseWidgetLayout {
        schema: string;
        domainType: LayoutDomainType.SCHEMA_BOUND;
    }

    export interface PagedWidgetLayouts {
        offset: number;
        total: number;
        items: SchemaBoundWidgetLayout[];
    }

    export interface LayoutTabGroupItem {
        title: string | Captions;
        kind: 'tab';
        content: LayoutWidget;
    }
    export interface LayoutTabGroup {
        tempKey: string;
        kind: 'tabGroup';
        children: LayoutTabGroupItem[];
    }

    export interface LayoutWidget {
        tempKey: string;
        kind: 'widget';
        configuration?: object;
        globalWidgetId?: string;
        widgetStoreId: string;
        type: string;
    }

    export interface LayoutConfiguration {
        fractions: number;
    }

    export type LayoutColumnItem = LayoutWidget | LayoutContainer | LayoutTabGroup;

    export interface LayoutColumn {
        tempKey: string;
        layout: LayoutConfiguration;
        children: LayoutColumnItem[];
    }

    export interface LayoutContainer {
        tempKey: string;
        kind: 'container';
        columns: LayoutColumn[];
    }
}
