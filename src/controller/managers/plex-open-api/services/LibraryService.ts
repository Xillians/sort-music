/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AllowSync } from '../models/AllowSync';
import type { BoolInt } from '../models/BoolInt';
import type { Directory } from '../models/Directory';
import type { Hub } from '../models/Hub';
import type { LibrarySection } from '../models/LibrarySection';
import type { MediaContainer } from '../models/MediaContainer';
import type { MediaContainerWithArtwork } from '../models/MediaContainerWithArtwork';
import type { MediaContainerWithMetadata } from '../models/MediaContainerWithMetadata';
import type { MediaContainerWithNestedMetadata } from '../models/MediaContainerWithNestedMetadata';
import type { MediaContainerWithSettings } from '../models/MediaContainerWithSettings';
import type { MediaQuery } from '../models/MediaQuery';
import type { MediaType } from '../models/MediaType';
import type { ServerConfiguration } from '../models/ServerConfiguration';
import type { Sort } from '../models/Sort';
import type { Tag } from '../models/Tag';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LibraryService {
    /**
     * Get all items in library
     * Request all metadata items according to a query.
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
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static getLibraryItems(
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
        mediaQuery?: MediaQuery,
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/all',
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
                'mediaQuery': mediaQuery,
            },
        });
    }
    /**
     * Delete library caches
     * Delete the hub caches so they are recomputed on next request
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCaches(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/library/caches',
        });
    }
    /**
     * Clean bundles
     * Clean out any now unused bundles. Bundles can become unused when media is deleted
     * @returns any OK
     * @throws ApiError
     */
    public static cleanBundles(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/clean/bundles',
        });
    }
    /**
     * Ingest a transient item
     * This endpoint takes a file path specified in the `url` parameter, matches it using the scanner's match mechanism, downloads rich metadata, and then ingests the item as a transient item (without a library section). In the case where the file represents an episode, the entire tree (show, season, and episode) is added as transient items. At this time, movies and episodes are the only supported types, which are gleaned automatically from the file path.
     * Note that any of the parameters passed to the metadata details endpoint (e.g. `includeExtras=1`) work here.
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
     * @param url The file of the file to ingest.
     * @param virtualFilePath A virtual path to use when the url is opaque.
     * @param computeHashes Whether or not to compute Plex and OpenSubtitle hashes for the file. Defaults to 0.
     * @param ingestNonMatches Whether or not non matching media should be stored. Defaults to 0.
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static ingestTransientItem(
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
        url?: string,
        virtualFilePath?: string,
        computeHashes?: BoolInt,
        ingestNonMatches?: BoolInt,
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/library/file',
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
                'url': url,
                'virtualFilePath': virtualFilePath,
                'computeHashes': computeHashes,
                'ingestNonMatches': ingestNonMatches,
            },
        });
    }
    /**
     * Get library matches
     * The matches endpoint is used to match content external to the library with content inside the library. This is done by passing a series of semantic "hints" about the content (its type, name, or release year). Each type (e.g. movie) has a canonical set of minimal required hints.
     * This ability to match content is useful in a variety of scenarios. For example, in the DVR, the EPG uses the endpoint to match recording rules against airing content. And in the cloud, the UMP uses the endpoint to match up a piece of media with rich metadata.
     * The endpoint response can including multiple matches, if there is ambiguity, each one containing a `score` from 0 to 100. For somewhat historical reasons, anything over 85 is considered a positive match (we prefer false negatives over false positives in general for matching).
     * The `guid` hint is somewhat special, in that it generally represents a unique identity for a piece of media (e.g. the IMDB `ttXXX`) identifier, in contrast with other hints which can be much more ambiguous (e.g. a title of `Jane Eyre`, which could refer to the 1943 or the 2011 version).
     * Episodes require either a season/episode pair, or an air date (or both). Either the path must be sent, or the show title
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
     * @param type The type of media to retrieve or filter by.
     *
     * 1 = movie
     * 2 = show
     * 3 = season
     * 4 = episode
     * 5 = artist
     * 6 = album
     * 7 = track
     * 8 = photo_album
     * 9 = photo
     *
     * E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries
     *
     * @param includeFullMetadata
     * @param includeAncestorMetadata
     * @param includeAlternateMetadataSources
     * @param guid Used for movies, shows, artists, albums, and tracks.  Allowed for various URI schemes, to be defined.
     * @param title The title to filter by or assign
     * @param year Used for movies shows, and albums.  Optional.
     * @param path Used for movies, episodes, and tracks.  The full path to the media file, used for "cloud-scanning" an item.
     * @param grandparentTitle Used for episodes and tracks.  The title of the show/artist. Required if `path` isn't passed.
     * @param grandparentYear Used for episodes.  The year of the show.
     * @param parentIndex Used for episodes and tracks.  The season/album number.
     * @param index Used for episodes and tracks.  The episode/tracks number in the season/album.
     * @param originallyAvailableAt Used for episodes.  In the format `YYYY-MM-DD`.
     * @param parentTitle Used for albums and tracks. The artist name for albums or the album name for tracks.
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static getLibraryMatches(
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
        type?: MediaType,
        includeFullMetadata?: BoolInt,
        includeAncestorMetadata?: BoolInt,
        includeAlternateMetadataSources?: BoolInt,
        guid?: string,
        title?: string,
        year?: number,
        path?: string,
        grandparentTitle?: string,
        grandparentYear?: number,
        parentIndex?: number,
        index?: number,
        originallyAvailableAt?: string,
        parentTitle?: string,
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/matches',
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
                'includeFullMetadata': includeFullMetadata,
                'includeAncestorMetadata': includeAncestorMetadata,
                'includeAlternateMetadataSources': includeAlternateMetadataSources,
                'guid': guid,
                'title': title,
                'year': year,
                'path': path,
                'grandparentTitle': grandparentTitle,
                'grandparentYear': grandparentYear,
                'parentIndex': parentIndex,
                'index': index,
                'originallyAvailableAt': originallyAvailableAt,
                'parentTitle': parentTitle,
            },
        });
    }
    /**
     * Optimize the Database
     * Initiate optimize on the database.
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
     * @param async If set, don't wait for completion but return an activity
     * @returns any OK
     * @throws ApiError
     */
    public static optimizeDatabase(
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
        async?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/optimize',
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
                'async': async,
            },
        });
    }
    /**
     * Get random artwork
     * Get random artwork across sections.  This is commonly used for a screensaver.
     *
     * This retrieves 100 random artwork paths in the specified sections and returns them.  Restrictions are put in place to not return artwork for items the user is not allowed to access.  Artwork will be for Movies, Shows, and Artists only.
     *
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
     * @param sections The sections for which to fetch artwork.
     * @returns MediaContainerWithArtwork OK
     * @throws ApiError
     */
    public static getRandomArtwork(
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
        sections?: Array<number>,
    ): CancelablePromise<MediaContainerWithArtwork> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/randomArtwork',
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
                'sections': sections,
            },
        });
    }
    /**
     * Get library sections (main Media Provider Only)
     * A library section (commonly referred to as just a library) is a collection of media. Libraries are typed, and depending on their type provide either a flat or a hierarchical view of the media. For example, a music library has an artist > albums > tracks structure, whereas a movie library is flat.
     * Libraries have features beyond just being a collection of media; for starters, they include information about supported types, filters and sorts. This allows a client to provide a rich interface around the media (e.g. allow sorting movies by release year).
     * @returns any OK
     * @throws ApiError
     */
    public static getSections(): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            allowSync?: AllowSync;
            Directory?: Array<LibrarySection>;
            /**
             * Typically just "Plex Library"
             */
            title1?: string;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/all',
        });
    }
    /**
     * Add a library section
     * Add a new library section to the server
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param name The name of the new section
     * @param type The type of library section
     * @param agent The agent this section should use for metadata
     * @param language The language of this section
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
     * @param scanner The scanner this section should use
     * @param metadataAgentProviderGroupId The agent group id for this section
     * @param locations The locations on disk to add to this section
     * @param prefs The preferences for this section
     * @param relative If set, paths are relative to `Media Upload` path
     * @param importFromiTunes If set, import media from iTunes.
     * @returns any OK
     * @throws ApiError
     */
    public static addSection(
        xPlexClientIdentifier: string,
        name: string,
        type: number,
        agent: string,
        language: string,
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
        scanner?: string,
        metadataAgentProviderGroupId?: string,
        locations?: Array<string>,
        prefs?: Record<string, any>,
        relative?: BoolInt,
        importFromiTunes?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/library/sections/all',
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
                'name': name,
                'type': type,
                'scanner': scanner,
                'agent': agent,
                'metadataAgentProviderGroupId': metadataAgentProviderGroupId,
                'language': language,
                'locations': locations,
                'prefs': prefs,
                'relative': relative,
                'importFromiTunes': importFromiTunes,
            },
            errors: {
                400: `Section cannot be created due to bad parameters in request`,
            },
        });
    }
    /**
     * Stop refresh
     * Stop all refreshes across all sections
     * @returns any OK
     * @throws ApiError
     */
    public static stopAllRefreshes(): CancelablePromise<{
        MediaContainer?: (ServerConfiguration & {
            Directory?: Array<{
                count?: number;
                /**
                 * The key where this directory is found
                 */
                key?: string;
                title?: string;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/library/sections/all/refresh',
        });
    }
    /**
     * Get section prefs
     * Get a section's preferences for a metadata type
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param type The metadata type
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
     * @param agent The metadata agent in use
     * @returns any OK
     * @throws ApiError
     */
    public static getSectionsPrefs(
        xPlexClientIdentifier: string,
        type: number,
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
        agent?: string,
    ): CancelablePromise<{
        MediaContainer?: (ServerConfiguration & {
            Directory?: Array<{
                count?: number;
                /**
                 * The key where this directory is found
                 */
                key?: string;
                title?: string;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/prefs',
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
                'agent': agent,
            },
            errors: {
                400: `type not provided or not an integer`,
            },
        });
    }
    /**
     * Refresh all sections
     * Tell PMS to refresh all section metadata
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
     * @param force Force refresh of metadata
     * @returns any OK
     * @throws ApiError
     */
    public static refreshSectionsMetadata(
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
        force?: boolean,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/library/sections/refresh',
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
                'force': force,
            },
            errors: {
                503: `Server cannot refresh a music library when not signed in`,
            },
        });
    }
    /**
     * Get all library tags of a type
     * Get all library tags of a type
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
     * @param type The type of media to retrieve or filter by.
     *
     * 1 = movie
     * 2 = show
     * 3 = season
     * 4 = episode
     * 5 = artist
     * 6 = album
     * 7 = track
     * 8 = photo_album
     * 9 = photo
     *
     * E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries
     *
     * @returns any OK
     * @throws ApiError
     */
    public static getTags(
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
        type?: MediaType,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Directory?: Array<{
                /**
                 * The filter string to view metadata wit this tag
                 */
                filter?: string;
                id?: number;
                /**
                 * The name of the tag
                 */
                tag?: string;
                /**
                 * The key of this tag.  This is a universal key across all PMS instances and plex.tv services
                 */
                tagKey?: string;
                /**
                 * The type of the tag
                 */
                tagType?: number;
                /**
                 * The URL to a thumbnail for this tag
                 */
                thumb?: string;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/tags',
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
        });
    }
    /**
     * Delete a metadata item
     * Delete a single metadata item from the library, deleting media as well
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
     * @param proxy Whether proxy items, such as media optimized versions, should also be deleted.  Defaults to false.
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMetadataItem(
        xPlexClientIdentifier: string,
        ids: string,
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
        proxy?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
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
                'proxy': proxy,
            },
            errors: {
                400: `Media items could not be deleted`,
            },
        });
    }
    /**
     * Edit a metadata item
     * Edit metadata items setting fields
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
     * @param args The new values for the metadata item
     * @returns any OK
     * @throws ApiError
     */
    public static editMetadataItem(
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
        args?: Record<string, any>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
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
                'args': args,
            },
            errors: {
                400: `Media items could not be deleted`,
            },
        });
    }
    /**
     * Ad-detect an item
     * Start the detection of ads in a metadata item
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
     * @returns any OK
     * @throws ApiError
     */
    public static detectAds(
        xPlexClientIdentifier: string,
        ids: string,
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
            url: '/library/metadata/{ids}/addetect',
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
        });
    }
    /**
     * Get the leaves of an item
     * Get the leaves for a metadata item such as the episodes in a show
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
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static getAllItemLeaves(
        xPlexClientIdentifier: string,
        ids: string,
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
            url: '/library/metadata/{ids}/allLeaves',
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
        });
    }
    /**
     * Analyze an item
     * Start the analysis of a metadata item
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
     * @param thumbOffset Set the offset to be used for thumbnails
     * @param artOffset Set the offset to be used for artwork
     * @returns any OK
     * @throws ApiError
     */
    public static analyzeMetadata(
        xPlexClientIdentifier: string,
        ids: string,
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
        thumbOffset?: number,
        artOffset?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/metadata/{ids}/analyze',
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
                'thumbOffset': thumbOffset,
                'artOffset': artOffset,
            },
        });
    }
    /**
     * Generate thumbs of chapters for an item
     * Start the chapter thumb generation for an item
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
     * @param force
     * @returns any OK
     * @throws ApiError
     */
    public static generateThumbs(
        xPlexClientIdentifier: string,
        ids: string,
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
        force?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/metadata/{ids}/chapterThumbs',
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
                'force': force,
            },
        });
    }
    /**
     * Credit detect a metadata item
     * Start credit detection on a metadata item
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
     * @param force
     * @param manual
     * @returns any OK
     * @throws ApiError
     */
    public static detectCredits(
        xPlexClientIdentifier: string,
        ids: string,
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
        force?: BoolInt,
        manual?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/metadata/{ids}/credits',
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
                'force': force,
                'manual': manual,
            },
        });
    }
    /**
     * Get an item's extras
     * Get the extras for a metadata item
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
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static getExtras(
        xPlexClientIdentifier: string,
        ids: string,
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
            url: '/library/metadata/{ids}/extras',
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
        });
    }
    /**
     * Add to an item's extras
     * Add an extra to a metadata item
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param ids
     * @param url The URL of the extra
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
     * @param extraType The metadata type of the extra
     * @param title The title to filter by or assign
     * @returns any OK
     * @throws ApiError
     */
    public static addExtras(
        xPlexClientIdentifier: string,
        ids: string,
        url: string,
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
        extraType?: number,
        title?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/library/metadata/{ids}/extras',
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
                'extraType': extraType,
                'url': url,
                'title': title,
            },
            errors: {
                404: `Either the metadata item is not present or the extra could not be added`,
            },
        });
    }
    /**
     * Get a file from a metadata or media bundle
     * Get a bundle file for a metadata or media item.  This is either an image or a mp3 (for a show's theme)
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
     * @param url The bundle url, typically starting with `metadata://` or `media://`
     * @returns binary OK
     * @throws ApiError
     */
    public static getFile(
        xPlexClientIdentifier: string,
        ids: string,
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
        url?: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/metadata/{ids}/file',
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
                'url': url,
            },
        });
    }
    /**
     * Start BIF generation of an item
     * Start the indexing (BIF generation) of an item
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
     * @param force
     * @returns any OK
     * @throws ApiError
     */
    public static startBifGeneration(
        xPlexClientIdentifier: string,
        ids: string,
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
        force?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/metadata/{ids}/index',
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
                'force': force,
            },
        });
    }
    /**
     * Intro detect an item
     * Start the detection of intros in a metadata item
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
     * @param force Indicate whether detection should be re-run
     * @param threshold The threshold for determining if content is an intro or not
     * @returns any OK
     * @throws ApiError
     */
    public static detectIntros(
        xPlexClientIdentifier: string,
        ids: string,
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
        force?: BoolInt,
        threshold?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/metadata/{ids}/intro',
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
                'force': force,
                'threshold': threshold,
            },
        });
    }
    /**
     * Create a marker
     * Create a marker for this user on the metadata item
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param ids
     * @param type The type of marker to edit/create
     * @param startTimeOffset The start time of the marker
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
     * @param endTimeOffset The end time of the marker
     * @param attributes The attributes to assign to this marker
     * @returns any OK
     * @throws ApiError
     */
    public static createMarker(
        xPlexClientIdentifier: string,
        ids: string,
        type: number,
        startTimeOffset: number,
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
        endTimeOffset?: number,
        attributes?: Record<string, any>,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & Record<string, any>);
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/library/metadata/{ids}/marker',
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
                'type': type,
                'startTimeOffset': startTimeOffset,
                'endTimeOffset': endTimeOffset,
                'attributes': attributes,
            },
            errors: {
                400: `Request parameters are bad, such as an \`endTimeOffset\` prior to the \`startTimeOffset\``,
            },
        });
    }
    /**
     * Match a metadata item
     * Match a metadata item to a guid
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
     * @param guid
     * @param name
     * @param year
     * @returns any OK
     * @throws ApiError
     */
    public static matchItem(
        xPlexClientIdentifier: string,
        ids: string,
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
        name?: string,
        year?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/metadata/{ids}/match',
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
                'guid': guid,
                'name': name,
                'year': year,
            },
        });
    }
    /**
     * Get metadata matches for an item
     * Get the list of metadata matches for a metadata item
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
     * @param title
     * @param parentTitle
     * @param agent
     * @param language
     * @param year
     * @param manual
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static listMatches(
        xPlexClientIdentifier: string,
        ids: string,
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
        title?: string,
        parentTitle?: string,
        agent?: string,
        language?: string,
        year?: number,
        manual?: BoolInt,
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/metadata/{ids}/matches',
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
                'title': title,
                'parentTitle': parentTitle,
                'agent': agent,
                'language': language,
                'year': year,
                'manual': manual,
            },
        });
    }
    /**
     * Merge a metadata item
     * Merge a metadata item with other items
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
     * @param ids
     * @returns any OK
     * @throws ApiError
     */
    public static mergeItems(
        xPlexClientIdentifier: string,
        ids: string,
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
        ids?: Array<string>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/metadata/{ids}/merge',
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
                'ids': ids,
            },
        });
    }
    /**
     * Get nearest tracks to metadata item
     * Get the nearest tracks, sonically, to the provided track
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
     * @param excludeParentId
     * @param excludeGrandparentId
     * @param limit
     * @param maxDistance
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static listSonicallySimilar(
        xPlexClientIdentifier: string,
        ids: string,
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
        excludeParentId?: number,
        excludeGrandparentId?: number,
        limit?: number,
        maxDistance?: number,
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/metadata/{ids}/nearest',
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
                'excludeParentID': excludeParentId,
                'excludeGrandparentID': excludeGrandparentId,
                'limit': limit,
                'maxDistance': maxDistance,
            },
        });
    }
    /**
     * Set metadata preferences
     * Set the preferences on a metadata item
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
     * @param args
     * @returns any OK
     * @throws ApiError
     */
    public static setItemPreferences(
        xPlexClientIdentifier: string,
        ids: string,
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
        args?: Record<string, any>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/metadata/{ids}/prefs',
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
                'args': args,
            },
        });
    }
    /**
     * Refresh a metadata item
     * Refresh a metadata item from the agent
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
     * @param agent
     * @param markUpdated
     * @returns any OK
     * @throws ApiError
     */
    public static refreshItemsMetadata(
        xPlexClientIdentifier: string,
        ids: string,
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
        agent?: string,
        markUpdated?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/metadata/{ids}/refresh',
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
                'agent': agent,
                'markUpdated': markUpdated,
            },
        });
    }
    /**
     * Get related items
     * Get a hub of related items to a metadata item
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
     * @returns any OK
     * @throws ApiError
     */
    public static getRelatedItems(
        xPlexClientIdentifier: string,
        ids: string,
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
            Hub?: Array<Hub>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/metadata/{ids}/related',
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
        });
    }
    /**
     * Get similar items
     * Get a list of similar items to a metadata item
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
     * @param count Limit results to count items
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static listSimilar(
        xPlexClientIdentifier: string,
        ids: string,
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
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/metadata/{ids}/similar',
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
                'count': count,
            },
        });
    }
    /**
     * Split a metadata item
     * Split a metadata item into multiple items
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
     * @returns any OK
     * @throws ApiError
     */
    public static splitItem(
        xPlexClientIdentifier: string,
        ids: string,
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
            url: '/library/metadata/{ids}/split',
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
        });
    }
    /**
     * Add subtitles
     * Add a subtitle to a metadata item
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
     * @param title
     * @param language
     * @param mediaItemId
     * @param url The URL of the subtitle.  If not provided, the contents of the subtitle must be in the post body
     * @param format
     * @param forced
     * @param hearingImpaired
     * @returns any OK
     * @throws ApiError
     */
    public static addSubtitles(
        xPlexClientIdentifier: string,
        ids: string,
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
        title?: string,
        language?: string,
        mediaItemId?: number,
        url?: string,
        format?: string,
        forced?: BoolInt,
        hearingImpaired?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/metadata/{ids}/subtitles',
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
                'title': title,
                'language': language,
                'mediaItemID': mediaItemId,
                'url': url,
                'format': format,
                'forced': forced,
                'hearingImpaired': hearingImpaired,
            },
        });
    }
    /**
     * Get metadata items as a tree
     * Get a tree of metadata items, such as the seasons/episodes of a show
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
     * @returns MediaContainerWithNestedMetadata OK
     * @throws ApiError
     */
    public static getItemTree(
        xPlexClientIdentifier: string,
        ids: string,
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
    ): CancelablePromise<MediaContainerWithNestedMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/metadata/{ids}/tree',
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
        });
    }
    /**
     * Unmatch a metadata item
     * Unmatch a metadata item to info fetched from the agent
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
     * @returns any OK
     * @throws ApiError
     */
    public static unmatch(
        xPlexClientIdentifier: string,
        ids: string,
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
            url: '/library/metadata/{ids}/unmatch',
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
        });
    }
    /**
     * Get metadata top users
     * Get the list of users which have played this item starting with the most
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
     * @returns any OK
     * @throws ApiError
     */
    public static listTopUsers(
        xPlexClientIdentifier: string,
        ids: string,
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
            Account?: Array<{
                globalViewCount?: number;
                id?: number;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/metadata/{ids}/users/top',
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
        });
    }
    /**
     * Detect voice activity
     * Start the detection of voice in a metadata item
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
     * @param force Indicate whether detection should be re-run
     * @param manual Indicate whether detection is manually run
     * @returns any OK
     * @throws ApiError
     */
    public static detectVoiceActivity(
        xPlexClientIdentifier: string,
        ids: string,
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
        force?: BoolInt,
        manual?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/metadata/{ids}/voiceActivity',
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
                'force': force,
                'manual': manual,
            },
        });
    }
    /**
     * Get augmentation status
     * Get augmentation status and potentially wait for completion
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param augmentationId The id of the augmentation
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
     * @param wait Wait for augmentation completion before returning
     * @returns void
     * @throws ApiError
     */
    public static getAugmentationStatus(
        xPlexClientIdentifier: string,
        augmentationId: string,
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
        wait?: BoolInt,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/metadata/augmentations/{augmentationId}',
            path: {
                'augmentationId': augmentationId,
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
                'wait': wait,
            },
            errors: {
                401: `This augmentation is not owned by the requesting user`,
                404: `No augmentation found`,
            },
        });
    }
    /**
     * Set stream selection
     * Set which streams (audio/subtitle) are selected by this user
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param partId The id of the part to select streams on
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
     * @param audioStreamId The id of the audio stream to select in this part
     * @param subtitleStreamId The id of the subtitle stream to select in this part.  Specify 0 to select no subtitle
     * @param allParts Perform the same for all parts of this media selecting similar streams in each
     * @returns any OK
     * @throws ApiError
     */
    public static setStreamSelection(
        xPlexClientIdentifier: string,
        partId: number,
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
        audioStreamId?: number,
        subtitleStreamId?: number,
        allParts?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/parts/{partId}',
            path: {
                'partId': partId,
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
                'audioStreamID': audioStreamId,
                'subtitleStreamID': subtitleStreamId,
                'allParts': allParts,
            },
            errors: {
                400: `One of the audio or subtitle streams does not belong to this part`,
            },
        });
    }
    /**
     * Get person details
     * Get details for a single actor.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param personId Either the PMS tag `id` of the person or `tagKey` of the actor.  Note the `tagKey` is the hex portion of the plex guid for the actor
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
    public static getPerson(
        xPlexClientIdentifier: string,
        personId: string,
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
            Directory?: Array<Tag>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/people/{personId}',
            path: {
                'personId': personId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * Get media for a person
     * Get all the media for a single actor.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param personId Either the PMS tag `id` of the person or `tagKey` of the actor.  Note the `tagKey` is the hex portion of the plex guid for the actor
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
    public static listPersonMedia(
        xPlexClientIdentifier: string,
        personId: string,
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
            url: '/library/people/{personId}/media',
            path: {
                'personId': personId,
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
                404: `Not Found`,
            },
        });
    }
    /**
     * Delete a library section
     * Delete a library section by id
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId The section identifier
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
     * @param async If set, response will return an activity with the actual deletion process.  Otherwise request will return when deletion is complete
     * @returns any OK
     * @throws ApiError
     */
    public static deleteLibrarySection(
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
        async?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/library/sections/{sectionId}',
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
                'async': async,
            },
        });
    }
    /**
     * Get a library section by id
     * Returns details for the library. This can be thought of as an interstitial endpoint because it contains information about the library, rather than content itself. It often contains a list of `Directory` metadata objects: These used to be used by clients to build a menuing system.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId The section identifier
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
     * @param includeDetails Whether or not to include details for a section (types, filters, and sorts). Only exists for backwards compatibility, media providers other than the server libraries have it on always.
     * @returns any OK
     * @throws ApiError
     */
    public static getLibraryDetails(
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
        includeDetails?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}',
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
                'includeDetails': includeDetails,
            },
        });
    }
    /**
     * Edit a library section
     * Edit a library section by id setting parameters
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId The section identifier
     * @param agent The agent this section should use for metadata
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
     * @param name The name of the new section
     * @param scanner The scanner this section should use
     * @param metadataAgentProviderGroupId The agent group id for this section
     * @param language The language of this section
     * @param locations The locations on disk to add to this section
     * @param prefs The preferences for this section
     * @returns any OK
     * @throws ApiError
     */
    public static editSection(
        xPlexClientIdentifier: string,
        sectionId: string,
        agent: string,
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
        name?: string,
        scanner?: string,
        metadataAgentProviderGroupId?: string,
        language?: string,
        locations?: Array<string>,
        prefs?: Record<string, any>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/sections/{sectionId}',
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
                'name': name,
                'scanner': scanner,
                'agent': agent,
                'metadataAgentProviderGroupId': metadataAgentProviderGroupId,
                'language': language,
                'locations': locations,
                'prefs': prefs,
            },
            errors: {
                400: `Section cannot be created due to bad parameters in request`,
            },
        });
    }
    /**
     * Set the fields of the filtered items
     * This endpoint takes an large possible set of values.  Here are some examples.
     * - **Parameters, extra documentation**
     * - artist.title.value
     * - When used with track, both artist.title.value and album.title.value need to be specified
     * - title.value usage
     * - Summary
     * - Tracks always rename and never merge
     * - Albums and Artists
     * - if single item and item without title does not exist, it is renamed.
     * - if single item and item with title does exist they are merged.
     * - if multiple they are always merged.
     * - Tracks
     * - Works as expected will update the track's title
     * - Single track:    `/library/sections/{id}/all?type=10&id=42&title.value=NewName`
     * - Multiple tracks: `/library/sections/{id}/all?type=10&id=42,43,44&title.value=NewName`
     * - All tracks:      `/library/sections/{id}/all?type=10&title.value=NewName`
     * - Albums
     * - Functionality changes depending on the existence of an album with the same title
     * - Album exists
     * - Single album: `/library/sections/{id}/all?type=9&id=42&title.value=Album 2`
     * - Album with id 42 is merged into album titled "Album 2"
     * - Multiple/All albums: `/library/sections/{id}/all?type=9&title.value=Moo Album`
     * - All albums are merged into the existing album titled "Moo Album"
     * - Album does not exist
     * - Single album: `/library/sections/{id}/all?type=9&id=42&title.value=NewAlbumTitle`
     * - Album with id 42 has title modified to "NewAlbumTitle"
     * - Multiple/All albums: `/library/sections/{id}/all?type=9&title.value=NewAlbumTitle`
     * - All albums are merged into a new album with title="NewAlbumTitle"
     * - Artists
     * - Functionaly changes depending on the existence of an artist with the same title.
     * - Artist exists
     * - Single artist: `/library/sections/{id}/all?type=8&id=42&title.value=Artist 2`
     * - Artist with id 42 is merged into existing artist titled "Artist 2"
     * - Multiple/All artists: `/library/sections/{id}/all?type=8&title.value=Artist 3`
     * - All artists are merged into the existing artist titled "Artist 3"
     * - Artist does not exist
     * - Single artist: `/library/sections/{id}/all?type=8&id=42&title.value=NewArtistTitle`
     * - Artist with id 42 has title modified to "NewArtistTitle"
     * - Multiple/All artists: `/library/sections/{id}/all?type=8&title.value=NewArtistTitle`
     * - All artists are merged into a new artist with title="NewArtistTitle"
     *
     * - **Notes**
     * - Technically square brackets are not allowed in an URI except the Internet Protocol Literal Address
     * - RFC3513: A host identified by an Internet Protocol literal address, version 6 [RFC3513] or later, is distinguished by enclosing the IP literal within square brackets ("[" and "]"). This is the only place where square bracket characters are allowed in the URI syntax.
     * - Escaped square brackets are allowed, but don't render well
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
     * @param type
     * @param filters The filters to apply to determine which items should be modified
     * @param fieldValue Set the specified field to a new value
     * @param fieldLocked Set the specified field to locked (or unlocked if set to 0)
     * @param titleValue This field is treated specially by albums or artists and may be used for implicit reparenting.
     * @param artistTitleValue Reparents set of Tracks or Albums - used with album.title.* in the case of tracks
     * @param artistTitleId Reparents set of Tracks or Albums - used with album.title.* in the case of tracks
     * @param albumTitleValue Reparents set of Tracks - Must be used in conjunction with artist.title.value or id
     * @param albumTitleId Reparents set of Tracks - Must be used in conjunction with artist.title.value or id
     * @param tagtypeIdxTagTag Creates tag and associates it with each item in the set. - [idx] links this and the next parameters together
     * @param tagtypeIdxTaggingObject Here `object` may be text/thumb/art/theme - Optionally used in conjunction with tag.tag, to update association info across the set.
     * @param tagtypeArrayTagTag Remove comma separated tags from the set of items
     * @param tagtypeArrayTag Remove associations of this type (e.g. genre) from the set of items
     * @returns any OK
     * @throws ApiError
     */
    public static updateItems(
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
        type?: string,
        filters?: string,
        fieldValue?: string,
        fieldLocked?: BoolInt,
        titleValue?: string,
        artistTitleValue?: string,
        artistTitleId?: string,
        albumTitleValue?: string,
        albumTitleId?: string,
        tagtypeIdxTagTag?: string,
        tagtypeIdxTaggingObject?: string,
        tagtypeArrayTagTag?: string,
        tagtypeArrayTag?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
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
                'type': type,
                'filters': filters,
                'field.value': fieldValue,
                'field.locked': fieldLocked,
                'title.value': titleValue,
                'artist.title.value': artistTitleValue,
                'artist.title.id': artistTitleId,
                'album.title.value': albumTitleValue,
                'album.title.id': albumTitleId,
                'tagtype[idx].tag.tag': tagtypeIdxTagTag,
                'tagtype[idx].tagging.object': tagtypeIdxTaggingObject,
                'tagtype[].tag.tag-': tagtypeArrayTagTag,
                'tagtype[].tag': tagtypeArrayTag,
            },
            errors: {
                400: `The set of parameters are inconsistent or invalid values`,
                404: `A required item could not be found`,
                409: `Rename of a collection to a name that's already taken`,
            },
        });
    }
    /**
     * Analyze a section
     * Start analysis of all items in a section.  If BIF generation is enabled, this will also be started on this section
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
    public static startAnalysis(
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
            method: 'PUT',
            url: '/library/sections/{sectionId}/analyze',
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
     * Get autocompletions for search
     * The field to autocomplete on is specified by the `{field}.query` parameter. For example `genre.query` or `title.query`.
     * Returns a set of items from the filtered items whose `{field}` starts with `{field}.query`.  In the results, a `{field}.queryRange` will be present to express the range of the match
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
     * @param type Item type
     * @param fieldQuery The "field" stands in for any field, the value is a partial string for matching
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
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static autocomplete(
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
        type?: number,
        fieldQuery?: string,
        mediaQuery?: MediaQuery,
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/autocomplete',
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
                'field.query': fieldQuery,
                'mediaQuery': mediaQuery,
            },
            errors: {
                400: `A paramater is either invalid or missing`,
            },
        });
    }
    /**
     * Get collections in a section
     * Get all collections in a section
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
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static getCollections(
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
        mediaQuery?: MediaQuery,
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/collections',
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
                'mediaQuery': mediaQuery,
            },
        });
    }
    /**
     * Get common fields for items
     * Represents a "Common" item. It contains only the common attributes of the items selected by the provided filter
     * Fields which are not common will be expressed in the `mixedFields` field
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
     * @param type Item type
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
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static getCommon(
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
        type?: number,
        mediaQuery?: MediaQuery,
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/common',
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
                'mediaQuery': mediaQuery,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Empty section trash
     * Empty trash in the section, permanently deleting media/metadata for missing media
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
    public static emptyTrash(
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
            method: 'PUT',
            url: '/library/sections/{sectionId}/emptyTrash',
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
     * Get section filters
     * Get common filters on a section
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
     * @returns any The filters on the section
     * @throws ApiError
     */
    public static getSectionFilters(
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
            Directory?: Array<Directory>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/filters',
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
     * Get list of first characters
     * Get list of first characters in this section
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
     * @param type The metadata type to filter on
     * @param sort The metadata type to filter on
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
     * @returns any OK
     * @throws ApiError
     */
    public static getFirstCharacters(
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
        type?: number,
        sort?: number,
        mediaQuery?: MediaQuery,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Directory?: Array<{
                key?: string;
                /**
                 * The number of items starting with this character
                 */
                size?: number;
                title?: string;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/firstCharacters',
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
                'sort': sort,
                'mediaQuery': mediaQuery,
            },
        });
    }
    /**
     * Delete section indexes
     * Delete all the indexes in a section
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
    public static deleteIndexes(
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
            url: '/library/sections/{sectionId}/indexes',
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
     * Delete section intro markers
     * Delete all the intro markers in a section
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
    public static deleteIntros(
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
            url: '/library/sections/{sectionId}/intros',
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
     * Get section prefs
     * Get the prefs for a section by id and potentially overriding the agent
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
     * @param agent
     * @returns MediaContainerWithSettings OK
     * @throws ApiError
     */
    public static getSectionPreferences(
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
        agent?: string,
    ): CancelablePromise<MediaContainerWithSettings> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/prefs',
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
                'agent': agent,
            },
        });
    }
    /**
     * Set section prefs
     * Set the prefs for a section by id
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId Section identifier
     * @param prefs
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
    public static setSectionPreferences(
        xPlexClientIdentifier: string,
        sectionId: number,
        prefs: Record<string, any>,
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
            url: '/library/sections/{sectionId}/prefs',
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
                'prefs': prefs,
            },
        });
    }
    /**
     * Cancel section refresh
     * Cancel the refresh of a section
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
    public static cancelRefresh(
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
            url: '/library/sections/{sectionId}/refresh',
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
     * Refresh section
     * Start a refresh of this section
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
     * @param force Whether the update of metadata and items should be performed even if modification dates indicate the items have not change
     * @param path Restrict refresh to the specified path
     * @returns any OK
     * @throws ApiError
     */
    public static refreshSection(
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
        force?: BoolInt,
        path?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/library/sections/{sectionId}/refresh',
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
                'force': force,
                'path': path,
            },
        });
    }
    /**
     * Get a section sorts
     * Get the sort mechanisms available in a section
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
    public static getAvailableSorts(
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
            Directory?: Array<Sort>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/sorts',
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
     * Get loudness about a stream in json
     * The the loudness of a stream in db, one entry per 100ms
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param streamId The id of the stream
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
     * @param subsample Subsample result down to return only the provided number of samples
     * @returns any OK
     * @throws ApiError
     */
    public static getStreamLevels(
        xPlexClientIdentifier: string,
        streamId: number,
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
        subsample?: number,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Level?: Array<{
                /**
                 * The level in db.
                 */
                'v'?: number;
            }>;
            /**
             * The total number of samples (as a string)
             */
            totalSamples?: string;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/streams/{streamId}/levels',
            path: {
                'streamId': streamId,
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
                'subsample': subsample,
            },
            errors: {
                403: `The media is not accessible to the user`,
                404: `The stream doesn't exist, or the loudness feature is not available on this PMS`,
            },
        });
    }
    /**
     * Get loudness about a stream
     * The the loudness of a stream in db, one number per line, one entry per 100ms
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param streamId The id of the stream
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
     * @param subsample Subsample result down to return only the provided number of samples
     * @returns string OK
     * @throws ApiError
     */
    public static getStreamLoudness(
        xPlexClientIdentifier: string,
        streamId: number,
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
        subsample?: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/streams/{streamId}/loudness',
            path: {
                'streamId': streamId,
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
                'subsample': subsample,
            },
            errors: {
                403: `The media is not accessible to the user`,
                404: `The stream doesn't exist, or the loudness feature is not available on this PMS`,
            },
        });
    }
    /**
     * Get a chapter image
     * Get a single chapter image for a piece of media
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param mediaId The id of the media item
     * @param chapter The index of the chapter
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
     * @returns binary OK
     * @throws ApiError
     */
    public static getChapterImage(
        xPlexClientIdentifier: string,
        mediaId: number,
        chapter: number,
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
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/media/{mediaId}/chapterImages/{chapter}',
            path: {
                'mediaId': mediaId,
                'chapter': chapter,
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
                404: `Either the media item or the chapter image was not found`,
            },
        });
    }
    /**
     * Set an item's artwork, theme, etc
     * Set the artwork, thumb, element for a metadata item
     * Generally only the admin can perform this action.  The exception is if the metadata is a playlist created by the user
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param ids
     * @param element
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
     * @param url The url of the new asset.  If not provided, the binary of the asset must be provided in the post body.
     * @returns any OK
     * @throws ApiError
     */
    public static setItemArtwork(
        xPlexClientIdentifier: string,
        ids: string,
        element: 'thumb' | 'art' | 'clearLogo' | 'banner' | 'poster' | 'theme',
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
        url?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/library/metadata/{ids}/{element}',
            path: {
                'ids': ids,
                'element': element,
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
                'url': url,
            },
        });
    }
    /**
     * Set an item's artwork, theme, etc
     * Set the artwork, thumb, element for a metadata item
     * Generally only the admin can perform this action.  The exception is if the metadata is a playlist created by the user
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param ids
     * @param element
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
     * @param url The url of the new asset.
     * @returns any OK
     * @throws ApiError
     */
    public static updateItemArtwork(
        xPlexClientIdentifier: string,
        ids: string,
        element: 'thumb' | 'art' | 'clearLogo' | 'banner' | 'poster' | 'theme',
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
        url?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/metadata/{ids}/{element}',
            path: {
                'ids': ids,
                'element': element,
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
                'url': url,
            },
        });
    }
    /**
     * Delete a marker
     * Delete a marker for this user on the metadata item
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param ids
     * @param marker
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
    public static deleteMarker(
        xPlexClientIdentifier: string,
        ids: string,
        marker: string,
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
            url: '/library/metadata/{ids}/marker/{marker}',
            path: {
                'ids': ids,
                'marker': marker,
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
                400: `Marker is not a bookmark`,
                404: `Marker could not be found`,
            },
        });
    }
    /**
     * Edit a marker
     * Edit a marker for this user on the metadata item
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param ids
     * @param marker The id of the marker to edit
     * @param type The type of marker to edit/create
     * @param startTimeOffset The start time of the marker
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
     * @param endTimeOffset The end time of the marker
     * @param attributes The attributes to assign to this marker
     * @returns any OK
     * @throws ApiError
     */
    public static editMarker(
        xPlexClientIdentifier: string,
        ids: string,
        marker: string,
        type: number,
        startTimeOffset: number,
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
        endTimeOffset?: number,
        attributes?: Record<string, any>,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & Record<string, any>);
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/metadata/{ids}/marker/{marker}',
            path: {
                'ids': ids,
                'marker': marker,
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
                'startTimeOffset': startTimeOffset,
                'endTimeOffset': endTimeOffset,
                'attributes': attributes,
            },
            errors: {
                400: `Request parameters are bad, such as an \`endTimeOffset\` prior to the \`startTimeOffset\``,
                404: `The marker could not be found`,
            },
        });
    }
    /**
     * Delete a media item
     * Delete a single media from a metadata item in the library
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param ids
     * @param mediaItem
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
     * @param proxy Whether proxy items, such as media optimized versions, should also be deleted.  Defaults to false.
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMediaItem(
        xPlexClientIdentifier: string,
        ids: string,
        mediaItem: string,
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
        proxy?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/library/metadata/{ids}/media/{mediaItem}',
            path: {
                'ids': ids,
                'mediaItem': mediaItem,
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
                'proxy': proxy,
            },
            errors: {
                400: `Media item could not be deleted`,
                404: `Media item could not be found`,
            },
        });
    }
    /**
     * Get BIF index for a part
     * Get BIF index for a part by index type
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param partId The part id who's index is to be fetched
     * @param index The type of index to grab.
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
     * @param interval The interval between images to return in ms.
     * @returns binary OK
     * @throws ApiError
     */
    public static getPartIndex(
        xPlexClientIdentifier: string,
        partId: number,
        index: 'sd',
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
        interval?: number,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/parts/{partId}/indexes/{index}',
            path: {
                'partId': partId,
                'index': index,
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
                'interval': interval,
            },
            errors: {
                404: `The part or the index doesn't exist or the interval is too small`,
            },
        });
    }
    /**
     * Delete a collection
     * Delete a library collection from the PMS
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId Section identifier
     * @param collectionId Collection Id
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
    public static deleteCollection(
        xPlexClientIdentifier: string,
        sectionId: number,
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
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/library/sections/{sectionId}/collection/{collectionId}',
            path: {
                'sectionId': sectionId,
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
     * Get a section composite image
     * Get a composite image of images in this section
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId Section identifier
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
     * @param composite
     * @returns any OK
     * @throws ApiError
     */
    public static getSectionImage(
        xPlexClientIdentifier: string,
        sectionId: number,
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
        mediaQuery?: MediaQuery,
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
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/sections/{sectionId}/composite/{updatedAt}',
            path: {
                'sectionId': sectionId,
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
                'mediaQuery': mediaQuery,
                'composite': composite,
            },
        });
    }
    /**
     * Delete a stream
     * Delete a stream.  Only applies to downloaded subtitle streams or a sidecar subtitle when media deletion is enabled.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param streamId The id of the stream
     * @param ext This is not a part of this endpoint but documented here to satisfy OpenAPI
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
    public static deleteStream(
        xPlexClientIdentifier: string,
        streamId: number,
        ext: string,
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
            url: '/library/streams/{streamId}.{ext}',
            path: {
                'streamId': streamId,
                'ext': ext,
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
                403: `This user cannot delete this stream`,
                500: `The stream cannot be deleted`,
            },
        });
    }
    /**
     * Get a stream
     * Get a stream (such as a sidecar subtitle stream)
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param streamId The id of the stream
     * @param ext The extension of the stream.  Required to fetch the `sub` portion of `idx`/`sub` subtitles
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
     * @param encoding The requested encoding for the subtitle (only used for text subtitles)
     * @param format The requested format for the subtitle to convert the subtitles to (only used for text subtitles)
     * @param autoAdjustSubtitle Whether the server should attempt to automatically adjust the subtitle timestamps to match the media
     * @returns any The stream in the requested format.
     * @throws ApiError
     */
    public static getStream(
        xPlexClientIdentifier: string,
        streamId: number,
        ext: string,
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
        encoding?: string,
        format?: string,
        autoAdjustSubtitle?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/streams/{streamId}.{ext}',
            path: {
                'streamId': streamId,
                'ext': ext,
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
                'encoding': encoding,
                'format': format,
                'autoAdjustSubtitle': autoAdjustSubtitle,
            },
            errors: {
                403: `The media is not accessible to the user`,
                404: `The stream doesn't exist or has no data`,
                501: `The stream is not a sidecar subtitle`,
            },
        });
    }
    /**
     * Set a stream offset
     * Set a stream offset in ms.  This may not be respected by all clients
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param streamId The id of the stream
     * @param ext This is not a part of this endpoint but documented here to satisfy OpenAPI
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
     * @param offset The offest in ms
     * @returns any The stream in the requested format.
     * @throws ApiError
     */
    public static setStreamOffset(
        xPlexClientIdentifier: string,
        streamId: number,
        ext: string,
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
        offset?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/library/streams/{streamId}.{ext}',
            path: {
                'streamId': streamId,
                'ext': ext,
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
                'offset': offset,
            },
            errors: {
                400: `The stream doesn't exist`,
            },
        });
    }
    /**
     * Get an item's artwork, theme, etc
     * Get the artwork, thumb, element for a metadata item
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param ids
     * @param element
     * @param timestamp A timestamp on the element used for cache management in the client
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
     * @returns binary OK
     * @throws ApiError
     */
    public static getItemArtwork(
        xPlexClientIdentifier: string,
        ids: string,
        element: 'thumb' | 'art' | 'clearLogo' | 'banner' | 'poster' | 'theme',
        timestamp: number,
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
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/metadata/{ids}/{element}/{timestamp}',
            path: {
                'ids': ids,
                'element': element,
                'timestamp': timestamp,
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
     * Get a media part
     * Get a media part for streaming or download.
     * - streaming: This is the default scenario.  Bandwidth usage on this endpoint will be guaranteed (on the server's end) to be at least the bandwidth reservation given in the decision.  If no decision exists, an ad-hoc decision will be created if sufficient bandwidth exists.  Clients should not rely on ad-hoc decisions being made as this may be removed in the future.
     * - download: Indicated if the query parameter indicates this is a download.  Bandwidth will be prioritized behind playbacks and will get a fair share of what remains.
     *
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param partId The part id who's index is to be fetched
     * @param changestamp The changestamp of the part; used for busting potential caches.  Provided in the `key` for the part
     * @param filename A generic filename used for a client media stack which relies on the extension in the request.  Provided in the `key` for the part
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
     * @param download Whether this is a file download
     * @returns string OK
     * @throws ApiError
     */
    public static getMediaPart(
        xPlexClientIdentifier: string,
        partId: number,
        changestamp: number,
        filename: string,
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
        download?: BoolInt,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/parts/{partId}/{changestamp}/{filename}',
            path: {
                'partId': partId,
                'changestamp': changestamp,
                'filename': filename,
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
                'download': download,
            },
            responseHeader: 'Content-Disposition',
            errors: {
                403: `Client requested download and server owner has forbidden download of media`,
                404: `The part doesn't exist`,
                503: `Client requested the part without a decision and no decision could be made or decision is for a transcode`,
                509: `Client requested the part without a decision and no decision could be made because there is insufficient bandwidth for client to direct play this part`,
            },
        });
    }
    /**
     * Get an image from part BIF
     * Extract an image from the BIF for a part at a particular offset
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param partId The part id who's index is to be fetched
     * @param index The type of index to grab.
     * @param offset The offset to seek in ms.
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
     * @returns binary OK
     * @throws ApiError
     */
    public static getImageFromBif(
        xPlexClientIdentifier: string,
        partId: number,
        index: 'sd',
        offset: number,
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
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/library/parts/{partId}/indexes/{index}/{offset}',
            path: {
                'partId': partId,
                'index': index,
                'offset': offset,
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
                404: `The part or the index doesn't exist`,
            },
        });
    }
}
