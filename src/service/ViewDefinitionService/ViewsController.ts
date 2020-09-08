import { APIClient, APIMapping } from "../../http";
import * as qs from "qs";
import {
  ShortViewDefinition,
  ViewDefinition,
  ViewDefinitionCategory,
  ViewDefinitionStatistic,
  ViewType,
} from "./ViewDefinitionService.Types";

export class ViewsController extends APIClient {
  constructor() {
    super(APIMapping.viewDefinitionService);
  }

  /**
   * TODO: Please comment this method
   * @param schemaId
   */
  async fetchDefinitionsForSchema(schemaId?: string) {
    return await this.invokeApiWithErrorHandling<ShortViewDefinition[]>(
      "/views",
      "GET",
      undefined,
      {
        queryParams: {
          schemaId,
        },
      }
    );
  }

  /**
   * This function converts view definition v1 models to view definition v2
   * @param schemaName
   * @param viewType
   */
  async fetchDefinitionsV2ForSchema(schemaName?: string, viewType?: ViewType) {
    // TODO: Define ViewDefinitionV2
    return await this.invokeApiWithErrorHandling<{ items: any[] }>(
      "/views",
      "GET",
      undefined,
      {
        headers: {
          "x-ff-version": 2,
        },
        queryParams: {
          schema: schemaName,
          type: viewType,
        },
      }
    );
  }

  /**
   * TODO: Please comment this method
   * @param viewDefinitionId
   */
  async fetchDefinition(viewDefinitionId: string) {
    return await this.invokeApiWithErrorHandling<ViewDefinition>(
      `/views/${viewDefinitionId}`,
      "GET"
    );
  }

  /**
   * Returns statistics for all views of a specific schema
   * @param schemaIdOrName
   */
  async fetchStatistics(schemaIdOrName: string) {
    return await this.invokeApiWithErrorHandling<ViewDefinitionStatistic[]>(
      `/views/${schemaIdOrName}/statistics`,
      "GET"
    );
  }

  /**
   * TODO: Please comment this method
   * @deprecated Please use the CustomisationController
   * @param viewDefinitionId
   * @param viewDefinition
   */
  async updateDefinition(
    viewDefinitionId: string,
    viewDefinition: ViewDefinition
  ) {
    return await this.invokeApiWithErrorHandling<ViewDefinition>(
      `/views/${viewDefinitionId}`,
      "PUT",
      viewDefinition
    );
  }

  /**
   * TODO: Please comment this method
   * @param viewDefinition
   */
  async createDefinition(viewDefinition: ViewDefinition) {
    return await this.invokeApiWithErrorHandling<ViewDefinition>(
      "/views",
      "POST",
      viewDefinition
    );
  }

  /**
   * TODO: Please comment this method
   * @param viewDefinitionId
   */
  async deleteDefinition(viewDefinitionId: string) {
    return await this.invokeApiWithErrorHandling(
      `/views/${viewDefinitionId}`,
      "DELETE"
    );
  }

  /**
   * TODO: Please comment this method
   * @param viewId
   * @param categoryName
   * @param categoryDefinition
   */
  async updateCategory(
    viewId: string,
    categoryName: string,
    categoryDefinition: ViewDefinitionCategory
  ) {
    return await this.invokeApiWithErrorHandling<ViewDefinition>(
      `/views/${viewId}/categories/${categoryName}`,
      "PATCH",
      categoryDefinition
    );
  }

  /**
   * TODO: Please comment this method
   * @param viewId
   * @param categoryDefinition
   */
  async addCategory(
    viewId: string,
    categoryDefinition: ViewDefinitionCategory
  ) {
    return await this.invokeApiWithErrorHandling<ViewDefinition>(
      `/views/${viewId}/categories`,
      "PATCH",
      categoryDefinition
    );
  }

  /**
   * TODO: Please comment this method
   * @param viewId
   * @param categoryName
   */
  async deleteCategory(viewId: string, categoryName: string) {
    return await this.invokeApiWithErrorHandling<ViewDefinition>(
      `/views/${viewId}/categories/${categoryName}`,
      "DELETE"
    );
  }

  /**
   * TODO: Please comment this method
   * @param viewName
   */
  async listFieldsOfViews(viewName: string) {
    return await this.invokeApiWithErrorHandling<ViewDefinition[]>(
      `/views/fields/${viewName}`,
      "GET"
    );
  }

  /**
   * TODO: Please comment this method
   * @param schemaId
   * @param viewName
   * @param short
   */
  async fetchBySchemaAndName(
    schemaId: string,
    viewName: string,
    short: boolean = false
  ) {
    return await this.invokeApiWithErrorHandling<
      ViewDefinition | ShortViewDefinition
    >(`/views/schema/${schemaId}/name/${viewName}`, "GET");
  }

  /**
   * Returns views of the current company with a specific type
   * @param schemaId
   * @param viewType
   */
  async fetchBySchemaAndType(schemaId: string, viewType: ViewType) {
    return await this.invokeApiWithErrorHandling<{
      views: ViewDefinition[];
    }>(`/views/schema/${schemaId}/type/${viewType}`, "GET");
  }

  /**
   * Returns one or more view definitions by given types for a specific schema
   * @param schemaId
   * @param viewTypes
   */
  async fetchBySchemaAndTypes(schemaId: string, viewTypes: ViewType[]) {
    return await this.invokeApiWithErrorHandling<{
      views: ViewDefinition[];
    }>(`/views/schema/${schemaId}`, "GET", undefined, {
      params: { types: viewTypes },
      paramsSerializer: (params) => qs.stringify(params, { indices: false }),
    });
  }
}
