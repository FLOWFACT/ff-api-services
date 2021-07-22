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
    metadata?: object;
}

export type ViewType = 'DEFAULT' | 'LIST' | 'CARD' | 'CALENDAR' | 'MAP' | 'ENTITY_RELATION' | 'QUICK_CREATE';

export enum ViewActionTypes {
    ACCESS_RIGHTS = 'ACCESS_RIGHTS',
    CHANGE_INQUIRY_STATE = 'CHANGE_INQUIRY_STATE',
    CHANGE_INQUIRY_STATUS = 'CHANGE_INQUIRY_STATUS',
    COMPLETE_STATUS = 'COMPLETE_STATUS',
    CREATE_ACTIVITY_REPORT = 'CREATE_ACTIVITY_REPORT',
    CREATE_INQUIRY_APPOINTMENT = 'CREATE_INQUIRY_APPOINTMENT',
    DELETE = 'DELETE',
    DELETE_INQUIRY = 'DELETE_INQUIRY',
    DEVELOPER_PROJECT_PUBLISH = 'DEVELOPER_PROJECT_PUBLISH',
    DOCUMENT_GENERATOR = 'DOCUMENT_GENERATOR',
    DUPLICATE = 'DUPLICATE',
    EXCEL_EXPORT = 'EXCEL_EXPORT',
    PRINT_PLACARD = 'PRINT_PLACARD',
    QUICK_ACTION = 'QUICK_ACTION',
    SEND_ACTIVITY_REPORT = 'SEND_ACTIVITY_REPORT',
    SEND_EMAIL = 'SEND_EMAIL',
    SEND_INTERACTIVE_EXPOSE = 'SEND_INTERACTIVE_EXPOSE',
    SEND_INTERACTIVE_EXPOSE_FROM_INQUIRY = 'SEND_INTERACTIVE_EXPOSE_FROM_INQUIRY',
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
