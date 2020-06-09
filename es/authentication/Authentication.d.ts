import { AuthenticationData, CheckUsernameResult } from '@flowfact/types';
import { CognitoUser, CognitoUserSession, ISignUpResult } from 'amazon-cognito-identity-js';
declare class Authentication {
    private static instance;
    constructor();
    reconfigure(config: object): {};
    /**
     * Logins a user with the given username and password.
     * This function returns a promise.
     * @param username
     * @param password
     */
    login(username: string, password: string): Promise<any>;
    /**
     * Logout the current user.
     * @param global
     *      if true, then the user will be globally log out on all devices.
     */
    logout(global?: boolean): Promise<any>;
    /**
     * Directly insert the cognito token into the storage
     * @param authenticationData
     */
    loginWithTokens(authenticationData: AuthenticationData): Promise<CognitoUserSession>;
    /**
     * Registers a new user with the given username, password and email.
     * If the registration was successful, the user will receive a email with a code.
     * @param username
     * @param password
     * @param email
     */
    register(username: string, password: string, email: string): Promise<ISignUpResult>;
    /**
     * This method confirms the registration of a user.
     * @param code
     * @param username
     */
    confirmRegistration(code: string, username: string): Promise<any>;
    /**
     * This method sends a new email to the user with a new confirm code.
     * @param username
     */
    resendConfirmationCode(username: string): Promise<string>;
    /**
     * Check if a username already exists in cognito or not.
     * @param username
     */
    checkUsername(username: string): Promise<CheckUsernameResult>;
    /**
     * Set the user into the "forgot password"-mode. The user will receive an email with a confirm code.
     * @param username
     */
    forgotPassword(username: string): Promise<any>;
    changePassword(oldPassword: string, newPassword: string): Promise<any>;
    confirmPassword(code: string, username: string, newPassword: string): Promise<void>;
    /**
     * Returns the current user if the user has logged in before.
     */
    getCurrentUser(): Promise<CognitoUser>;
    /**
     * Returns the current session if a user is logged in. The session contains
     * all cognito tokens and more.
     */
    getCurrentSession(): Promise<CognitoUserSession>;
    getIdToken(): Promise<string>;
    getAccessToken(): Promise<string>;
    readonly stage: string;
    readonly region: string;
    readonly stageSettings: any;
}
declare const _default: Authentication;
export default _default;
