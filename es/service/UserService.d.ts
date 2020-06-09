import { CognitoUserResponse, User, UserRole } from '@flowfact/types';
import { AxiosResponse } from 'axios';
import { APIClient } from '../http';
export declare class UserService extends APIClient {
    constructor();
    /**
     * Creates a user and adds it to either an existing company using the same domain, a new company during registration or the company of the current user.
     * @param companyID
     * @param mailAddress
     * @param firstName
     * @param lastName
     */
    createUser(companyID: string, mailAddress: string, firstName: string, lastName: string, useV2?: boolean): Promise<AxiosResponse<User>>;
    /**
     * Creates a user based on a user-model object. This is necessary to make the new createUser Ressource work for some cases.
     * @param user - The usermodel that is used to create the user.
     */
    createUserByModel(user: User): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     */
    fetchCurrentUser(): Promise<AxiosResponse<User>>;
    /**
     * TODO: Please comment this method
     */
    fetchAllUsersOfTheCompany(): Promise<AxiosResponse<User[]>>;
    /**
     * TODO: Please comment this method
     * @param image
     */
    postImage(image: Blob): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param userId
     * @param image
     */
    postImageForUser(userId: string, image: Blob): Promise<AxiosResponse<any>>;
    /**
     * Update the currently logged in user
     * @param user
     */
    updateUser(user: User, useV2?: boolean): Promise<AxiosResponse<any>>;
    /**
     * Update a user from the same company
     * @param userId
     * @param user
     */
    updateUserById(userId: string, user: User, useV2?: boolean): Promise<AxiosResponse<any>>;
    /**
     * Assignes roles to the user, must be called by an ADMIN user
     * @param userId
     * @param roles
     */
    assignRoles(userId: string, roles: UserRole[]): Promise<AxiosResponse<any>>;
    /**
     * Checks if any user has the given aliasMailAddress. Will throw an error if more then one user was found.
     * @param aliasMailAddress
     */
    isUserAlreadyKnown(aliasMailAddress: string): Promise<AxiosResponse<any>>;
    hasSsoOfType(aliasMailAddress: string, ssoType: string): Promise<AxiosResponse<boolean>>;
    /**
     * Searchs for users with the given aliasMailAddress and if we found exactly one, then we return his businessMailAddress
     * @param aliasMailAddress
     */
    resolveAliasMailAddress(aliasMailAddress: string): Promise<AxiosResponse<any>>;
    /**
     * TODO: Please comment this method
     * @param aliasMailAddress
     */
    fetchUserByAliasMailAddressInternal(aliasMailAddress: string): Promise<AxiosResponse<User>>;
    /**
     * TODO: Please comment this method
     * @param loginMailAddress
     */
    fetchUserByLoginInternal(loginMailAddress: string): Promise<AxiosResponse<User>>;
    /**
     * TODO: Please comment this method
     * @param userId
     */
    activateUser(userId: string, useV2?: boolean): Promise<AxiosResponse>;
    /**
     * TODO: Please comment this method
     * @param userId
     */
    deactivateUser(userId: string, useV2?: boolean): Promise<AxiosResponse>;
    /**
     * Checks the existence of a user by the given username.
     * This api resource combines the several checks against Cognito.
     */
    checkUsername(username: string, useV2?: boolean): Promise<AxiosResponse<CognitoUserResponse>>;
}
declare const _default: UserService;
export default _default;
declare const StatusMapping: {
    create: {
        CREATED: number;
        ALREADY_EXISTS: number;
        MANDANTORY_FIELD_NOT_FILLED: number;
        INTERNAL_SERVER_ERROR: number;
    };
    current: {
        NOT_FOUND: number;
        INTERNAL_SERVER_ERROR: number;
    };
};
export { StatusMapping, };
