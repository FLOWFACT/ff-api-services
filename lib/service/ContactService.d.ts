import { Contact, ContactGroupResponse, SearchResultOfContact } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class ContactService extends APIClient {
    constructor();
    /**
     * Retrieves a contact
     * @param email
     * @param firstName
     * @param lastName
     */
    fetchContact(email: string, firstName?: string, lastName?: string): Promise<AxiosResponse<Contact>>;
    /**
     * Creates a contact
     * @param {Contact} contact
     */
    createContact(contact: Contact): Promise<AxiosResponse<string>>;
    /**
     * TODO: Please comment this method
     * @param contact
     * @param schemaId
     */
    createContactInSpecificSchema(contact: Contact, schemaId: string): Promise<AxiosResponse<string>>;
    /**
     * TODO: Please comment this method
     * @param {Contact} contact
     */
    updateContact(contact: Contact): Promise<AxiosResponse<Contact>>;
    /**
     * Updates a contact using it's id
     * @param id - The id of the contact that needs to be updated
     * @param {Contact} contact
     */
    updateContactById(id: string, contact: Contact): Promise<AxiosResponse<Contact>>;
    /**
     * TODO: Please comment this method
     * @param contact
     * @param id
     * @param schemaId
     */
    updateContactByIdInSpecificSchema(contact: Contact, id: string, schemaId: string): Promise<AxiosResponse<string>>;
    /**
     * TODO: Please comment this method
     * @param email
     * @param firstName
     * @param lastName
     */
    fetchContactGroup(email: string, firstName?: string, lastName?: string): Promise<AxiosResponse<ContactGroupResponse>>;
    /**
     * TODO: Please comment this method
     * @param id
     */
    fetchContactById(id: string): Promise<AxiosResponse<Contact>>;
    /**
     * TODO: Please comment this method
     * @param id
     * @param schemaId
     */
    fetchContactByIdInSpecificSchema(id: string, schemaId: string): Promise<AxiosResponse<Contact>>;
    /**
     * TODO: Please comment this method
     * @param id
     */
    deleteContactById(id: string): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param id
     * @param schemaId
     */
    deleteContactByIdInSpecificSchema(id: string, schemaId: string): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param flowDsl
     * @param maxContacts
     */
    searchForContactsWithCustomSearch(flowDsl: any, maxContacts: number): Promise<AxiosResponse<SearchResultOfContact>>;
    /**
     * TODO: Please comment this method
     * @param flowDsl
     * @param schemaId
     * @param maxContacts
     */
    searchForContactsInSpecificShemaWithCustomSearch(flowDsl: any, schemaId: string, maxContacts: number): Promise<AxiosResponse<SearchResultOfContact>>;
    /**
     * TODO: Please comment this method
     * @param pastedAddress
     */
    parsePastedAddress(pastedAddress: string): Promise<AxiosResponse<Contact>>;
}
declare const _default: ContactService;
export default _default;
