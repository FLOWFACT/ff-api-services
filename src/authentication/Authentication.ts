import { AuthenticationData, CheckUsernameResult } from '@flowfact/types';
import { CognitoUser, CognitoUserSession, ISignUpResult } from 'amazon-cognito-identity-js';
import Amplify, { Auth } from 'aws-amplify';
import EnvironmentManagement, { StageTypes } from '../util/EnvironmentManagement';
import CustomStorage from './CustomStorage';

const region = 'eu-central-1';
const stageSettings = {
    development: {
        identityPoolId: 'eu-central-1:079515e9-300a-42c6-b608-930f84fed704',
        userPoolId: 'eu-central-1_8kCTHzIgR',
        clientId: '4gql86evdegfa9otnpa30rf47i',
    },
    staging: {
        identityPoolId: 'eu-central-1:a344597d-b532-4b94-81ef-5d31bf56e504',
        userPoolId: 'eu-central-1_8R899yNNH',
        clientId: '7qpfm5e3625hrf5mpieph9cu2a',
    },
    production: {
        identityPoolId: 'eu-central-1:2b79058f-3250-492a-a7a8-91bb06911ae9',
        userPoolId: 'eu-central-1_RdHzlSKS0',
        clientId: '57brn8csff678o6aee3k1ia00n',
    },
};

class Authentication {

    // The authentication class should just have one instance, so we use the singleton pattern here.
    private static instance: Authentication;

    constructor() {
        if (Authentication.instance) {
            return Authentication.instance;
        }

        const stage = EnvironmentManagement.getStage() === StageTypes.LOCAL
                      ? StageTypes.DEVELOPMENT : EnvironmentManagement.getStage();

        // Configure amplify auth
        Amplify.configure({
            storage: CustomStorage,
            Auth: {
                region: region,
                userPoolId: stageSettings[stage].userPoolId || stageSettings.development.userPoolId,
                userPoolWebClientId: stageSettings[stage].clientId || stageSettings.development.clientId,
            },
        });

        Authentication.instance = this;
    }

    /**
     * Logins a user with the given username and password.
     * This function returns a promise.
     * @param username
     * @param password
     */
    public async login(username: string, password: string) {
        return Auth.signIn(username, password);
    }

    /**
     * Logout the current user.
     * @param global
     *      if true, then the user will be globally log out on all devices.
     */
    public async logout(global: boolean = false) {
        return Auth.signOut({
            global: global,
        });
    }

    /**
     * Directly insert the cognito token into the storage
     * @param authenticationData
     */
    public loginWithTokens(authenticationData: AuthenticationData): Promise<CognitoUserSession> {
        let stage = EnvironmentManagement.getStage();
        if (stage === StageTypes.LOCAL) {
            stage = StageTypes.DEVELOPMENT;
        }

        // set the new tokens in the store
        const key = `CognitoIdentityServiceProvider.${stageSettings[stage].clientId}`;
        localStorage.setItem(`${key}.LastAuthUser`, authenticationData.username);
        localStorage.setItem(`${key}.${authenticationData.username}.idToken`, authenticationData.idToken);
        localStorage.setItem(`${key}.${authenticationData.username}.refreshToken`, authenticationData.refreshToken);
        localStorage.setItem(`${key}.${authenticationData.username}.accessToken`, authenticationData.accessToken);

        return this.getCurrentSession();
    }

    /**
     * Registers a new user with the given username, password and email.
     * If the registration was successful, the user will receive a email with a code.
     * @param username
     * @param password
     * @param email
     */
    public async register(username: string, password: string, email: string): Promise<ISignUpResult> {
        return await Auth.signUp({
            username: username,
            password: password,
            validationData: [],
            attributes: {
                email: email,
            },
        });
    }

    /**
     * This method confirms the registration of a user.
     * @param code
     * @param username
     */
    public async confirmRegistration(code: string, username: string) {
        return await Auth.confirmSignUp(username, code, {
            // Force user confirmation irrespective of existing alias
            forceAliasCreation: true,
        });
    }

    /**
     * This method sends a new email to the user with a new confirm code.
     * @param username
     */
    public async resendConfirmationCode(username: string) {
        return await Auth.resendSignUp(username);
    }

    /**
     * Check if a username already exists in cognito or not.
     * @param username
     */
    public async checkUsername(username: string): Promise<CheckUsernameResult> {

        try {
            const code = '000000';
            await Auth.confirmSignUp(username, code, {
                // If set to False, the API will throw an AliasExistsException error if the phone number/email used already exists as an alias with a different user
                forceAliasCreation: false
            });
            return {
                exists: true,
                statusCode: null,
            };
        } catch (error) {
            const code = error.code;
            console.warn(error);
            switch (code) {

                case 'AliasExistsException':
                case 'CodeMismatchException':
                case 'ExpiredCodeException':
                case 'NotAuthorizedException':
                case 'PasswordResetRequiredException':
                case 'UserNotConfirmedException':
                    return {
                        exists: true,
                        statusCode: code,
                    };
                default:
                    return {
                        exists: false,
                        statusCode: code,
                    };
            }
        }
    }

    /**
     * Set the user into the "forgot password"-mode. The user will receive an email with a confirm code.
     * @param username
     */
    public forgotPassword(username: string) {
        return Auth.forgotPassword(username);
    }

    public async changePassword(oldPassword: string, newPassword: string): Promise<any> {
        const currentUser = await this.getCurrentUser();
        if (currentUser) {
            return Auth.changePassword(currentUser, oldPassword, newPassword);
        }
    }

    public confirmPassword(code: string, username: string, newPassword: string) {
        return Auth.forgotPasswordSubmit(username, code, newPassword);
    }

    /**
     * Returns the current user if the user has logged in before.
     */
    public async getCurrentUser(): Promise<CognitoUser> {
        return await Auth.currentAuthenticatedUser();
    }

    /**
     * Returns the current session if a user is logged in. The session contains
     * all cognito tokens and more.
     */
    public async getCurrentSession(): Promise<CognitoUserSession> {
        return await Auth.currentSession();
    }

    public async getIdToken() {
        const currentSession = await this.getCurrentSession();
        if (!currentSession) {
            throw new Error('Could not get the current session. Are you logged in?');
        }

        const idToken = currentSession!.getIdToken()!.getJwtToken();
        if (!idToken) {
            throw new Error('Could not get the id token. Are you logged in?');
        }

        return idToken;
    }

    public async getAccessToken() {
        const currentSession = await this.getCurrentSession();
        if (!currentSession) {
            throw new Error('Could not get the current session. Are you logged in?');
        }

        const accessToken = currentSession!.getAccessToken()!.getJwtToken();
        if (!accessToken) {
            throw new Error('Could not get the access token. Are you logged in?');
        }

        return accessToken;
    }
}

export default new Authentication();
