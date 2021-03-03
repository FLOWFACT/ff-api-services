export interface ShortViewDefinition {
    id: string;
    type: ViewType | null;
    name: string;
    schemaId: string;
    schema: string;
    sorting: number;
}

export interface ViewDefinitionCategory {
    name: string;
    fields: string[];
}

export interface ViewDefinition extends ShortViewDefinition {
    componentId: string;
    defaultOrder: string;
    actions: ViewActionType[];
    categories: ViewDefinitionCategory[];
}

export type ViewType = 'DEFAULT' | 'LIST' | 'CARD' | 'CALENDAR' | 'MAP' | 'ENTITY_RELATION';

export enum ViewActionTypes {
    DUPLICATE = 'DUPLICATE',
    DELETE = 'DELETE',
    ACCESS_RIGHTS = 'ACCESS_RIGHTS',
    PRINT_PLACARD = 'PRINT_PLACARD',
    SEND_INTERACTIVE_EXPOSE = 'SEND_INTERACTIVE_EXPOSE',
    COMPLETE_STATUS = 'COMPLETE_STATUS',
    EXCEL_EXPORT = 'EXCEL_EXPORT',
    DOCUMENT_GENERATOR = 'DOCUMENT_GENERATOR',
    DEVELOPER_PROJECT_PUBLISH = 'DEVELOPER_PROJECT_PUBLISH',
    QUICK_ACTION = 'QUICK_ACTION',
    CREATE_ACTIVITY_REPORT = 'CREATE_ACTIVITY_REPORT',
    SEND_ACTIVITY_REPORT = 'SEND_ACTIVITY_REPORT'
}
export type ViewActionType = keyof typeof ViewActionTypes;

export interface ViewDefinitionStatistic {
    id: string;
    name: string;
    schema: string;
    categoryAmount: number;
    fieldAmount: number;
    global: boolean;
}

export interface Customisation {
    schemaName: string;
    viewName: string;
    categoryName: string;
    fieldName?: string;
    predecessor?: string;
    action: 'ADD' | 'MOVE' | 'DELETE';
    type: 'CATEGORY' | 'FIELD';
}
