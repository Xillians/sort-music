/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoolInt } from '../models/BoolInt';
import type { Hub } from '../models/Hub';
import type { MediaContainer } from '../models/MediaContainer';
import type { MediaContainerWithHubs } from '../models/MediaContainerWithHubs';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class HubsService {
    /**
     * Get global hubs
     * Get the global hubs in this PMS
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
     * @param count Limit results to count items
     * @param onlyTransient Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added)
     * @param identifier If provided, limit to only specified hubs
     * @returns any OK
     * @throws ApiError
     */
    public static getAllHubs(
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
        count?: number,
        onlyTransient?: BoolInt,
        identifier?: Array<string>,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Hub?: Array<Hub>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/hubs',
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
                'count': count,
                'onlyTransient': onlyTransient,
                'identifier': identifier,
            },
        });
    }
    /**
     * Get the continue watching hub
     * Get the global continue watching hub
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
     * @param count Limit results to count items
     * @returns any OK
     * @throws ApiError
     */
    public static getContinueWatching(
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
        count?: number,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Hub?: Array<Hub>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/hubs/continueWatching',
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
                'count': count,
            },
        });
    }
    /**
     * Get a hub's items
     * Get the items within a single hub specified by identifier
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param identifier If provided, limit to only specified hubs
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
     * @param count Limit results to count items
     * @returns any OK
     * @throws ApiError
     */
    public static getHubItems(
        xPlexClientIdentifier: string,
        identifier: Array<string>,
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
        count?: number,
    ): CancelablePromise<{
        MediaContainer?: MediaContainer;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/hubs/items',
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
                'count': count,
                'identifier': identifier,
            },
            errors: {
                404: `The specified hub could not be found`,
            },
        });
    }
    /**
     * Get the hubs which are promoted
     * Get the global hubs which are promoted (should be displayed on the home screen)
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
     * @param count Limit results to count items
     * @returns any OK
     * @throws ApiError
     */
    public static getPromotedHubs(
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
        count?: number,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Hub?: Array<Hub>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/hubs/promoted',
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
                'count': count,
            },
        });
    }
    /**
     * Get hubs for section by metadata item
     * Get the hubs for a section by metadata item.  Currently only for music sections
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param metadataId The metadata ID for the hubs to fetch
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
     * @param count Limit results to count items
     * @param onlyTransient Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added)
     * @returns MediaContainerWithHubs OK
     * @throws ApiError
     */
    public static getMetadataHubs(
        xPlexClientIdentifier: string,
        metadataId: number,
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
        count?: number,
        onlyTransient?: BoolInt,
    ): CancelablePromise<MediaContainerWithHubs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/hubs/metadata/{metadataId}',
            path: {
                'metadataId': metadataId,
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
                'count': count,
                'onlyTransient': onlyTransient,
            },
            errors: {
                400: `No metadata with that id or permission is denied`,
            },
        });
    }
    /**
     * Get postplay hubs
     * Get the hubs for a metadata to be displayed in post play
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param metadataId The metadata ID for the hubs to fetch
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
     * @param count Limit results to count items
     * @param onlyTransient Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added)
     * @returns MediaContainerWithHubs OK
     * @throws ApiError
     */
    public static getPostplayHubs(
        xPlexClientIdentifier: string,
        metadataId: number,
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
        count?: number,
        onlyTransient?: BoolInt,
    ): CancelablePromise<MediaContainerWithHubs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/hubs/metadata/{metadataId}/postplay',
            path: {
                'metadataId': metadataId,
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
                'count': count,
                'onlyTransient': onlyTransient,
            },
            errors: {
                400: `No metadata with that id or permission is denied`,
            },
        });
    }
    /**
     * Get related hubs
     * Get the hubs for a metadata related to the provided metadata item
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param metadataId The metadata ID for the hubs to fetch
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
     * @param count Limit results to count items
     * @param onlyTransient Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added)
     * @returns MediaContainerWithHubs OK
     * @throws ApiError
     */
    public static getRelatedHubs(
        xPlexClientIdentifier: string,
        metadataId: number,
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
        count?: number,
        onlyTransient?: BoolInt,
    ): CancelablePromise<MediaContainerWithHubs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/hubs/metadata/{metadataId}/related',
            path: {
                'metadataId': metadataId,
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
                'count': count,
                'onlyTransient': onlyTransient,
            },
            errors: {
                400: `No metadata with that id or permission is denied`,
            },
        });
    }
    /**
     * Get section hubs
     * Get the hubs for a single section
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId The section ID for the hubs to fetch
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
     * @param count Limit results to count items
     * @param onlyTransient Only return hubs which are "transient", meaning those which are prone to changing after media playback or addition (e.g. On Deck, or Recently Added)
     * @returns any OK
     * @throws ApiError
     */
    public static getSectionHubs(
        xPlexClientIdentifier: string,
        sectionId: number,
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
        count?: number,
        onlyTransient?: BoolInt,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Hub?: Array<Hub>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/hubs/sections/{sectionId}',
            path: {
                'sectionId': sectionId,
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
                'count': count,
                'onlyTransient': onlyTransient,
            },
            errors: {
                400: `No section with that id or permission is denied`,
            },
        });
    }
    /**
     * Reset hubs to defaults
     * Reset hubs for this section to defaults and delete custom hubs
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId The section ID for the hubs to reorder
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
    public static resetSectionDefaults(
        xPlexClientIdentifier: string,
        sectionId: number,
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
            url: '/hubs/sections/{sectionId}/manage',
            path: {
                'sectionId': sectionId,
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
                403: `Forbidden`,
                404: `Section id was not found`,
            },
        });
    }
    /**
     * Get hubs
     * Get the list of hubs including both built-in and custom
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId The section ID for the hubs to reorder
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
     * @param metadataItemId Restrict hubs to ones relevant to the provided metadata item
     * @returns any OK
     * @throws ApiError
     */
    public static listHubs(
        xPlexClientIdentifier: string,
        sectionId: number,
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
        metadataItemId?: number,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Hub?: Array<{
                /**
                 * Whether this hub is visible on the home screen
                 * - all: Visible to all users
                 * - none: Visible to no users
                 * - admin: Visible to only admin users
                 * - shared: Visible to shared users
                 *
                 */
                homeVisibility?: 'all' | 'none' | 'admin' | 'shared';
                /**
                 * The identifier for this hub
                 */
                identifier?: string;
                /**
                 * Whether this hub is visible to admin user home
                 */
                promotedToOwnHome?: boolean;
                /**
                 * Whether this hub is promoted to all for recommendations
                 */
                promotedToRecommended?: boolean;
                /**
                 * Whether this hub is visible to shared user's home
                 */
                promotedToSharedHome?: boolean;
                /**
                 * The visibility of this hub in recommendations:
                 * - all: Visible to all users
                 * - none: Visible to no users
                 * - admin: Visible to only admin users
                 * - shared: Visible to shared users
                 *
                 */
                recommendationsVisibility?: 'all' | 'none' | 'admin' | 'shared';
                /**
                 * The title of this hub
                 */
                title?: string;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/hubs/sections/{sectionId}/manage',
            path: {
                'sectionId': sectionId,
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
                'metadataItemId': metadataItemId,
            },
            errors: {
                403: `Forbidden`,
                404: `Section id was not found`,
            },
        });
    }
    /**
     * Create a custom hub
     * Create a custom hub based on a metadata item
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId The section ID for the hubs to reorder
     * @param metadataItemId The metadata item on which to base this hub.  This must currently be a collection
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
     * @param promotedToRecommended Whether this hub should be displayed in recommended
     * @param promotedToOwnHome Whether this hub should be displayed in admin's home
     * @param promotedToSharedHome Whether this hub should be displayed in shared user's home
     * @returns any OK
     * @throws ApiError
     */
    public static createCustomHub(
        xPlexClientIdentifier: string,
        sectionId: number,
        metadataItemId: number,
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
        promotedToRecommended?: BoolInt,
        promotedToOwnHome?: BoolInt,
        promotedToSharedHome?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/hubs/sections/{sectionId}/manage',
            path: {
                'sectionId': sectionId,
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
                'metadataItemId': metadataItemId,
                'promotedToRecommended': promotedToRecommended,
                'promotedToOwnHome': promotedToOwnHome,
                'promotedToSharedHome': promotedToSharedHome,
            },
            errors: {
                400: `A hub could not be created with this metadata item`,
                403: `Forbidden`,
                404: `Section id or metadata item was not found`,
            },
        });
    }
    /**
     * Move Hub
     * Changed the ordering of a hub among others hubs
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId The section ID for the hubs to reorder
     * @param identifier The identifier of the hub to move
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
     * @param after The identifier of the hub to order this hub after (or empty/missing to put this hub first)
     * @returns any OK
     * @throws ApiError
     */
    public static moveHub(
        xPlexClientIdentifier: string,
        sectionId: number,
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
        after?: string,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Hub?: Array<{
                /**
                 * Whether this hub is visible on the home screen
                 * - all: Visible to all users
                 * - none: Visible to no users
                 * - admin: Visible to only admin users
                 * - shared: Visible to shared users
                 *
                 */
                homeVisibility?: 'all' | 'none' | 'admin' | 'shared';
                /**
                 * The identifier for this hub
                 */
                identifier?: string;
                /**
                 * Whether this hub is visible to admin user home
                 */
                promotedToOwnHome?: boolean;
                /**
                 * Whether this hub is promoted to all for recommendations
                 */
                promotedToRecommended?: boolean;
                /**
                 * Whether this hub is visible to shared user's home
                 */
                promotedToSharedHome?: boolean;
                /**
                 * The visibility of this hub in recommendations:
                 * - all: Visible to all users
                 * - none: Visible to no users
                 * - admin: Visible to only admin users
                 * - shared: Visible to shared users
                 *
                 */
                recommendationsVisibility?: 'all' | 'none' | 'admin' | 'shared';
                /**
                 * The title of this hub
                 */
                title?: string;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/hubs/sections/{sectionId}/manage/move',
            path: {
                'sectionId': sectionId,
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
                'identifier': identifier,
                'after': after,
            },
            errors: {
                403: `Forbidden`,
                404: `Section id was not found`,
            },
        });
    }
    /**
     * Delete a custom hub
     * Delete a custom hub from the server
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId The section ID for the hubs to change
     * @param identifier The identifier of the hub to change
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
    public static deleteCustomHub(
        xPlexClientIdentifier: string,
        sectionId: number,
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
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/hubs/sections/{sectionId}/manage/{identifier}',
            path: {
                'sectionId': sectionId,
                'identifier': identifier,
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
                400: `The hub is not a custom hub`,
                403: `Forbidden`,
                404: `The section or hub was not found`,
            },
        });
    }
    /**
     * Change hub visibility
     * Changed the visibility of a hub for both the admin and shared users
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId The section ID for the hubs to change
     * @param identifier The identifier of the hub to change
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
     * @param promotedToRecommended Whether this hub should be displayed in recommended
     * @param promotedToOwnHome Whether this hub should be displayed in admin's home
     * @param promotedToSharedHome Whether this hub should be displayed in shared user's home
     * @returns any OK
     * @throws ApiError
     */
    public static updateHubVisibility(
        xPlexClientIdentifier: string,
        sectionId: number,
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
        promotedToRecommended?: BoolInt,
        promotedToOwnHome?: BoolInt,
        promotedToSharedHome?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/hubs/sections/{sectionId}/manage/{identifier}',
            path: {
                'sectionId': sectionId,
                'identifier': identifier,
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
                'promotedToRecommended': promotedToRecommended,
                'promotedToOwnHome': promotedToOwnHome,
                'promotedToSharedHome': promotedToSharedHome,
            },
            errors: {
                403: `Forbidden`,
                404: `Section id was not found`,
            },
        });
    }
}
