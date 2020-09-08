import { Entity } from '@flowfact/types';

export namespace MatchmakingTypes {

    export interface UpdatedField {
        name: string;
        previousValue: string | number | object | null;
        currentValue: string | number | object | null;
    }

    export interface OfferedStatus {
        alreadyOffered: boolean;
        offeredAt: number;
    }

    export interface Match {
        offeredStatus: OfferedStatus;
        updatedFields: UpdatedField[];
        entity: Entity;
    }

    export interface FilterQuery {
        ignored?: boolean;
        offered?: boolean;
    }
}
