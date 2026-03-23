/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaContainerWithMetadata } from '../models/MediaContainerWithMetadata';
import type { MediaType } from '../models/MediaType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CollectionsService {
    /**
     * Create collection
     * Create a collection in the library
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param sectionId The section where this collection will be created
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
     * @param title The title to filter by or assign
     * @param smart Whether this is a smart collection/playlist
     * @param uri The URI for processing the smart collection.  Required for a smart collection
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
     * @returns MediaContainerWithMetadata OK
     * @throws ApiError
     */
    public static createCollection(
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
        title?: string,
        smart?: boolean,
        uri?: string,
        type?: MediaType,
    ): CancelablePromise<MediaContainerWithMetadata> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/library/collections',
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
                'sectionId': sectionId,
                'title': title,
                'smart': smart,
                'uri': uri,
                'type': type,
            },
            errors: {
                400: `The uri is missing for a smart collection or the section could not be found`,
            },
        });
    }
}
