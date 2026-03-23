/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoolInt } from '../models/BoolInt';
import type { MediaContainer } from '../models/MediaContainer';
import type { MediaContainerWithPlaylistMetadata } from '../models/MediaContainerWithPlaylistMetadata';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PlayQueueService {
    /**
     * Create a play queue
     * Makes a new play queue for a device. The source of the playqueue can either be a URI, or a playlist. The response is a media container with the initial items in the queue. Each item in the queue will be a regular item but with `playQueueItemID` - a unique ID since the queue could have repeated items with the same `ratingKey`.
     * Note: Either `uri` or `playlistID` must be specified
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param type The type of play queue to create
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
     * @param uri The content URI for what we're playing.
     * @param playlistId the ID of the playlist we're playing.
     * @param key The key of the first item to play, defaults to the first in the play queue.
     * @param shuffle Whether to shuffle the playlist, defaults to 0.
     * @param repeat If the PQ is bigger than the window, fill any empty space with wraparound items, defaults to 0.
     * @param continuous Whether to create a continuous play queue (e.g. from an episode), defaults to 0.
     * @param extrasPrefixCount Number of trailers to prepend a movie with not including the pre-roll. If omitted the pre-roll will not be returned in the play queue. When resuming a movie `extrasPrefixCount` should be omitted as a parameter instead of passing 0.
     * @param recursive Only applies to queues of type photo, whether to retrieve all descendent photos from an album or section, defaults to 1.
     * @param onDeck Only applies to queues of type show or seasons, whether to return a queue that is started on the On Deck episode if one exists. Otherwise begins the play queue on the beginning of the show or season.
     * @returns any OK
     * @throws ApiError
     */
    public static createPlayQueue(
        xPlexClientIdentifier: string,
        type: 'audio' | 'video' | 'photo',
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
        playlistId?: number,
        key?: string,
        shuffle?: BoolInt,
        repeat?: BoolInt,
        continuous?: BoolInt,
        extrasPrefixCount?: number,
        recursive?: BoolInt,
        onDeck?: BoolInt,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            /**
             * The ID of the play queue, which is used in subsequent requests.
             */
            playQueueID?: number;
            /**
             * Defines where the "Up Next" region starts
             */
            playQueueLastAddedItemID?: string;
            /**
             * The queue item ID of the currently selected  item.
             */
            playQueueSelectedItemID?: number;
            /**
             * The offset of the selected item in the play queue, from the beginning of the queue.
             */
            playQueueSelectedItemOffset?: number;
            /**
             * The metadata item ID of the currently selected item (matches `ratingKey` attribute in metadata item if the media provider is a library).
             */
            playQueueSelectedMetadataItemID?: number;
            /**
             * Whether or not the queue is shuffled.
             */
            playQueueShuffled?: boolean;
            /**
             * The original URI used to create the play queue.
             */
            playQueueSourceURI?: string;
            /**
             * The total number of items in the play queue.
             */
            playQueueTotalCount?: number;
            /**
             * The version of the play queue. It increments every time a change is made to the play queue to assist clients in knowing when to refresh.
             */
            playQueueVersion?: number;
        });
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/playQueues',
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
                'playlistID': playlistId,
                'type': type,
                'key': key,
                'shuffle': shuffle,
                'repeat': repeat,
                'continuous': continuous,
                'extrasPrefixCount': extrasPrefixCount,
                'recursive': recursive,
                'onDeck': onDeck,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Retrieve a play queue
     * Retrieves the play queue, centered at current item. This can be treated as a regular container by play queue-oblivious clients, but they may wish to request a large window onto the queue since they won't know to refresh.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playQueueId The ID of the play queue.
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
     * @param own If the server should transfer ownership to the requesting client (used in remote control scenarios).
     * @param center The play queue item ID for the center of the window - this doesn't change the current selected item.
     * @param window How many items on each side of the center of the window
     * @param includeBefore Whether to include the items before the center (if 0, center is not included either), defaults to 1.
     * @param includeAfter Whether to include the items after the center (if 0, center is not included either), defaults to 1.
     * @returns MediaContainerWithPlaylistMetadata OK
     * @throws ApiError
     */
    public static getPlayQueue(
        xPlexClientIdentifier: string,
        playQueueId: number,
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
        own?: BoolInt,
        center?: string,
        window?: number,
        includeBefore?: BoolInt,
        includeAfter?: BoolInt,
    ): CancelablePromise<MediaContainerWithPlaylistMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/playQueues/{playQueueId}',
            path: {
                'playQueueId': playQueueId,
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
                'own': own,
                'center': center,
                'window': window,
                'includeBefore': includeBefore,
                'includeAfter': includeAfter,
            },
            errors: {
                400: `Bad Request`,
                404: `Play queue not found`,
            },
        });
    }
    /**
     * Add a generator or playlist to a play queue
     * Adds an item to a play queue (e.g. party mode). Increments the version of the play queue. Takes the following parameters (`uri` and `playlistID` are mutually exclusive). Returns the modified play queue.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playQueueId The ID of the play queue.
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
     * @param uri The content URI for what we're adding to the queue.
     * @param playlistId The ID of the playlist to add to the playQueue.
     * @param next Play this item next (defaults to 0 - queueing at the end of manually queued items).
     * @returns MediaContainerWithPlaylistMetadata OK
     * @throws ApiError
     */
    public static addToPlayQueue(
        xPlexClientIdentifier: string,
        playQueueId: number,
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
        playlistId?: string,
        next?: BoolInt,
    ): CancelablePromise<MediaContainerWithPlaylistMetadata> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/playQueues/{playQueueId}',
            path: {
                'playQueueId': playQueueId,
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
                'playlistID': playlistId,
                'next': next,
            },
            errors: {
                400: `Bad Request`,
                404: `Play queue not found`,
            },
        });
    }
    /**
     * Clear a play queue
     * Deletes all items in the play queue, and increases the version of the play queue.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playQueueId The ID of the play queue.
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
    public static clearPlayQueue(
        xPlexClientIdentifier: string,
        playQueueId: number,
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
            url: '/playQueues/{playQueueId}/items',
            path: {
                'playQueueId': playQueueId,
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
        });
    }
    /**
     * Reset a play queue
     * Reset a play queue to the first item being the current item
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playQueueId The ID of the play queue.
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
    public static resetPlayQueue(
        xPlexClientIdentifier: string,
        playQueueId: number,
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
            method: 'PUT',
            url: '/playQueues/{playQueueId}/reset',
            path: {
                'playQueueId': playQueueId,
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
                404: `Play queue not found`,
            },
        });
    }
    /**
     * Shuffle a play queue
     * Shuffle a play queue (or reshuffles if already shuffled). The currently selected item is maintained. Note that this is currently only supported for play queues *without* an Up Next area. Returns the modified play queue.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playQueueId The ID of the play queue.
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
    public static shuffle(
        xPlexClientIdentifier: string,
        playQueueId: number,
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
            method: 'PUT',
            url: '/playQueues/{playQueueId}/shuffle',
            path: {
                'playQueueId': playQueueId,
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
                404: `Play queue not found or current item not found`,
            },
        });
    }
    /**
     * Unshuffle a play queue
     * Unshuffles a play queue and restores "natural order". Note that this is currently only supported for play queues *without* an Up Next area. Returns the modified play queue.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playQueueId The ID of the play queue.
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
    public static unshuffle(
        xPlexClientIdentifier: string,
        playQueueId: number,
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
            method: 'PUT',
            url: '/playQueues/{playQueueId}/unshuffle',
            path: {
                'playQueueId': playQueueId,
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
                404: `Play queue not found or current item not found`,
            },
        });
    }
    /**
     * Delete an item from a play queue
     * Deletes an item in a play queue. Increments the version of the play queue. Returns the modified play queue.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playQueueId The ID of the play queue.
     * @param playQueueItemId The play queue item ID to delete.
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
    public static deletePlayQueueItem(
        xPlexClientIdentifier: string,
        playQueueId: number,
        playQueueItemId: number,
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
            url: '/playQueues/{playQueueId}/items/{playQueueItemId}',
            path: {
                'playQueueId': playQueueId,
                'playQueueItemId': playQueueItemId,
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
                404: `Play queue not found`,
            },
        });
    }
    /**
     * Move an item in a play queue
     * Moves an item in a play queue, and increases the version of the play queue. Returns the modified play queue.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param playQueueId The ID of the play queue.
     * @param playQueueItemId The play queue item ID to delete.
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
     * @param after The play queue item ID to insert the new item after. If not present, moves to the beginning.
     * @returns MediaContainerWithPlaylistMetadata OK
     * @throws ApiError
     */
    public static movePlayQueueItem(
        xPlexClientIdentifier: string,
        playQueueId: number,
        playQueueItemId: number,
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
            url: '/playQueues/{playQueueId}/items/{playQueueItemId}/move',
            path: {
                'playQueueId': playQueueId,
                'playQueueItemId': playQueueItemId,
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
                404: `Play queue or queue item not found`,
            },
        });
    }
}
