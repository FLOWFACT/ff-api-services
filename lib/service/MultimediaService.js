"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("../http");
var MultimediaService = /** @class */ (function (_super) {
    tslib_1.__extends(MultimediaService, _super);
    function MultimediaService() {
        return _super.call(this, http_1.APIMapping.multimediaService) || this;
    }
    /**
     * Update image binary of item with itemId
     * @param image
     * @param itemId
     * @returns the url and the new eTag
     */
    MultimediaService.prototype.updateImage = function (image, itemId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/items/" + itemId + "/file", 'POST', image, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @Deprecated
     * Upload a file for a entity
     *
     * @param file
     * @param entityId
     * @returns
     *      the url to request this file
     */
    MultimediaService.prototype.upload = function (file, entityId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var formData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = new FormData();
                        formData.append('file', file);
                        return [4 /*yield*/, this.invokeApi("/upload/" + entityId, 'POST', formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @Deprecated
     * Fetches the file
     *
     * @param fileUrl
     * @returns
     *      the url to request this file
     */
    MultimediaService.prototype.fetchFile = function (fileUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/download', 'GET', undefined, {
                            queryParams: {
                                uri: fileUrl
                            },
                            headers: {
                                Accept: 'application/octet-stream'
                            },
                            responseType: 'arraybuffer'
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Fetchs all media items of the current company and the given entity.
     * @param entityId
     * @param contentCategory
     */
    MultimediaService.prototype.fetchMediaItems = function (entityId, contentCategory) {
        if (contentCategory === void 0) { contentCategory = undefined; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/items/entities/" + entityId, 'GET', undefined, {
                            queryParams: {
                                contentCategory: contentCategory
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Fetchs a Multimedia item by his id
     * @param mediaItemId
     */
    MultimediaService.prototype.fetchMediaItem = function (mediaItemId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/items/" + mediaItemId, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes an multimedia item and removes alles assignments.
     * @param mediaItemId
     */
    MultimediaService.prototype.deleteMediaItem = function (mediaItemId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/items/" + mediaItemId, 'DELETE')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes a file from S3
     *
     * @returns well.. 200 OK?
     */
    MultimediaService.prototype.deleteFile = function (bucketType, entityId, filename) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi('/deleteFile', 'DELETE', {
                            bucketType: bucketType,
                            entityId: entityId,
                            filename: filename
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Fetches all available album definitions for a schema
     * @param schemaName
     */
    MultimediaService.prototype.fetchAlbums = function (schemaName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/albums/schemas/" + schemaName, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Fechtes a specific album
     * @param albumName
     * @param schemaName
     */
    MultimediaService.prototype.fetchAlbum = function (albumName, schemaName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/albums/" + albumName + "/schemas/" + schemaName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
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
    MultimediaService.prototype.uploadMediaItem = function (schemaName, entityId, file, onUploadProgress, albumAssignments) {
        if (albumAssignments === void 0) { albumAssignments = []; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var formData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formData = new FormData();
                        formData.append('file', file);
                        formData.append('albumAssignments', JSON.stringify(albumAssignments));
                        return [4 /*yield*/, this.invokeApi("/items/schemas/" + schemaName + "/entities/" + entityId, 'POST', formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                },
                                onUploadProgress: onUploadProgress
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
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
    MultimediaService.prototype.addLink = function (schemaName, entityId, url, albumAssignments) {
        if (albumAssignments === void 0) { albumAssignments = []; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var body;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = {
                            link: url,
                            albumAssignments: albumAssignments
                        };
                        return [4 /*yield*/, this.invokeApi("/items/schemas/" + schemaName + "/entities/" + entityId + "/link", 'POST', body)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates a property of a media item
     * @param mediaItemId
     * @param jsonPatch
     */
    MultimediaService.prototype.patchMediaItem = function (mediaItemId, jsonPatch) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/items/" + mediaItemId, 'PATCH', jsonPatch)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Fetches all assigned media item of a given album. Use the short parameter if you just want to get ids.
     * @param schemaName
     * @param entityId
     * @param albumName
     * @param short
     */
    MultimediaService.prototype.fetchAssignments = function (schemaName, entityId, albumName, short) {
        if (short === void 0) { short = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/assigned/schemas/" + schemaName + "/entities/" + entityId, 'GET', undefined, {
                            queryParams: {
                                albumName: albumName,
                                short: short
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get all unassigned media items of a given album. Use the short parameter if you just want to get ids.
     * @param entityId
     * @param albumName
     */
    MultimediaService.prototype.fetchUnassignedMediaItemIds = function (entityId, albumName) {
        if (albumName === void 0) { albumName = undefined; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/unassigned/entities/" + entityId, 'GET', undefined, {
                            queryParams: {
                                albumName: albumName,
                                short: true
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update assignments of the given album.
     * @param schemaName
     * @param entityId
     * @param albumName
     * @param assignments
     */
    MultimediaService.prototype.updateAssignments = function (schemaName, entityId, albumName, assignments) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/assigned/schemas/" + schemaName + "/entities/" + entityId, 'PUT', {
                            assignments: assignments
                        }, {
                            queryParams: {
                                albumName: albumName,
                                short: true
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get all albums where a item is assigned too
     * @param schemaName
     * @param entityId
     * @param mediaItemId
     */
    MultimediaService.prototype.fetchAssignedAlbums = function (schemaName, entityId, mediaItemId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/assigned/schemas/" + schemaName + "/entities/" + entityId + "/items/" + mediaItemId, 'GET')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This function assign items to an album and add these items intelligent to any possible category if no categories are set.
     * @param schemaName
     * @param entityId
     * @param albumName
     * @param mediaItemIds
     * @param categories
     */
    MultimediaService.prototype.assignMediaItems = function (schemaName, entityId, albumName, mediaItemIds, categories) {
        if (categories === void 0) { categories = []; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invokeApi("/assigned/schemas/" + schemaName + "/entities/" + entityId + "/items", 'PUT', {
                            albumName: albumName,
                            categories: categories,
                            multimediaItemIds: mediaItemIds
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return MultimediaService;
}(http_1.APIClient));
exports.MultimediaService = MultimediaService;
exports.default = new MultimediaService();
//# sourceMappingURL=MultimediaService.js.map