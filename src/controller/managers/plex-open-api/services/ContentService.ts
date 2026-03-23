/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoolInt } from '../models/BoolInt';
import type { MediaContainer } from '../models/MediaContainer';
import type { MediaContainerWithArtwork } from '../models/MediaContainerWithArtwork';
import type { MediaContainerWithMetadata } from '../models/MediaContainerWithMetadata';
import type { MediaQuery } from '../models/MediaQuery';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ContentService {
    /**
     * Get items in a collection
     * Get items in a collection.  Note if this collection contains more than 100 items, paging must be used.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param collectionId The collection id
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
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static getCollectionItems(
        xPlexClientIdentifier: string,
        collectionId: number,
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
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/collections/{collectionId}/items',
            path: {
                'collectionId': collectionId,
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
                404: `Collection not found`,
            },
        });
    }
    /**
     * Get a metadata item
     * Get one or more metadata items.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param ids
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
     * @param asyncCheckFiles Determines if file check should be performed asynchronously.  An activity is created to indicate progress.  Default is false.
     * @param asyncRefreshLocalMediaAgent Determines if local media agent refresh should be performed asynchronously.  An activity is created to indicate progress.  Default is false.
     * @param asyncRefreshAnalysis Determines if analysis refresh should be performed asynchronously.  An activity is created to indicate progress.  Default is false.
     * @param checkFiles Determines if file check should be performed synchronously.  Specifying `asyncCheckFiles` will cause this option to be ignored.  Default is false.
     * @param skipRefresh Determines if synchronous local media agent and analysis refresh should be skipped.  Specifying async versions will cause synchronous versions to be skipped.  Default is false.
     * @param checkFileAvailability Determines if file existence check should be performed synchronously.  Specifying `checkFiles` will imply this option.  Default is false.
     * @param asyncAugmentMetadata Add metadata augmentations.  An activity is created to indicate progress.  Option will be ignored if specified by non-admin or if multiple metadata items are requested.  Default is false.
     * @param augmentCount Number of augmentations to add.  Requires `asyncAugmentMetadata` to be specified.
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static getMetadataItem(
        xPlexClientIdentifier: string,
        ids: Array<string>,
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
        asyncCheckFiles?: BoolInt,
        asyncRefreshLocalMediaAgent?: BoolInt,
        asyncRefreshAnalysis?: BoolInt,
        checkFiles?: BoolInt,
        skipRefresh?: BoolInt,
        checkFileAvailability?: BoolInt,
        asyncAugmentMetadata?: BoolInt,
        augmentCount?: BoolInt,
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/metadata/{ids}',
            path: {
                'ids': ids,
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
                'asyncCheckFiles': asyncCheckFiles,
                'asyncRefreshLocalMediaAgent': asyncRefreshLocalMediaAgent,
                'asyncRefreshAnalysis': asyncRefreshAnalysis,
                'checkFiles': checkFiles,
                'skipRefresh': skipRefresh,
                'checkFileAvailability': checkFileAvailability,
                'asyncAugmentMetadata': asyncAugmentMetadata,
                'augmentCount': augmentCount,
            },
        });
    }
    /**
     * Set section albums
     * Get all albums in a music section
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId Section identifier
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
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static getAlbums(
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
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/albums',
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
        });
    }
    /**
     * Get items in the section
     * Get the items in a section, potentially filtering them
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId The id of the section
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
     * @param xPlexContainerStart The index of the first item to return. If not specified, the first item will be returned.
     * If the number of items exceeds the limit, the response will be paginated.
     * By default this is 0
     *
     * @param xPlexContainerSize The number of items to return. If not specified, all items will be returned.
     * If the number of items exceeds the limit, the response will be paginated.
     * By default this is 50
     *
     * @param mediaQuery A querystring-based filtering language used to select subsets of media. Can be provided as an object with typed properties for type safety, or as a string for complex queries with operators and boolean logic.
     *
     * The query supports:
     * - Fields: integer, boolean, tag, string, date, language
     * - Operators: =, !=, ==, !==, <=, >=, >>=, <<= (varies by field type)
     * - Boolean operators: & (AND), , (OR), push/pop (parentheses), or=1 (explicit OR)
     * - Sorting: sort parameter with :desc, :nullsLast modifiers
     * - Grouping: group parameter
     * - Limits: limit parameter
     *
     * Examples:
     * - Object format: `{type: 4, sourceType: 2, title: "24"}` → `type=4&sourceType=2&title=24`
     * - String format: `type=4&sourceType=2&title==24` - type = 4 AND sourceType = 2 AND title = "24"
     * - Complex: `push=1&index=1&or=1&rating=2&pop=1&duration=10` - (index = 1 OR rating = 2) AND duration = 10
     *
     * See [API Info section](#section/API-Info/Media-Queries) for detailed information on building media queries.
     *
     * @param includeMeta Adds the Meta object to the response
     *
     * @param includeGuids Adds the Guid object to the response
     *
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static listContent(
        xPlexClientIdentifier: string,
        sectionId: string,
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
        xPlexContainerStart?: number,
        xPlexContainerSize: number = 50,
        mediaQuery?: MediaQuery,
        includeMeta?: BoolInt,
        includeGuids?: BoolInt,
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/all',
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
                'X-Plex-Container-Start': xPlexContainerStart,
                'X-Plex-Container-Size': xPlexContainerSize,
                'mediaQuery': mediaQuery,
                'includeMeta': includeMeta,
                'includeGuids': includeGuids,
            },
        });
    }
    /**
     * Set section leaves
     * Get all leaves in a section (such as episodes in a show section)
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId Section identifier
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
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static getAllLeaves(
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
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/allLeaves',
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
        });
    }
    /**
     * Set section artwork
     * Get artwork for a library section
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId Section identifier
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
     * @returns MediaContainerWithArtwork OK
     * @throws ApiError
     */
    public static getArts(
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
    ): CancelablePromise<MediaContainerWithArtwork> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/arts',
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
        });
    }
    /**
     * Set section categories
     * Get categories in a library section
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId Section identifier
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
     * @returns MediaContainerWithArtwork OK
     * @throws ApiError
     */
    public static getCategories(
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
    ): CancelablePromise<MediaContainerWithArtwork> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/categories',
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
        });
    }
    /**
     * Set section clusters
     * Get clusters in a library section (typically for photos)
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId Section identifier
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
     * @returns MediaContainerWithArtwork OK
     * @throws ApiError
     */
    public static getCluster(
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
    ): CancelablePromise<MediaContainerWithArtwork> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/cluster',
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
        });
    }
    /**
     * Similar tracks to transition from one to another
     * Get a list of audio tracks starting at one and ending at another which are similar across the path
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId Section identifier
     * @param startId The starting metadata item id
     * @param endId The ending metadata item id
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
     * @param maxDistance The maximum distance allowed along the path; defaults to 0.25
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static getSonicPath(
        xPlexClientIdentifier: string,
        sectionId: number,
        startId: number,
        endId: number,
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
        maxDistance?: number,
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/computePath',
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
                'startID': startId,
                'endID': endId,
                'count': count,
                'maxDistance': maxDistance,
            },
        });
    }
    /**
     * Get all folder locations
     * Get all folder locations of the media in a section
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId Section identifier
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
    public static getFolders(
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
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Directory?: Array<{
                fastKey?: string;
                key?: string;
                title?: string;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/location',
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
        });
    }
    /**
     * Set section moments
     * Get moments in a library section (typically for photos)
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId Section identifier
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
     * @returns MediaContainerWithArtwork OK
     * @throws ApiError
     */
    public static listMoments(
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
    ): CancelablePromise<MediaContainerWithArtwork> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/moment',
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
        });
    }
    /**
     * The nearest audio tracks
     * Get the nearest audio tracks to a particular analysis
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId Section identifier
     * @param values The music analysis to center the search.  Typically obtained from the `musicAnalysis` of a track
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
     * @param type The metadata type to fetch (should be 10 for audio track)
     * @param limit The limit of the number of items to fetch; defaults to 50
     * @param maxDistance The maximum distance to search, defaults to 0.25
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static getSonicallySimilar(
        xPlexClientIdentifier: string,
        sectionId: number,
        values: Array<number>,
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
        type?: number,
        limit?: number,
        maxDistance?: number,
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/nearest',
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
                'type': type,
                'values': values,
                'limit': limit,
                'maxDistance': maxDistance,
            },
        });
    }
    /**
     * Get a collection's image
     * Get an image for the collection based on the items within
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param collectionId The collection id
     * @param updatedAt The update time of the image.  Used for busting cache.
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
     * @param composite
     * @returns binary OK
     * @throws ApiError
     */
    public static getCollectionImage(
        xPlexClientIdentifier: string,
        collectionId: number,
        updatedAt: number,
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
        composite?: {
            /**
             * Limit composite to specified metadata types
             */
            type?: number;
            /**
             * The image type
             */
            format?: 'jpg' | 'png';
            /**
             * 6 character hex RGB value for background color for image
             */
            backgroundColor?: string;
            /**
             * The width of the intra-image border
             */
            border?: number;
            /**
             * Number of columns to construct in the composite image
             */
            cols?: number;
            /**
             * Where to crop source images to fit into composite image proportions
             */
            crop?: 'center' | 'top';
            /**
             * The height of the image
             */
            height?: number;
            /**
             * The default image type to use as the sources
             */
            media?: 'thumb' | 'art' | 'banner';
            /**
             * Allow repetion of images if there are not enough source images to fill grid
             */
            repeat?: boolean;
            /**
             * Number of rows to construct in the composite image
             */
            rows?: number;
            /**
             * The width of the image
             */
            width?: number;
        },
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/collections/{collectionId}/composite/{updatedAt}',
            path: {
                'collectionId': collectionId,
                'updatedAt': updatedAt,
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
                'composite': composite,
            },
            errors: {
                404: `Collection not found`,
            },
        });
    }
}
