/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Hub } from '../models/Hub';
import type { MediaContainer } from '../models/MediaContainer';
import type { MediaType } from '../models/MediaType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SearchService {
    /**
     * Search Hub
     * Perform a search and get the result as hubs
     *
     * This endpoint performs a search across all library sections, or a single section, and returns matches as hubs, split up by type. It performs spell checking, looks for partial matches, and orders the hubs based on quality of results. In addition, based on matches, it will return other related matches (e.g. for a genre match, it may return movies in that genre, or for an actor match, movies with that actor).
     *
     * In the response's items, the following extra attributes are returned to further describe or disambiguate the result:
     *
     * - `reason`: The reason for the result, if not because of a direct search term match; can be either:
     * - `section`: There are multiple identical results from different sections.
     * - `originalTitle`: There was a search term match from the original title field (sometimes those can be very different or in a foreign language).
     * - `<hub identifier>`: If the reason for the result is due to a result in another hub, the source hub identifier is returned. For example, if the search is for "dylan" then Bob Dylan may be returned as an artist result, an a few of his albums returned as album results with a reason code of `artist` (the identifier of that particular hub). Or if the search is for "arnold", there might be movie results returned with a reason of `actor`
     * - `reasonTitle`: The string associated with the reason code. For a section reason, it'll be the section name; For a hub identifier, it'll be a string associated with the match (e.g. `Arnold Schwarzenegger` for movies which were returned because the search was for "arnold").
     * - `reasonID`: The ID of the item associated with the reason for the result. This might be a section ID, a tag ID, an artist ID, or a show ID.
     *
     * This request is intended to be very fast, and called as the user types.
     *
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param query The query term
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
     * @param sectionId This gives context to the search, and can result in re-ordering of search result hubs.
     * @param limit The number of items to return per hub.  3 if not specified
     * @returns any OK
     * @throws ApiError
     */
    public static searchHubs(
        xPlexClientIdentifier: string,
        query: string,
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
        sectionId?: number,
        limit?: number,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Hub?: Array<Hub>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/hubs/search',
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
                'query': query,
                'sectionId': sectionId,
                'limit': limit,
            },
            errors: {
                400: `A required parameter was not given, the wrong type, or wrong value`,
                404: `Search restrictions result in no possible items found (such as searching no sections)`,
            },
        });
    }
    /**
     * Voice Search Hub
     * Perform a search tailored to voice input and get the result as hubs
     *
     * This endpoint performs a search specifically tailored towards voice or other imprecise input which may work badly with the substring and spell-checking heuristics used by the `/hubs/search` endpoint. It uses a [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) heuristic to search titles, and as such is much slower than the other search endpoint. Whenever possible, clients should limit the search to the appropriate type.
     *
     * Results, as well as their containing per-type hubs, contain a `distance` attribute which can be used to judge result quality.
     *
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param query The query term
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
     * @param limit The number of items to return per hub.  3 if not specified
     * @returns any OK
     * @throws ApiError
     */
    public static voiceSearchHubs(
        xPlexClientIdentifier: string,
        query: string,
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
        limit?: number,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Hub?: Array<Hub>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/hubs/search/voice',
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
                'query': query,
                'type': type,
                'limit': limit,
            },
            errors: {
                400: `A required parameter was not given, the wrong type, or wrong value`,
            },
        });
    }
}
