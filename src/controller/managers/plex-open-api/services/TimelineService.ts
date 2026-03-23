/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoolInt } from '../models/BoolInt';
import type { ServerConfiguration } from '../models/ServerConfiguration';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TimelineService {
    /**
     * Mark an item as played
     * Mark an item as played.  Note, this does not create any view history of this item but rather just sets the state as played. The client must provide either the `key` or `uri` query parameter
     * This API does respond to the GET verb but applications should use PUT
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param identifier The identifier of the media provider containing the media to rate.  Typically `com.plexapp.plugins.library`
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
     * @param key The key of the item to rate.  This is the `ratingKey` found in metadata items
     * @param uri The URI of the item to mark as played.  See intro for description of the URIs
     * @returns any OK
     * @throws ApiError
     */
    public static markPlayed(
        xPlexClientIdentifier: string,
        identifier: string,
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
        key?: string,
        uri?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/:/scrobble',
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
                'identifier': identifier,
                'key': key,
                'uri': uri,
            },
            errors: {
                400: `Bad Request.  Can occur when parameters are of the wrong type, or missing`,
                404: `Indicates that no library with the provide identifier can be found or no item can be found with the rating key`,
            },
        });
    }
    /**
     * Report media timeline
     * This endpoint is hit during media playback for an item. It must be hit whenever the play state changes, or in the absence of a play state change, in a regular fashion (generally this means every 10 seconds on a LAN/WAN, and every 20 seconds over cellular).
     *
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param xPlexClientIdentifier Unique per client.
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
     * @param key The details key for the item.
     * @param ratingKey The rating key attribute for the item.
     * @param state The current state of the media.
     * @param playQueueItemId If playing media from a play queue, the play queue's ID.
     * @param time The current time offset of playback in ms.
     * @param duration The total duration of the item in ms.
     * @param continuing When state is `stopped`, a flag indicating whether or not the client is going to continue playing anothe item.
     * @param updated Used when a sync client comes online and is syncing media timelines, holds the time at which the playback state was last updated.
     * @param offline Also used by sync clients, used to indicate that a timeline is being synced from being offline, as opposed to being "live".
     * @param timeToFirstFrame Time in seconds till first frame is displayed.  Sent only on the first playing timeline request.
     * @param timeStalled Time in seconds spent buffering since last request.
     * @param bandwidth Bandwidth in kbps as estimated by the client.
     * @param bufferedTime Amount of time in seconds buffered by client.  Omit if computed by `bufferedSize` below.
     * @param bufferedSize Size in kilobytes of data buffered by client.  Omit if computed by `bufferedTime` above
     * @param xPlexSessionIdentifier Unique per client playback session.  Used if a client can playback multiple items at a time (such as a browser with multiple tabs)
     * @returns any OK
     * @throws ApiError
     */
    public static report(
        xPlexClientIdentifier: string,
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
        key?: string,
        ratingKey?: string,
        state?: 'stopped' | 'buffering' | 'playing' | 'paused',
        playQueueItemId?: string,
        time?: number,
        duration?: number,
        continuing?: BoolInt,
        updated?: number,
        offline?: BoolInt,
        timeToFirstFrame?: number,
        timeStalled?: number,
        bandwidth?: number,
        bufferedTime?: number,
        bufferedSize?: number,
        xPlexSessionIdentifier?: string,
    ): CancelablePromise<{
        MediaContainer?: (ServerConfiguration & {
            /**
             * A list of media times and bandwidths when trascoding is using with auto adjustment of bandwidth
             */
            Bandwidths?: {
                Bandwidth?: Array<{
                    /**
                     * The bandwidth at this time in kbps
                     */
                    bandwidth?: number;
                    /**
                     * The user-friendly resolution at this time
                     */
                    resolution?: string;
                    /**
                     * Media playback time where this bandwidth started
                     */
                    time?: number;
                }>;
            };
            /**
             * A code describing why the session was terminated by the server.
             */
            terminationCode?: number;
            /**
             * A user friendly and localized text describing why the session was terminated by the server.
             */
            terminationText?: string;
        });
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/:/timeline',
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
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Session-Identifier': xPlexSessionIdentifier,
            },
            query: {
                'key': key,
                'ratingKey': ratingKey,
                'state': state,
                'playQueueItemID': playQueueItemId,
                'time': time,
                'duration': duration,
                'continuing': continuing,
                'updated': updated,
                'offline': offline,
                'timeToFirstFrame': timeToFirstFrame,
                'timeStalled': timeStalled,
                'bandwidth': bandwidth,
                'bufferedTime': bufferedTime,
                'bufferedSize': bufferedSize,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
    /**
     * Mark an item as unplayed
     * Mark an item as unplayed. The client must provide either the `key` or `uri` query parameter
     * This API does respond to the GET verb but applications should use PUT
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param identifier The identifier of the media provider containing the media to rate.  Typically `com.plexapp.plugins.library`
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
     * @param key The key of the item to rate.  This is the `ratingKey` found in metadata items
     * @param uri The URI of the item to mark as played.  See intro for description of the URIs
     * @returns any OK
     * @throws ApiError
     */
    public static unscrobble(
        xPlexClientIdentifier: string,
        identifier: string,
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
        key?: string,
        uri?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/:/unscrobble',
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
                'identifier': identifier,
                'key': key,
                'uri': uri,
            },
            errors: {
                400: `Bad Request.  Can occur when parameters are of the wrong type, or missing`,
                404: `Indicates that no library with the provide identifier can be found or no item can be found with the rating key`,
            },
        });
    }
}
