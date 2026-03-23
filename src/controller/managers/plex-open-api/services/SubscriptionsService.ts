/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoolInt } from '../models/BoolInt';
import type { MediaContainer } from '../models/MediaContainer';
import type { MediaContainerWithSubscription } from '../models/MediaContainerWithSubscription';
import type { MediaGrabOperation } from '../models/MediaGrabOperation';
import type { MediaSubscription } from '../models/MediaSubscription';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SubscriptionsService {
    /**
     * Get all subscriptions
     * Get all subscriptions and potentially the grabs too
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
     * @param includeGrabs Indicates whether the active grabs should be included as well
     * @param includeStorage Compute the storage of recorded items desired by this subscription
     * @returns MediaContainerWithSubscription OK
     * @throws ApiError
     */
    public static getAllSubscriptions(
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
        includeGrabs?: BoolInt,
        includeStorage?: BoolInt,
    ): CancelablePromise<MediaContainerWithSubscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/media/subscriptions',
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
                'includeGrabs': includeGrabs,
                'includeStorage': includeStorage,
            },
            errors: {
                403: `User cannot access DVR on this server`,
            },
        });
    }
    /**
     * Create a subscription
     * Create a subscription. The query parameters should be mostly derived from the [template](#tag/Subscriptions/operation/mediaSubscriptionsGetTemplate)
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
     * @param targetLibrarySectionId The library section into which we'll grab the media.  Not actually required when the subscription is to a playlist.
     * @param targetSectionLocationId The section location into which to grab.
     * @param type The type of the thing we're subscribing too (e.g. show, season).
     * @param hints Hints describing what we're looking for.  Note: The hint `ratingKey` is required for downloading from a PMS remote.
     * @param prefs Subscription preferences.
     * @param params Subscription parameters.
     * - `mediaProviderID`: Required for downloads to indicate which MP the subscription will download into
     * - `source`: Required for downloads to indicate the source of the downloaded content.
     *
     * @returns any OK
     * @throws ApiError
     */
    public static createSubscription(
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
        targetLibrarySectionId?: number,
        targetSectionLocationId?: number,
        type?: number,
        hints?: Record<string, any>,
        prefs?: Record<string, any>,
        params?: Record<string, any>,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            MediaSubscription?: Array<MediaSubscription>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/media/subscriptions',
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
                'targetLibrarySectionID': targetLibrarySectionId,
                'targetSectionLocationID': targetSectionLocationId,
                'type': type,
                'hints': hints,
                'prefs': prefs,
                'params': params,
            },
            errors: {
                400: `Bad Request`,
                403: `User cannot access DVR on this server`,
                409: `An subscription with the same parameters already exists`,
            },
        });
    }
    /**
     * Process all subscriptions
     * Process all subscriptions asynchronously
     * @returns string OK
     * @throws ApiError
     */
    public static processSubscriptions(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/media/subscriptions/process',
            responseHeader: 'X-Plex-Activity',
            errors: {
                403: `User cannot access DVR on this server`,
            },
        });
    }
    /**
     * Get all scheduled recordings
     * Get all scheduled recordings across all subscriptions
     * @returns any OK
     * @throws ApiError
     */
    public static getScheduledRecordings(): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            MediaGrabOperation?: Array<MediaGrabOperation>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/media/subscriptions/scheduled',
            errors: {
                403: `User cannot access DVR on this server`,
            },
        });
    }
    /**
     * Get the subscription template
     * Get the templates for a piece of media which could include fetching one airing, season, the whole show, etc.
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
     * @param guid The guid of the item for which to get the template
     * @returns any OK
     * @throws ApiError
     */
    public static getTemplate(
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
        guid?: string,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            SubscriptionTemplate?: Array<{
                MediaSubscription?: Array<(MediaSubscription & {
                    airingsType?: string;
                    librarySectionTitle?: string;
                    locationPath?: string;
                    /**
                     * Parameter string for creating this subscription
                     */
                    parameters?: string;
                    selected?: boolean;
                    /**
                     * Where this subscription will record to
                     */
                    targetLibrarySectionID?: number;
                    /**
                     * The title of this subscription type
                     */
                    title?: string;
                    /**
                     * Metadata type number
                     */
                    type?: number;
                })>;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/media/subscriptions/template',
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
                'guid': guid,
            },
            errors: {
                403: `User cannot access DVR on this server`,
            },
        });
    }
    /**
     * Cancel an existing grab
     * Cancels an existing media grab (recording). It can be used to resolve a conflict which exists for a rolling subscription.
     * Note: This cancellation does not persist across a server restart, but neither does a rolling subscription itself.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param operationId The ID of the operation.
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
    public static cancelGrab(
        xPlexClientIdentifier: string,
        operationId: string,
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
            method: 'DELETE',
            url: '/media/grabbers/operations/{operationId}',
            path: {
                'operationId': operationId,
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
                403: `User is not owner of the grab and not the admin`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Delete a subscription
     * Delete a subscription, cancelling all of its grabs as well
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param subscriptionId
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
    public static deleteSubscription(
        xPlexClientIdentifier: string,
        subscriptionId: number,
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
            method: 'DELETE',
            url: '/media/subscriptions/{subscriptionId}',
            path: {
                'subscriptionId': subscriptionId,
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
                403: `User cannot access DVR on this server or cannot access this subscription`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Get a single subscription
     * Get a single subscription and potentially the grabs too
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param subscriptionId
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
     * @param includeGrabs Indicates whether the active grabs should be included as well
     * @param includeStorage Compute the storage of recorded items desired by this subscription
     * @returns MediaContainerWithSubscription OK
     * @throws ApiError
     */
    public static getSubscription(
        xPlexClientIdentifier: string,
        subscriptionId: number,
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
        includeGrabs?: BoolInt,
        includeStorage?: BoolInt,
    ): CancelablePromise<MediaContainerWithSubscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/media/subscriptions/{subscriptionId}',
            path: {
                'subscriptionId': subscriptionId,
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
                'includeGrabs': includeGrabs,
                'includeStorage': includeStorage,
            },
            errors: {
                400: `Bad Request`,
                403: `User cannot access DVR on this server or cannot access this subscription`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Edit a subscription
     * Edit a subscription's preferences
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param subscriptionId
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
     * @param prefs
     * @returns MediaContainerWithSubscription OK
     * @throws ApiError
     */
    public static editSubscriptionPreferences(
        xPlexClientIdentifier: string,
        subscriptionId: number,
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
        prefs?: Record<string, any>,
    ): CancelablePromise<MediaContainerWithSubscription> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/media/subscriptions/{subscriptionId}',
            path: {
                'subscriptionId': subscriptionId,
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
                'prefs': prefs,
            },
            errors: {
                400: `Bad Request`,
                403: `User cannot access DVR on this server or cannot access this subscription`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Re-order a subscription
     * Re-order a subscription to change its priority
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param subscriptionId
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
     * @param after The subscription to move this sub after.  If missing will insert at the beginning of the list
     * @returns MediaContainerWithSubscription OK
     * @throws ApiError
     */
    public static reorderSubscription(
        xPlexClientIdentifier: string,
        subscriptionId: number,
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
    ): CancelablePromise<MediaContainerWithSubscription> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/media/subscriptions/{subscriptionId}/move',
            path: {
                'subscriptionId': subscriptionId,
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
                403: `User cannot access DVR on this server or cannot access this subscription`,
                404: `Not Found`,
            },
        });
    }
}
