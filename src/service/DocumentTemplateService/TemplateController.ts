
import { APIClient, APIMapping } from '../../http';
import { JSONPatch, ReadTemplate, WriteTemplate } from './DocumentTemplateService.Types';

export class TemplateController extends APIClient {

    constructor() {
        super(APIMapping.documentTemplateService);
    }

    /**
     * Fetches all available templates
     */
    async fetchAllTemplates() {
        return this.invokeApiWithErrorHandling<{ entries: ReadTemplate[] }>('/templates', 'GET');
    }

    /**
     * Creates a new template and uploads the given file.
     * @param file
     * @param data
     */
    async createTemplate(file: File, data: WriteTemplate) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('data', JSON.stringify(data));

        return this.invokeApiWithErrorHandling<ReadTemplate>('/templates', 'POST', formData, {
            headers: {
                'Content-Type': 'multipart/*'
            }
        });
    }

    /**
     * Updates a template and the file
     * @param file
     * @param data
     */
    async updateTemplate(file: File, data: WriteTemplate) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('data', JSON.stringify(data));

        return this.invokeApiWithErrorHandling<ReadTemplate>(`/templates/${data.name}`, 'PUT', formData,  {
            headers: {
                'Content-Type': 'multipart/*'
            }
        });
    }

    /**
     * Updates a template without updating the file
     * @param data
     */
    async updateTemplateWithoutFile(data: WriteTemplate) {
        return this.invokeApiWithErrorHandling<ReadTemplate>(`/templates/${data.name}`, 'PUT', data);
    }

    /**
     * Deletes an existing template by the name.
     * @param name
     *  The name of the template
     */
    async deleteTemplate(name: string) {
        return this.invokeApiWithErrorHandling(`/templates/${name}`, 'DELETE');
    }

    /**
     * Updates a file of a template
     * @param name
     * @param file
     */
    async updateTemplateFile(name: string, file: File) {
        const formData = new FormData();
        formData.append('file', file);

        return this.invokeApiWithErrorHandling(`/templates/${name}/file`, 'PUT', formData, {
            headers: {
                'Content-Type': 'multipart/*'
            }
        });
    }

    /**
     * Downloads a file.
     * @param name
     *  The name of the template
     */
    async downloadTemplate(name: string) {
        return this.invokeApiWithErrorHandling(`/templates/${name}/file`, 'GET', undefined, {
            headers: {
                Accept: 'application/octet-stream'
            },
            responseType: 'arraybuffer'
        });
    }

    /**
     * Updates some fields for the template
     * @param name
     *  The name of the template
     * @param jsonPatch
     */
    async patchTemplate(name: string, jsonPatch: JSONPatch[]) {
        return this.invokeApiWithErrorHandling(`/templates/${name}`, 'PATCH', jsonPatch);
    }

    /**
     * Duplicates a template by their name
     * @param name
     *     The name of the templates that should be duplicated
     */
    async duplicateTemplate(name: string) {
        return this.invokeApiWithErrorHandling<ReadTemplate>(`/templates/${name}/duplicate`, 'POST');
    }
}
