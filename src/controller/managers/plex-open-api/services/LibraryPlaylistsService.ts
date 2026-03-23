/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoolInt } from '../models/BoolInt';
import type { MediaContainer } from '../models/MediaContainer';
import type { MediaContainerWithPlaylistMetadata } from '../models/MediaContainerWithPlaylistMetadata';
import type { Metadata } from '../models/Metadata';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LibraryPlaylistsService {
    /**
     * Create a Playlist
     * Create a new playlist. By default the playlist is blank.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param accepts Indicates the client accepts the indicated media types
     * @param xPlexProduct The name of the client product
     * @param xPlexVersion The version of the client application
     * @param xPlexPlatform The platform of the client
     * @param xPlexPlatformVersion The version of the platform
     * @param xPlexDevice A relatively friendly name for the client device
     * @param xPlexModel A potentially less friendly identifier for the device model
     * @param xPlexDeviceVendor The device vendor
     * @param xPlexDeviceName A friendly name for the client
     * @param xPlexMarketplace The marketplace on which the client application is distributed
     * @param uri The content URI for what we're playing (e.g. `library://...`).
     * @param playQueueId To create a playlist from an existing play queue.
     * @returns MediaContainerWithPlaylistMetadata OK
     * @throws ApiError
     */
    public static createPlaylist(
        xPlexClientIdentifier: string,
        accepts: 'application/json' | 'application/xml' = 'application/xml',
        xPlexProduct?: string,
        xPlexVersion?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexDeviceVendor?: string,
        xPlexDeviceName?: string,
        xPlexMarketplace?: string,
        uri?: string,
        playQueueId?: number,
    ): CancelablePromise<MediaContainerWithPlaylistMetadata> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/playlists',
            headers: {
                'accepts': accepts,
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Product': xPlexProduct,
                'X-Plex-Version': xPlexVersion,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Device-Vendor': xPlexDeviceVendor,
                'X-Plex-Device-Name': xPlexDeviceName,
                'X-Plex-Marketplace': xPlexMarketplace,
            },
            query: {
                'uri': uri,
                'playQueueID': playQueueId,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Upload
     * Imports m3u playlists by passing a path on the server to scan for m3u-formatted playlist files, or a path to a single playlist file.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param accepts Indicates the client accepts the indicated media types
     * @param xPlexProduct The name of the client product
     * @param xPlexVersion The version of the client application
     * @param xPlexPlatform The platform of the client
     * @param xPlexPlatformVersion The version of the platform
     * @param xPlexDevice A relatively friendly name for the client device
     * @param xPlexModel A potentially less friendly identifier for the device model
     * @param xPlexDeviceVendor The device vendor
     * @param xPlexDeviceName A friendly name for the client
     * @param xPlexMarketplace The marketplace on which the client application is distributed
     * @param path Absolute path to a directory on the server where m3u files are stored, or the absolute path to a playlist file on the server. If the `path` argument is a directory, that path will be scanned for playlist files to be processed. Each file in that directory creates a separate playlist, with a name based on the filename of the file that created it. The GUID of each playlist is based on the filename. If the `path` argument is a file, that file will be used to create a new playlist, with the name based on the filename of the file that created it. The GUID of each playlist is based on the filename.
     * @param force Force overwriting of duplicate playlists. By default, a playlist file uploaded with the same path will overwrite the existing playlist. The `force` argument is used to disable overwriting. If the `force` argument is set to 0, a new playlist will be created suffixed with the date and time that the duplicate was uploaded.
     * @returns any OK
     * @throws ApiError
     */
    public static uploadPlaylist(
        xPlexClientIdentifier: string,
        accepts: 'application/json' | 'application/xml' = 'application/xml',
        xPlexProduct?: string,
        xPlexVersion?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexDeviceVendor?: string,
        xPlexDeviceName?: string,
        xPlexMarketplace?: string,
        path?: string,
        force?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/playlists/upload',
            headers: {
                'accepts': accepts,
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Product': xPlexProduct,
                'X-Plex-Version': xPlexVersion,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Device-Vendor': xPlexDeviceVendor,
                'X-Plex-Device-Name': xPlexDeviceName,
                'X-Plex-Marketplace': xPlexMarketplace,
            },
            query: {
                'path': path,
                'force': force,
            },
            errors: {
                403: `OK`,
                500: `The playlist could not be imported`,
            },
        });
    }
    /**
     * Delete a Playlist
     * Deletes a playlist by provided id
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playlistId The ID of the playlist
     * @param accepts Indicates the client accepts the indicated media types
     * @param xPlexProduct The name of the client product
     * @param xPlexVersion The version of the client application
     * @param xPlexPlatform The platform of the client
     * @param xPlexPlatformVersion The version of the platform
     * @param xPlexDevice A relatively friendly name for the client device
     * @param xPlexModel A potentially less friendly identifier for the device model
     * @param xPlexDeviceVendor The device vendor
     * @param xPlexDeviceName A friendly name for the client
     * @param xPlexMarketplace The marketplace on which the client application is distributed
     * @returns void
     * @throws ApiError
     */
    public static deletePlaylist(
        xPlexClientIdentifier: string,
        playlistId: number,
        accepts: 'application/json' | 'application/xml' = 'application/xml',
        xPlexProduct?: string,
        xPlexVersion?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexDeviceVendor?: string,
        xPlexDeviceName?: string,
        xPlexMarketplace?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/playlists/{playlistId}',
            path: {
                'playlistId': playlistId,
            },
            headers: {
                'accepts': accepts,
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Product': xPlexProduct,
                'X-Plex-Version': xPlexVersion,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Device-Vendor': xPlexDeviceVendor,
                'X-Plex-Device-Name': xPlexDeviceName,
                'X-Plex-Marketplace': xPlexMarketplace,
            },
            errors: {
                404: `Playlist not found (or user may not have permission to access playlist)`,
            },
        });
    }
    /**
     * Editing a Playlist
     * Edits a playlist in the same manner as [editing metadata](#tag/Provider/operation/metadataPutItem)
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playlistId The ID of the playlist
     * @param accepts Indicates the client accepts the indicated media types
     * @param xPlexProduct The name of the client product
     * @param xPlexVersion The version of the client application
     * @param xPlexPlatform The platform of the client
     * @param xPlexPlatformVersion The version of the platform
     * @param xPlexDevice A relatively friendly name for the client device
     * @param xPlexModel A potentially less friendly identifier for the device model
     * @param xPlexDeviceVendor The device vendor
     * @param xPlexDeviceName A friendly name for the client
     * @param xPlexMarketplace The marketplace on which the client application is distributed
     * @returns void
     * @throws ApiError
     */
    public static updatePlaylist(
        xPlexClientIdentifier: string,
        playlistId: number,
        accepts: 'application/json' | 'application/xml' = 'application/xml',
        xPlexProduct?: string,
        xPlexVersion?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexDeviceVendor?: string,
        xPlexDeviceName?: string,
        xPlexMarketplace?: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/playlists/{playlistId}',
            path: {
                'playlistId': playlistId,
            },
            headers: {
                'accepts': accepts,
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Product': xPlexProduct,
                'X-Plex-Version': xPlexVersion,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Device-Vendor': xPlexDeviceVendor,
                'X-Plex-Device-Name': xPlexDeviceName,
                'X-Plex-Marketplace': xPlexMarketplace,
            },
            errors: {
                404: `Playlist not found (or user may not have permission to access playlist)`,
            },
        });
    }
    /**
     * Get a playlist's generators
     * Get all the generators in a playlist
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playlistId The ID of the playlist
     * @param accepts Indicates the client accepts the indicated media types
     * @param xPlexProduct The name of the client product
     * @param xPlexVersion The version of the client application
     * @param xPlexPlatform The platform of the client
     * @param xPlexPlatformVersion The version of the platform
     * @param xPlexDevice A relatively friendly name for the client device
     * @param xPlexModel A potentially less friendly identifier for the device model
     * @param xPlexDeviceVendor The device vendor
     * @param xPlexDeviceName A friendly name for the client
     * @param xPlexMarketplace The marketplace on which the client application is distributed
     * @returns any OK
     * @throws ApiError
     */
    public static getPlaylistGenerators(
        xPlexClientIdentifier: string,
        playlistId: number,
        accepts: 'application/json' | 'application/xml' = 'application/xml',
        xPlexProduct?: string,
        xPlexVersion?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexDeviceVendor?: string,
        xPlexDeviceName?: string,
        xPlexMarketplace?: string,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            PlayQueueGenerator?: Array<{
                changedAt?: number;
                createdAt?: number;
                id?: number;
                playlistID?: number;
                /**
                 * The type of playlist generator.
                 *
                 * - -1: A smart playlist generator
                 * - 42: A optimized version generator
                 *
                 */
                type?: -1 | 42;
                updatedAt?: number;
                /**
                 * The URI indicating the search for this generator
                 */
                uri?: string;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/playlists/{playlistId}/generators',
            path: {
                'playlistId': playlistId,
            },
            headers: {
                'accepts': accepts,
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Product': xPlexProduct,
                'X-Plex-Version': xPlexVersion,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Device-Vendor': xPlexDeviceVendor,
                'X-Plex-Device-Name': xPlexDeviceName,
                'X-Plex-Marketplace': xPlexMarketplace,
            },
            errors: {
                404: `Playlist not found (or user may not have permission to access playlist) or generator not found`,
            },
        });
    }
    /**
     * Clearing a playlist
     * Clears a playlist, only works with dumb playlists. Returns the playlist.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playlistId The ID of the playlist
     * @param accepts Indicates the client accepts the indicated media types
     * @param xPlexProduct The name of the client product
     * @param xPlexVersion The version of the client application
     * @param xPlexPlatform The platform of the client
     * @param xPlexPlatformVersion The version of the platform
     * @param xPlexDevice A relatively friendly name for the client device
     * @param xPlexModel A potentially less friendly identifier for the device model
     * @param xPlexDeviceVendor The device vendor
     * @param xPlexDeviceName A friendly name for the client
     * @param xPlexMarketplace The marketplace on which the client application is distributed
     * @returns MediaContainerWithPlaylistMetadata OK
     * @throws ApiError
     */
    public static clearPlaylistItems(
        xPlexClientIdentifier: string,
        playlistId: number,
        accepts: 'application/json' | 'application/xml' = 'application/xml',
        xPlexProduct?: string,
        xPlexVersion?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexDeviceVendor?: string,
        xPlexDeviceName?: string,
        xPlexMarketplace?: string,
    ): CancelablePromise<MediaContainerWithPlaylistMetadata> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/playlists/{playlistId}/items',
            path: {
                'playlistId': playlistId,
            },
            headers: {
                'accepts': accepts,
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Product': xPlexProduct,
                'X-Plex-Version': xPlexVersion,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Device-Vendor': xPlexDeviceVendor,
                'X-Plex-Device-Name': xPlexDeviceName,
                'X-Plex-Marketplace': xPlexMarketplace,
            },
            errors: {
                400: `Bad Request`,
                404: `Playlist not found (or user may not have permission to access playlist)`,
            },
        });
    }
    /**
     * Adding to  a Playlist
     * Adds a generator to a playlist, same parameters as the POST above. With a dumb playlist, this adds the specified items to the playlist. With a smart playlist, passing a new `uri` parameter replaces the rules for the playlist. Returns the playlist.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playlistId The ID of the playlist
     * @param accepts Indicates the client accepts the indicated media types
     * @param xPlexProduct The name of the client product
     * @param xPlexVersion The version of the client application
     * @param xPlexPlatform The platform of the client
     * @param xPlexPlatformVersion The version of the platform
     * @param xPlexDevice A relatively friendly name for the client device
     * @param xPlexModel A potentially less friendly identifier for the device model
     * @param xPlexDeviceVendor The device vendor
     * @param xPlexDeviceName A friendly name for the client
     * @param xPlexMarketplace The marketplace on which the client application is distributed
     * @param uri The content URI for the playlist.
     * @param playQueueId The play queue to add to a playlist.
     * @returns MediaContainerWithPlaylistMetadata OK
     * @throws ApiError
     */
    public static addPlaylistItems(
        xPlexClientIdentifier: string,
        playlistId: number,
        accepts: 'application/json' | 'application/xml' = 'application/xml',
        xPlexProduct?: string,
        xPlexVersion?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexDeviceVendor?: string,
        xPlexDeviceName?: string,
        xPlexMarketplace?: string,
        uri?: string,
        playQueueId?: number,
    ): CancelablePromise<MediaContainerWithPlaylistMetadata> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/playlists/{playlistId}/items',
            path: {
                'playlistId': playlistId,
            },
            headers: {
                'accepts': accepts,
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Product': xPlexProduct,
                'X-Plex-Version': xPlexVersion,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Device-Vendor': xPlexDeviceVendor,
                'X-Plex-Device-Name': xPlexDeviceName,
                'X-Plex-Marketplace': xPlexMarketplace,
            },
            query: {
                'uri': uri,
                'playQueueID': playQueueId,
            },
            errors: {
                400: `Bad Request`,
                404: `Playlist not found (or user may not have permission to access playlist)`,
            },
        });
    }
    /**
     * Delete a Generator
     * Deletes an item from a playlist. Only works with dumb playlists.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playlistId The ID of the playlist
     * @param generatorId The generator item ID to delete.
     * @param accepts Indicates the client accepts the indicated media types
     * @param xPlexProduct The name of the client product
     * @param xPlexVersion The version of the client application
     * @param xPlexPlatform The platform of the client
     * @param xPlexPlatformVersion The version of the platform
     * @param xPlexDevice A relatively friendly name for the client device
     * @param xPlexModel A potentially less friendly identifier for the device model
     * @param xPlexDeviceVendor The device vendor
     * @param xPlexDeviceName A friendly name for the client
     * @param xPlexMarketplace The marketplace on which the client application is distributed
     * @returns MediaContainerWithPlaylistMetadata OK
     * @throws ApiError
     */
    public static deletePlaylistItem(
        xPlexClientIdentifier: string,
        playlistId: number,
        generatorId: number,
        accepts: 'application/json' | 'application/xml' = 'application/xml',
        xPlexProduct?: string,
        xPlexVersion?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexDeviceVendor?: string,
        xPlexDeviceName?: string,
        xPlexMarketplace?: string,
    ): CancelablePromise<MediaContainerWithPlaylistMetadata> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/playlists/{playlistId}/items/{generatorId}',
            path: {
                'playlistId': playlistId,
                'generatorId': generatorId,
            },
            headers: {
                'accepts': accepts,
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Product': xPlexProduct,
                'X-Plex-Version': xPlexVersion,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Device-Vendor': xPlexDeviceVendor,
                'X-Plex-Device-Name': xPlexDeviceName,
                'X-Plex-Marketplace': xPlexMarketplace,
            },
            errors: {
                400: `Bad Request`,
                404: `Playlist not found (or user may not have permission to access playlist) or generator not found`,
            },
        });
    }
    /**
     * Get a playlist generator
     * Get a playlist's generator.  Only used for optimized versions
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playlistId The ID of the playlist
     * @param generatorId The generator item ID to delete.
     * @param accepts Indicates the client accepts the indicated media types
     * @param xPlexProduct The name of the client product
     * @param xPlexVersion The version of the client application
     * @param xPlexPlatform The platform of the client
     * @param xPlexPlatformVersion The version of the platform
     * @param xPlexDevice A relatively friendly name for the client device
     * @param xPlexModel A potentially less friendly identifier for the device model
     * @param xPlexDeviceVendor The device vendor
     * @param xPlexDeviceName A friendly name for the client
     * @param xPlexMarketplace The marketplace on which the client application is distributed
     * @returns any OK
     * @throws ApiError
     */
    public static getPlaylistGenerator(
        xPlexClientIdentifier: string,
        playlistId: number,
        generatorId: number,
        accepts: 'application/json' | 'application/xml' = 'application/xml',
        xPlexProduct?: string,
        xPlexVersion?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexDeviceVendor?: string,
        xPlexDeviceName?: string,
        xPlexMarketplace?: string,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Item?: Array<{
                /**
                 * The composite thumbnail image path
                 */
                composite?: string;
                Device?: {
                    profile?: string;
                };
                id?: number;
                Location?: {
                    librarySectionID?: number;
                    uri?: string;
                };
                MediaSettings?: {
                    advancedSubtitles?: 'auto' | 'burn' | 'none' | 'sidecar' | 'embedded' | 'segmented';
                    audioBoost?: number;
                    audioChannelCount?: number;
                    autoAdjustQuality?: boolean;
                    autoAdjustSubtitle?: boolean;
                    directPlay?: boolean;
                    directStream?: boolean;
                    directStreamAudio?: boolean;
                    disableResolutionRotation?: boolean;
                    maxVideoBitrate?: number;
                    musicBitrate?: number;
                    peakBitrate?: number;
                    photoQuality?: number;
                    photoResolution?: string;
                    secondsPerSegment?: number;
                    subtitles?: 'auto' | 'burn' | 'none' | 'sidecar' | 'embedded' | 'segmented';
                    subtitleSize?: number;
                    videoBitrate?: number;
                    videoQuality?: number;
                    videoResolution?: string;
                };
                Policy?: {
                    scope?: 'all' | 'count';
                    /**
                     * True if only unwatched items are optimized
                     */
                    unwatched?: boolean;
                    /**
                     * If the scope is count, the number of items to optimize
                     */
                    value?: number;
                };
                Status?: {
                    itemsCompleteCount?: number;
                    itemsCount?: number;
                    itemsSuccessfulCount?: number;
                    state?: 'pending' | 'complete' | 'failed';
                    totalSize?: number;
                };
                target?: string;
                /**
                 * The tag of this generator's settings
                 */
                targetTagID?: number;
                title?: string;
                /**
                 * The type of this generator
                 */
                type?: -1 | 42;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/playlists/{playlistId}/items/{generatorId}',
            path: {
                'playlistId': playlistId,
                'generatorId': generatorId,
            },
            headers: {
                'accepts': accepts,
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Product': xPlexProduct,
                'X-Plex-Version': xPlexVersion,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Device-Vendor': xPlexDeviceVendor,
                'X-Plex-Device-Name': xPlexDeviceName,
                'X-Plex-Marketplace': xPlexMarketplace,
            },
            errors: {
                400: `Bad Request`,
                404: `Playlist not found (or user may not have permission to access playlist) or generator not found`,
            },
        });
    }
    /**
     * Modify a Generator
     * Modify a playlist generator.  Only used for optimizer
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playlistId The ID of the playlist
     * @param generatorId The generator item ID to modify.
     * @param accepts Indicates the client accepts the indicated media types
     * @param xPlexProduct The name of the client product
     * @param xPlexVersion The version of the client application
     * @param xPlexPlatform The platform of the client
     * @param xPlexPlatformVersion The version of the platform
     * @param xPlexDevice A relatively friendly name for the client device
     * @param xPlexModel A potentially less friendly identifier for the device model
     * @param xPlexDeviceVendor The device vendor
     * @param xPlexDeviceName A friendly name for the client
     * @param xPlexMarketplace The marketplace on which the client application is distributed
     * @param item Note: OpenAPI cannot properly render this query parameter example ([See GHI](https://github.com/OAI/OpenAPI-Specification/issues/1706)).  It should be rendered as:
     *
     * Item[type]=42&Item[title]=Jack-Jack Attack&Item[target]=&Item[targetTagID]=1&Item[locationID]=-1&Item[Location][uri]=library://82503060-0d68-4603-b594-8b071d54819e/item//library/metadata/146&Item[Policy][scope]=all&Item[Policy][value]=&Item[Policy][unwatched]=0
     *
     * @returns MediaContainerWithPlaylistMetadata OK
     * @throws ApiError
     */
    public static modifyPlaylistGenerator(
        xPlexClientIdentifier: string,
        playlistId: number,
        generatorId: number,
        accepts: 'application/json' | 'application/xml' = 'application/xml',
        xPlexProduct?: string,
        xPlexVersion?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexDeviceVendor?: string,
        xPlexDeviceName?: string,
        xPlexMarketplace?: string,
        item?: {
            Location?: {
                uri?: string;
            };
            locationID?: number;
            Policy?: {
                value?: number;
                scope?: 'all' | 'count';
                unwatched?: BoolInt;
            };
            target?: string;
            targetTagID?: number;
            title?: string;
            type?: number;
        },
    ): CancelablePromise<MediaContainerWithPlaylistMetadata> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/playlists/{playlistId}/items/{generatorId}',
            path: {
                'playlistId': playlistId,
                'generatorId': generatorId,
            },
            headers: {
                'accepts': accepts,
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Product': xPlexProduct,
                'X-Plex-Version': xPlexVersion,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Device-Vendor': xPlexDeviceVendor,
                'X-Plex-Device-Name': xPlexDeviceName,
                'X-Plex-Marketplace': xPlexMarketplace,
            },
            query: {
                'Item': item,
            },
            errors: {
                400: `Bad Request`,
                404: `Playlist not found (or user may not have permission to access playlist) or generator not found`,
            },
        });
    }
    /**
     * Get a playlist generator's items
     * Get a playlist generator's items
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playlistId The ID of the playlist
     * @param generatorId The generator item ID to delete.
     * @param accepts Indicates the client accepts the indicated media types
     * @param xPlexProduct The name of the client product
     * @param xPlexVersion The version of the client application
     * @param xPlexPlatform The platform of the client
     * @param xPlexPlatformVersion The version of the platform
     * @param xPlexDevice A relatively friendly name for the client device
     * @param xPlexModel A potentially less friendly identifier for the device model
     * @param xPlexDeviceVendor The device vendor
     * @param xPlexDeviceName A friendly name for the client
     * @param xPlexMarketplace The marketplace on which the client application is distributed
     * @returns any OK
     * @throws ApiError
     */
    public static getPlaylistGeneratorItems(
        xPlexClientIdentifier: string,
        playlistId: number,
        generatorId: number,
        accepts: 'application/json' | 'application/xml' = 'application/xml',
        xPlexProduct?: string,
        xPlexVersion?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexDeviceVendor?: string,
        xPlexDeviceName?: string,
        xPlexMarketplace?: string,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Metadata?: (Metadata & {
                /**
                 * The state of processing if this generator is part of an optimizer playlist
                 */
                processingState?: 'processed' | 'completed' | 'tombstoned' | 'disabled' | 'error' | 'pending';
                /**
                 * The error which could have occurred (or `good`)
                 */
                processingStateContext?: 'good' | 'sourceFileUnavailable' | 'sourceFileMetadataError' | 'clientProfileError' | 'ioError' | 'transcoderError' | 'unknownError' | 'mediaAnalysisError' | 'downloadFailed' | 'accessDenied' | 'cannotTranscode' | 'codecInstallError';
            });
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/playlists/{playlistId}/items/{generatorId}/items',
            path: {
                'playlistId': playlistId,
                'generatorId': generatorId,
            },
            headers: {
                'accepts': accepts,
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Product': xPlexProduct,
                'X-Plex-Version': xPlexVersion,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Device-Vendor': xPlexDeviceVendor,
                'X-Plex-Device-Name': xPlexDeviceName,
                'X-Plex-Marketplace': xPlexMarketplace,
            },
            errors: {
                400: `Bad Request`,
                404: `Playlist not found (or user may not have permission to access playlist) or generator not found`,
            },
        });
    }
    /**
     * Moving items in a playlist
     * Moves an item in a playlist. Only works with dumb playlists.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playlistId The ID of the playlist
     * @param playlistItemId The playlist item ID to move.
     * @param accepts Indicates the client accepts the indicated media types
     * @param xPlexProduct The name of the client product
     * @param xPlexVersion The version of the client application
     * @param xPlexPlatform The platform of the client
     * @param xPlexPlatformVersion The version of the platform
     * @param xPlexDevice A relatively friendly name for the client device
     * @param xPlexModel A potentially less friendly identifier for the device model
     * @param xPlexDeviceVendor The device vendor
     * @param xPlexDeviceName A friendly name for the client
     * @param xPlexMarketplace The marketplace on which the client application is distributed
     * @param after The playlist item ID to insert the new item after.  If not provided, item is moved to beginning of playlist
     * @returns MediaContainerWithPlaylistMetadata OK
     * @throws ApiError
     */
    public static movePlaylistItem(
        xPlexClientIdentifier: string,
        playlistId: number,
        playlistItemId: number,
        accepts: 'application/json' | 'application/xml' = 'application/xml',
        xPlexProduct?: string,
        xPlexVersion?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexDeviceVendor?: string,
        xPlexDeviceName?: string,
        xPlexMarketplace?: string,
        after?: number,
    ): CancelablePromise<MediaContainerWithPlaylistMetadata> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/playlists/{playlistId}/items/{playlistItemId}/move',
            path: {
                'playlistId': playlistId,
                'playlistItemId': playlistItemId,
            },
            headers: {
                'accepts': accepts,
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Product': xPlexProduct,
                'X-Plex-Version': xPlexVersion,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Device-Vendor': xPlexDeviceVendor,
                'X-Plex-Device-Name': xPlexDeviceName,
                'X-Plex-Marketplace': xPlexMarketplace,
            },
            query: {
                'after': after,
            },
            errors: {
                400: `Bad Request`,
                404: `Playlist not found (or user may not have permission to access playlist)`,
            },
        });
    }
    /**
     * Reprocess a generator
     * Make a generator reprocess (refresh)
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playlistId The ID of the playlist
     * @param generatorId The generator item ID to act on
     * @param metadataId The metadata item ID to act on
     * @param action The action to perform for this item on this optimizer queue
     * @param accepts Indicates the client accepts the indicated media types
     * @param xPlexProduct The name of the client product
     * @param xPlexVersion The version of the client application
     * @param xPlexPlatform The platform of the client
     * @param xPlexPlatformVersion The version of the platform
     * @param xPlexDevice A relatively friendly name for the client device
     * @param xPlexModel A potentially less friendly identifier for the device model
     * @param xPlexDeviceVendor The device vendor
     * @param xPlexDeviceName A friendly name for the client
     * @param xPlexMarketplace The marketplace on which the client application is distributed
     * @returns any OK
     * @throws ApiError
     */
    public static refreshPlaylist(
        xPlexClientIdentifier: string,
        playlistId: number,
        generatorId: number,
        metadataId: number,
        action: 'reprocess' | 'disable' | 'enable',
        accepts: 'application/json' | 'application/xml' = 'application/xml',
        xPlexProduct?: string,
        xPlexVersion?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexDeviceVendor?: string,
        xPlexDeviceName?: string,
        xPlexMarketplace?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/playlists/{playlistId}/items/{generatorId}/{metadataId}/{action}',
            path: {
                'playlistId': playlistId,
                'generatorId': generatorId,
                'metadataId': metadataId,
                'action': action,
            },
            headers: {
                'accepts': accepts,
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Product': xPlexProduct,
                'X-Plex-Version': xPlexVersion,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Device-Vendor': xPlexDeviceVendor,
                'X-Plex-Device-Name': xPlexDeviceName,
                'X-Plex-Marketplace': xPlexMarketplace,
            },
            errors: {
                400: `Bad Request`,
                404: `Playlist not found (or user may not have permission to access playlist) or generator or metadata item not found`,
            },
        });
    }
}
