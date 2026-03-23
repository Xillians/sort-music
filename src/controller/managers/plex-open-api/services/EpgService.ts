/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Channel } from '../models/Channel';
import type { Lineup } from '../models/Lineup';
import type { MediaContainer } from '../models/MediaContainer';
import type { MediaContainerWithLineup } from '../models/MediaContainerWithLineup';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EpgService {
    /**
     * Compute the best channel map
     * Compute the best channel map, given device and lineup
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param device The URI describing the device
     * @param lineup The URI describing the lineup
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
    public static computeChannelMap(
        xPlexClientIdentifier: string,
        device: string,
        lineup: string,
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
            ChannelMapping?: Array<{
                channelKey?: string;
                /**
                 * The channel description on the device
                 */
                deviceIdentifier?: string;
                favorite?: boolean;
                /**
                 * The channel identifier in the lineup
                 */
                lineupIdentifier?: string;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/livetv/epg/channelmap',
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
                'device': device,
                'lineup': lineup,
            },
            errors: {
                404: `No device or provider with the identifier was found`,
                500: `Failed to compute channel map`,
            },
        });
    }
    /**
     * Get channels for a lineup
     * Get channels for a lineup within an EPG provider
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param lineup The URI describing the lineup
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
    public static getChannels(
        xPlexClientIdentifier: string,
        lineup: string,
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
            Channel?: Array<Channel>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/livetv/epg/channels',
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
                'lineup': lineup,
            },
            errors: {
                404: `No provider with the identifier was found`,
            },
        });
    }
    /**
     * Get all countries
     * This endpoint returns a list of countries which EPG data is available for. There are three flavors, as specfied by the `flavor` attribute
     * @returns any OK
     * @throws ApiError
     */
    public static getCountries(): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Country?: Array<{
                /**
                 * Three letter code
                 */
                code?: string;
                example?: string;
                /**
                 * - `0`: The country is divided into regions, and following the key will lead to a list of regions.
                 * - `1`: The county is divided by postal codes, and an example code is returned in `example`.
                 * - `2`: The country has a single postal code, returned in `example`.
                 *
                 */
                flavor?: 0 | 1 | 2;
                key?: string;
                /**
                 * Three letter language code
                 */
                language?: string;
                /**
                 * The title of the language
                 */
                languageTitle?: string;
                title?: string;
                type?: string;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/livetv/epg/countries',
        });
    }
    /**
     * Get all languages
     * Returns a list of all possible languages for EPG data.
     * @returns any OK
     * @throws ApiError
     */
    public static getAllLanguages(): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Language?: Array<{
                /**
                 * 3 letter language code
                 */
                code?: string;
                title?: string;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/livetv/epg/languages',
        });
    }
    /**
     * Compute the best lineup
     * Compute the best lineup, given lineup group and device
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param device The URI describing the device
     * @param lineupGroup The URI describing the lineupGroup
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
     * @returns string OK
     * @throws ApiError
     */
    public static getLineup(
        xPlexClientIdentifier: string,
        device: string,
        lineupGroup: string,
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
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/livetv/epg/lineup',
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
                'device': device,
                'lineupGroup': lineupGroup,
            },
            responseHeader: 'X-Plex-Activity',
            errors: {
                404: `No device or provider with the identifier was found`,
                500: `Could not get device's channels`,
            },
        });
    }
    /**
     * Get the channels for mulitple lineups
     * Get the channels across multiple lineups
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param lineup The URIs describing the lineups
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
    public static getLineupChannels(
        xPlexClientIdentifier: string,
        lineup: Array<string>,
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
            Lineup?: Array<(Lineup & {
                Channel?: Array<Channel>;
            })>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/livetv/epg/lineupchannels',
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
                'lineup': lineup,
            },
            errors: {
                404: `No provider with the identifier was found`,
            },
        });
    }
    /**
     * Get lineups for a country via postal code
     * Returns a list of lineups for a given country, EPG provider and postal code
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param country 3 letter country code
     * @param epgId The `providerIdentifier` of the provider
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
     * @param postalCode The postal code for the lineups to fetch
     * @returns MediaContainerWithLineup OK
     * @throws ApiError
     */
    public static getCountriesLineups(
        xPlexClientIdentifier: string,
        country: string,
        epgId: string,
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
        postalCode?: string,
    ): CancelablePromise<MediaContainerWithLineup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/livetv/epg/countries/{country}/{epgId}/lineups',
            path: {
                'country': country,
                'epgId': epgId,
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
                'postalCode': postalCode,
            },
            errors: {
                404: `No provider with the identifier was found`,
            },
        });
    }
    /**
     * Get regions for a country
     * Get regions for a country within an EPG provider
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param country 3 letter country code
     * @param epgId The `providerIdentifier` of the provider
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
    public static getCountryRegions(
        xPlexClientIdentifier: string,
        country: string,
        epgId: string,
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
            Country?: Array<{
                key?: string;
                national?: boolean;
                title?: string;
                type?: string;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/livetv/epg/countries/{country}/{epgId}/regions',
            path: {
                'country': country,
                'epgId': epgId,
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
                404: `No provider with the identifier was found`,
            },
        });
    }
    /**
     * Get lineups for a region
     * Get lineups for a region within an EPG provider
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param country 3 letter country code
     * @param epgId The `providerIdentifier` of the provider
     * @param region The region for the lineup
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
     * @returns MediaContainerWithLineup OK
     * @throws ApiError
     */
    public static listLineups(
        xPlexClientIdentifier: string,
        country: string,
        epgId: string,
        region: string,
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
    ): CancelablePromise<MediaContainerWithLineup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/livetv/epg/countries/{country}/{epgId}/regions/{region}/lineups',
            path: {
                'country': country,
                'epgId': epgId,
                'region': region,
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
                404: `No provider with the identifier was found`,
            },
        });
    }
}
