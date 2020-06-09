/**
 * This storage can be used from node and other javascript products.
 * Read more about the storage here: https://aws-amplify.github.io/docs/js/authentication#managing-security-tokens
 */
export default class CustomStorage {
    static setItem(key: string, value: string): string;
    static getItem(key: string): string;
    static removeItem(key: string): void;
    static clear(): void;
}
