/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaContainerWithMetadata } from '../models/MediaContainerWithMetadata';
import type { MediaContainerWithPlaylistMetadata } from '../models/MediaContainerWithPlaylistMetadata';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PlaylistService {
    /**
     * List playlists
     * Gets a list of playlists and playlist folders for a user. General filters are permitted, such as `sort=lastViewedAt:desc`. A flat playlist list can be retrieved using `type=15` to limit the collection to just playlists.
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
     * @param playlistType Limit to a type of playlist
     * @param smart Whether this is a smart collection/playlist
     * @returns MediaContainerWithPlaylistMetadata OK
     * @throws ApiError
     */
    public static listPlaylists(
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
        playlistType?: 'audio' | 'video' | 'photo',
        smart?: boolean,
    ): CancelablePromise<MediaContainerWithPlaylistMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
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
                'playlistType': playlistType,
                'smart': smart,
            },
        });
    }
    /**
     * Retrieve Playlist
     * Gets detailed metadata for a playlist. A playlist for many purposes (rating, editing metadata, tagging), can be treated like a regular metadata item:
     * Smart playlist details contain the `content` attribute. This is the content URI for the generator. This can then be parsed by a client to provide smart playlist editing.
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
    public static getPlaylist(
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
            method: 'GET',
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
     * Retrieve Playlist Contents
     * Gets the contents of a playlist. Should be paged by clients via standard mechanisms. By default leaves are returned (e.g. episodes, movies). In order to return other types you can use the `type` parameter. For example, you could use this to display a list of recently added albums vis a smart playlist. Note that for dumb playlists, items have a `playlistItemID` attribute which is used for deleting or moving items.
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
     * @param type The metadata types of the item to return.  Values past the first are only used in fetching items from the background processing playlist.
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static getPlaylistItems(
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
        type?: Array<number>,
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
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
                'type': type,
            },
            errors: {
                404: `Playlist not found (or user may not have permission to access playlist)`,
            },
        });
    }
}
