/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoolInt } from '../models/BoolInt';
import type { MediaContainer } from '../models/MediaContainer';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UltraBlurService {
    /**
     * Get UltraBlur Colors
     * Retrieves the four colors extracted from an image for clients to use to generate an ultrablur image.
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
     * @param url Url for image which requires color extraction. Can be relative PMS library path or absolute url.
     * @returns any OK
     * @throws ApiError
     */
    public static getColors(
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
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            UltraBlurColors?: Array<{
                /**
                 * The color (hex) for the bottom left quadrant.
                 */
                bottomLeft?: string;
                /**
                 * The color (hex) for the bottom right quadrant.
                 */
                bottomRight?: string;
                /**
                 * The color (hex) for the top left quadrant.
                 */
                topLeft?: string;
                /**
                 * The color (hex) for the top right quadrant.
                 */
                topRight?: string;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/services/ultrablur/colors',
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
            errors: {
                404: `The image url could not be found.`,
                500: `The server was unable to successfully extract the UltraBlur colors.`,
            },
        });
    }
    /**
     * Get UltraBlur Image
     * Retrieves a server-side generated UltraBlur image based on the provided color inputs. Clients should always call this via the photo transcoder endpoint.
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
     * @param topLeft The base color (hex) for the top left quadrant.
     * @param topRight The base color (hex) for the top right quadrant.
     * @param bottomRight The base color (hex) for the bottom right quadrant.
     * @param bottomLeft The base color (hex) for the bottom left quadrant.
     * @param width Width in pixels for the image.
     * @param height Height in pixels for the image.
     * @param noise Whether to add noise to the ouput image. Noise can reduce color banding with the gradients. Image sizes with noise will be larger.
     * @returns binary OK
     * @throws ApiError
     */
    public static getImage(
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
        topLeft?: string,
        topRight?: string,
        bottomRight?: string,
        bottomLeft?: string,
        width?: number,
        height?: number,
        noise?: BoolInt,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/services/ultrablur/image',
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
                'topLeft': topLeft,
                'topRight': topRight,
                'bottomRight': bottomRight,
                'bottomLeft': bottomLeft,
                'width': width,
                'height': height,
                'noise': noise,
            },
            errors: {
                400: `Requested width and height parameters are out of bounds (maximum 3840 x 2160)`,
            },
        });
    }
}
