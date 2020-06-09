import { APIClient } from '../http';
import { AxiosResponse } from 'axios';
import { Album, AlbumAssignmentRequest, MultimediaAssignments, MultimediaItem, UploadResponse } from '@flowfact/types';
import { MultimediaAssignment } from '@flowfact/types/src/Multimedia';
export declare class MultimediaService extends APIClient {
    constructor();
    /**
     * Update image binary of item with itemId
     * @param image
     * @param itemId
     * @returns the url and the new eTag
     */
    updateImage(image: FormData, itemId: string): Promise<AxiosResponse>;
    /**
     * @Deprecated
     * Upload a file for a entity
     *
     * @param file
     * @param entityId
     * @returns
     *      the url to request this file
     */
    upload(file: any, entityId: string): Promise<AxiosResponse>;
    /**
     * @Deprecated
     * Fetches the file
     *
     * @param fileUrl
     * @returns
     *      the url to request this file
     */
    fetchFile(fileUrl: string): Promise<AxiosResponse>;
    /**
     * Fetchs all media items of the current company and the given entity.
     * @param entityId
     * @param contentCategory
     */
    fetchMediaItems(entityId: string, contentCategory?: string | undefined): Promise<AxiosResponse<any>>;
    /**
     * Fetchs a Multimedia item by his id
     * @param mediaItemId
     */
    fetchMediaItem(mediaItemId: number): Promise<AxiosResponse<MultimediaItem>>;
    /**
     * Deletes an multimedia item and removes alles assignments.
     * @param mediaItemId
     */
    deleteMediaItem(mediaItemId: number): Promise<AxiosResponse<any>>;
    /**
     * Deletes a file from S3
     *
     * @returns well.. 200 OK?
     */
    deleteFile(bucketType: 'Image' | 'Document', entityId: string, filename: string): Promise<AxiosResponse>;
    /**
     * Fetches all available album definitions for a schema
     * @param schemaName
     */
    fetchAlbums(schemaName: string): Promise<AxiosResponse<Album[]>>;
    /**
     * Fechtes a specific album
     * @param albumName
     * @param schemaName
     */
    fetchAlbum(albumName: string, schemaName: string): Promise<AxiosResponse<Album>>;
    /**
     * Uploads a multimedia item.
     * @param schemaName
     *      The name of the current schema
     * @param entityId
     *      The uuid of the current entity
     * @param file
     *      The file that should be uploaded
     * @param onUploadProgress
     *      Callback function to get the current upload progress
     * @param albumAssignments
     *      Some album assignments.
     */
    uploadMediaItem(schemaName: string, entityId: string, file: any, onUploadProgress: (progressEvent: any) => void, albumAssignments?: AlbumAssignmentRequest[]): Promise<AxiosResponse<UploadResponse>>;
    /**
     * Adds an link to an entity
     * @param schemaName
     *      The name of the schema
     * @param entityId
     *      The uuid of the entity
     * @param url
     *      The url
     * @param albumAssignments
     */
    addLink(schemaName: string, entityId: string, url: string, albumAssignments?: AlbumAssignmentRequest[]): Promise<AxiosResponse<UploadResponse>>;
    /**
     * Updates a property of a media item
     * @param mediaItemId
     * @param jsonPatch
     */
    patchMediaItem(mediaItemId: number, jsonPatch: object[]): Promise<AxiosResponse<MultimediaItem>>;
    /**
     * Fetches all assigned media item of a given album. Use the short parameter if you just want to get ids.
     * @param schemaName
     * @param entityId
     * @param albumName
     * @param short
     */
    fetchAssignments(schemaName: string, entityId: string, albumName: string, short?: boolean): Promise<AxiosResponse<MultimediaAssignments>>;
    /**
     * Get all unassigned media items of a given album. Use the short parameter if you just want to get ids.
     * @param entityId
     * @param albumName
     */
    fetchUnassignedMediaItemIds(entityId: string, albumName?: string | undefined): Promise<AxiosResponse<{
        unassignedIds: number[];
    }>>;
    /**
     * Update assignments of the given album.
     * @param schemaName
     * @param entityId
     * @param albumName
     * @param assignments
     */
    updateAssignments(schemaName: string, entityId: string, albumName: string, assignments: {
        [key: string]: MultimediaAssignment[];
    }): Promise<AxiosResponse<MultimediaAssignments>>;
    /**
     * Get all albums where a item is assigned too
     * @param schemaName
     * @param entityId
     * @param mediaItemId
     */
    fetchAssignedAlbums(schemaName: string, entityId: string, mediaItemId: number): Promise<AxiosResponse<{
        albums: Album;
    }>>;
    /**
     * This function assign items to an album and add these items intelligent to any possible category if no categories are set.
     * @param schemaName
     * @param entityId
     * @param albumName
     * @param mediaItemIds
     * @param categories
     */
    assignMediaItems(schemaName: string, entityId: string, albumName: string, mediaItemIds: Number[], categories?: string[]): Promise<AxiosResponse>;
}
declare const _default: MultimediaService;
export default _default;
