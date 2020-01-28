import { APIClient, APIMapping } from '../http';
import { AclGroup, AclGroupType, AcpTemplate } from '@flowfact/types';

class AclGroupServiceRest extends APIClient {

    constructor() {
        super(APIMapping.aclGroupService);
    }

    /**
     * This method fetches a group. If a groupType is provided, only groups with this type will be returned
     * @param groupType
     */
    async fetchGroups(groupType?: AclGroupType) {
        return this.invokeApi('/groups', 'GET', undefined, {
            queryParams: {
                groupType: groupType
            }
        });
    }

    /**
     * Create a new acl group
     * @param group
     */
    async createGroup(group: AclGroup) {
        return this.invokeApi('/groups', 'POST', group);
    }

    /**
     * Updates a group by the id
     * @param group
     */
    async updateGroup(group: AclGroup) {
        return this.invokeApi(`/groups/${group.id}`, 'PUT', group);
    }

    /**
     * Deletes a group by the id
     * @param group
     */
    async deleteGroup(group: AclGroup) {
        return this.invokeApi(`/groups/${group.id}`, 'DELETE', group);
    }

    /**
     * Fetch available templates
     */
    async fetchAcpTemplates() {
        return this.invokeApi(`/templates`, 'GET');
    }

    /**
     * Create template
     * @param template
     */
    async createAcpTemplate(template: AcpTemplate) {
        return this.invokeApi(`/templates`, 'POST', template);
    }

    /**
     * Updates template
     * @param template
     */
    async updateAcpTemplate(template: AcpTemplate) {
        return this.invokeApi(`/templates`, 'PUT', template);
    }

    /**
     * Fetches a template by Id
     * @param templateId
     */
    async fetchAcpTemplateById(templateId: string) {
        return this.invokeApi(`/templates/${templateId}`, 'GET');
    }

    /**
     * Updates template by Id
     * @param templateId
     * @param template
     */
    async updateAcpTemplateById(templateId: string, template: AcpTemplate) {
        return this.invokeApi(`/templates/${templateId}`, 'PUT', template);
    }

    /**
     * Deletes template
     * @param templateId
     */
    async deleteAcpTemplate(templateId: string) {
        return this.invokeApi(`/templates/${templateId}`, 'DELETE');
    }

}

export default new AclGroupServiceRest();
