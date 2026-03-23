/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RateService {
    /**
     * Rate an item
     * Set the rating on an item.
     * This API does respond to the GET verb but applications should use PUT
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param identifier The identifier of the media provider containing the media to rate.  Typically `com.plexapp.plugins.library`
     * @param key The key of the item to rate.  This is the `ratingKey` found in metadata items
     * @param rating The rating to give the item.
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
     * @param ratedAt The time when the rating occurred.  If not present, interpreted as now.
     * @returns any OK
     * @throws ApiError
     */
    public static setRating(
        xPlexClientIdentifier: string,
        identifier: string,
        key: string,
        rating: number,
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
        ratedAt?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/:/rate',
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
                'rating': rating,
                'ratedAt': ratedAt,
            },
            errors: {
                400: `Bad Request.  Can occur when parameters are of the wrong type, missing, or if the \`ratedAt\` is in the future`,
                404: `Indicates that no library with the provide identifier can be found or no item can be found with the rating key`,
            },
        });
    }
}
