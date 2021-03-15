import { DslBuilder, EntityIdCondition, Flowdsl, FlowdslConditionUnion, HasFieldWithValueCondition } from '@flowfact/node-flowdsl';
import { Entity, FilterConfiguration, PagedResponse } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient, APIMapping } from '../http';
import { SearchServiceTypes } from './SearchServiceTypes';

export class SearchService extends APIClient {
    constructor() {
        super(APIMapping.searchService);
    }

    /**
     * Get all searches as short searches. Just the ID and the Name of the search
     * will be returned in a array.
     */
    async fetchSearches(): Promise<AxiosResponse> {
        return await this.invokeApi('/search', 'GET');
    }

    /**
     * Get the full search information by id.
     */
    async fetchSearch(searchId: string) {
        return await this.invokeApi(`/search/${searchId}`, 'GET');
    }

    /**
     * TODO: Please comment this method
     * @param searchModel
     */
    async saveSearch(searchModel: any) {
        return await this.invokeApi('/search', 'POST', searchModel);
    }

    /**
     * TODO: Please comment this method
     * @param searchId
     */
    async deleteSearch(searchId: string) {
        return await this.invokeApi(`/search/${searchId}`, 'DELETE');
    }

    /**
     * TODO: Please comment this method
     * @param searchId
     * @param searchModel
     */
    async updateSearch(searchId: string, searchModel: any) {
        return await this.invokeApi(`/search/${searchId}`, 'PUT', searchModel);
    }

    /**
     * This method searches for entities or tags. See swagger documentation of search-service for details
     * @param query
     * @param index
     * @param page
     * @param size
     * @param withCount
     */
    async search(query: Flowdsl, index: string, page: number = 1, size?: number, withCount?: boolean) {
        return await this.invokeApi<PagedResponse<Entity>>('/schemas/' + index, 'POST', query, {
            queryParams: this.buildQueryParams(page, size, withCount),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    /**
     * This method searches for entities or tags. See swagger documentation of search-service for details
     * @param query
     * @param index
     * @param offset
     * @param size
     * @param withCount
     */
    async searchVirtualized(query: Flowdsl, index: string, offset: number = 0, size: number = 20, withCount: boolean = true) {
        return this.invokeApiWithErrorHandling<PagedResponse<Entity>>(`/schemas/${index}`, 'POST', query, {
            queryParams: {
                offset: offset,
                size: size,
                withCount: withCount,
            },
        });
    }

    /**
     * Fetches the number of entities matching the given query
     * @param query
     * @param index
     * @param groupBy
     */
    async count(query: Flowdsl, index: string, groupBy?: string) {
        return await this.invokeApi('/schemas/' + index + '/count', 'POST', query, {
            queryParams: {
                groupBy: groupBy,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    /**
     * Fetches count of groups along with respective property and it's value in each group
     * @param query - query dsl to limit result
     * @param index - schema name
     * @param groupBy - schema fields used for grouping
     * @param treatingBlankStringValuesAsNull - if true null and empty string are treated as same value
     */
    async groupBy(query: Flowdsl, index: string, groupBy: string[], treatingBlankStringValuesAsNull: boolean = true) {
        return await this.invokeApiWithErrorHandling<SearchServiceTypes.GroupingResult>('/schemas/' + index + '/count', 'POST', query, {
            queryParams: {
                groupBy: groupBy.join(','),
                treatingBlankStringValuesAsNull,
            },
            headers: {
                'Content-Type': 'application/json',
                'x-ff-version': 2,
            },
        });
    }

    /**
     * Fetches the number of entities matching the given query
     * @param companyId
     * @param query
     * @param index
     * @param withAclGroups
     */
    async internalCount(companyId: string, query: Flowdsl, index: string, withAclGroups: boolean = false) {
        return this.invokeApi('/internal/schemas/' + index + '/count', 'POST', query, {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                companyId,
                withAclGroups: withAclGroups.toString(),
            },
        });
    }

    /**
     * TODO: Please comment this method
     * @param index
     * @param page
     * @param size
     * @param filter
     * @param sorting
     */
    async filter(index: string, page: number = 1, size: number = 30, filter: FilterConfiguration, sorting: any) {
        let queryParams: any = {};
        if (page) {
            // page -1 because the the pages start at 0 on the backend
            queryParams.page = page;
        }
        if (size) {
            queryParams.size = size;
        }

        return await this.invokeApi<PagedResponse<Entity>>('/schemas/' + index, 'POST', this.buildQuery(filter, sorting), {
            queryParams: queryParams,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    private buildQueryParams(page: number = 1, size?: number, withCount?: boolean) {
        const queryParams: any = {};
        if (page) {
            queryParams.page = page;
        }
        if (size) {
            queryParams.size = size;
        }
        if (typeof withCount === 'boolean') {
            queryParams.withCount = withCount;
        }

        return queryParams;
    }

    buildQuery(filterConfiguration: FilterConfiguration, sorting: any): Flowdsl {
        const builder = new DslBuilder();
        builder.target('ENTITY');
        builder.distinct(false);

        if (filterConfiguration) {
            if (filterConfiguration.value && filterConfiguration.value !== '') {
                const conditions: FlowdslConditionUnion[] = filterConfiguration.fields.map((field) => {
                    if (field === 'id') {
                        return {
                            type: 'ENTITYID',
                            values: [filterConfiguration.value],
                        } as EntityIdCondition;
                    }
                    return {
                        type: 'HASFIELDWITHVALUE',
                        field: field,
                        value: filterConfiguration.value,
                        operator: 'LIKE',
                    } as HasFieldWithValueCondition;
                });

                builder.withCondition([
                    {
                        type: 'OR',
                        conditions: conditions,
                    },
                ]);
            }

            if (filterConfiguration.limitResponse) {
                builder.fetch(filterConfiguration.fields);
            }
        }

        if (sorting) {
            // don't do anything right now, because the flowdsl doesn't support sorting.
        }

        return builder.build();
    }
}

export default new SearchService();
