/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaContainer } from '../models/MediaContainer';
import type { Metadata } from '../models/Metadata';
import type { Player } from '../models/Player';
import type { Session } from '../models/Session';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StatusService {
    /**
     * List Sessions
     * List all current playbacks on this server
     * @returns any OK
     * @throws ApiError
     */
    public static listSessions(): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Metadata?: Array<({
                Player?: Player;
                Session?: Session;
                User?: User;
            } & Metadata)>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/status/sessions',
        });
    }
    /**
     * Get background tasks
     * Get the list of all background tasks
     * @returns any OK
     * @throws ApiError
     */
    public static getBackgroundTasks(): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            TranscodeJob?: Array<{
                generatorID?: number;
                key?: string;
                progress?: number;
                ratingKey?: string;
                /**
                 * The number of seconds remaining in this job
                 */
                remaining?: number;
                /**
                 * The size of the result so far
                 */
                size?: number;
                /**
                 * The speed of the transcode; 1.0 means real-time
                 */
                speed?: number;
                /**
                 * The tag associated with the job.  This could be the tag containing the optimizer settings.
                 */
                targetTagID?: number;
                thumb?: string;
                title?: string;
                type?: 'transcode';
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/status/sessions/background',
        });
    }
    /**
     * List Playback History
     * List all playback history (Admin can see all users, others can only see their own).
     * Pagination should be used on this endpoint.  Additionally this endpoint supports `includeFields`, `excludeFields`, `includeElements`, and `excludeElements` parameters.
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
     * @param accountId The account id to restrict view history
     * @param viewedAt The time period to restrict history (typically of the form `viewedAt>=12456789`)
     * @param librarySectionId The library section id to restrict view history
     * @param metadataItemId The metadata item to restrict view history (can provide the id for a show to see all of that show's view history).  Note this is translated to `metadata_items.id`, `parents.id`, or `grandparents.id` internally depending on the metadata type.
     * @param sort The field on which to sort.  Multiple orderings can be specified separated by `,` and the direction specified following a `:` (`desc` or `asc`; `asc` is assumed if not provided).  Note `metadataItemID` may not be used here.
     * @returns any OK
     * @throws ApiError
     */
    public static listPlaybackHistory(
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
        accountId?: number,
        viewedAt?: number,
        librarySectionId?: number,
        metadataItemId?: number,
        sort?: Array<string>,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Metadata?: Array<{
                /**
                 * The account id of this playback
                 */
                accountID?: number;
                /**
                 * The device id which played the item
                 */
                deviceID?: number;
                /**
                 * The key for this individual history item
                 */
                historyKey?: string;
                /**
                 * The metadata key for the item played
                 */
                key?: string;
                /**
                 * The library section id containing the item played
                 */
                librarySectionID?: string;
                /**
                 * The originally available at of the item played
                 */
                originallyAvailableAt?: string;
                /**
                 * The rating key for the item played
                 */
                ratingKey?: string;
                /**
                 * The thumb of the item played
                 */
                thumb?: string;
                /**
                 * The title of the item played
                 */
                title?: string;
                /**
                 * The metadata type of the item played
                 */
                type?: string;
                /**
                 * The time when the item was played
                 */
                viewedAt?: number;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/status/sessions/history/all',
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
                'accountID': accountId,
                'viewedAt': viewedAt,
                'librarySectionID': librarySectionId,
                'metadataItemID': metadataItemId,
                'sort': sort,
            },
        });
    }
    /**
     * Terminate a session
     * Terminate a playback session kicking off the user
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sessionId The session id (found in the `Session` element in [/status/sessions](#tag/Status/operation/statusGetSlash))
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
     * @param reason The reason to give to the user (typically displayed in the client)
     * @returns any OK
     * @throws ApiError
     */
    public static terminateSession(
        xPlexClientIdentifier: string,
        sessionId: string,
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
        reason?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/status/sessions/terminate',
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
                'sessionId': sessionId,
                'reason': reason,
            },
            errors: {
                401: `Server does not have the feature enabled`,
                403: `sessionId is empty`,
                404: `Session not found`,
            },
        });
    }
    /**
     * Delete Single History Item
     * Delete a single history item by id
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param historyId The id of the history item (the `historyKey` from above)
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
     * @returns MediaContainer OK
     * @throws ApiError
     */
    public static deleteHistory(
        xPlexClientIdentifier: string,
        historyId: number,
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
    ): CancelablePromise<MediaContainer> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/status/sessions/history/{historyId}',
            path: {
                'historyId': historyId,
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
                404: `History item not found`,
            },
        });
    }
    /**
     * Get Single History Item
     * Get a single history item by id
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param historyId The id of the history item (the `historyKey` from above)
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
    public static getHistoryItem(
        xPlexClientIdentifier: string,
        historyId: number,
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
            Metadata?: Array<{
                /**
                 * The account id of this playback
                 */
                accountID?: number;
                /**
                 * The device id which played the item
                 */
                deviceID?: number;
                /**
                 * The key for this individual history item
                 */
                historyKey?: string;
                /**
                 * The metadata key for the item played
                 */
                key?: string;
                /**
                 * The library section id containing the item played
                 */
                librarySectionID?: string;
                /**
                 * The originally available at of the item played
                 */
                originallyAvailableAt?: string;
                /**
                 * The rating key for the item played
                 */
                ratingKey?: string;
                /**
                 * The thumb of the item played
                 */
                thumb?: string;
                /**
                 * The title of the item played
                 */
                title?: string;
                /**
                 * The metadata type of the item played
                 */
                type?: string;
                /**
                 * The time when the item was played
                 */
                viewedAt?: number;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/status/sessions/history/{historyId}',
            path: {
                'historyId': historyId,
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
                404: `History item not found`,
            },
        });
    }
}
