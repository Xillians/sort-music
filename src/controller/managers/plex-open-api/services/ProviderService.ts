/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Directory } from '../models/Directory';
import type { ServerConfiguration } from '../models/ServerConfiguration';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProviderService {
    /**
     * Get the list of available media providers
     * Get the list of all available media providers for this PMS.  This will generally include the library provider and possibly EPG if DVR is set up.
     * @returns any OK
     * @throws ApiError
     */
    public static listProviders(): CancelablePromise<{
        MediaContainer?: (ServerConfiguration & {
            Feature?: Array<{
                Directory?: Array<Directory>;
                key?: string;
                type?: string;
            }>;
            /**
             * A unique identifier for the provider, e.g. `com.plexapp.plugins.library`.
             */
            identifier?: string;
            /**
             * A comma-separated list of default protocols for the provider, which can be:
             * - `stream`: The provider allows streaming media directly from the provider (e.g. for Vimeo). - `download`: The provider allows downloading media for offline storage, sync, etc. (e.g. Podcasts). - `livetv`: The provider provides live content which is only available on a schedule basis.
             */
            protocols?: string;
            /**
             * The title of the provider.
             */
            title?: string;
            /**
             * This attribute contains a comma-separated list of the media types exposed by the provider (e.g. `video, audio`).
             */
            types?: string;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/media/providers',
        });
    }
    /**
     * Add a media provider
     * This endpoint registers a media provider with the server. Once registered, the media server acts as a reverse proxy to the provider, allowing both local and remote providers to work.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param url The URL of the media provider to add.
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
    public static addProvider(
        xPlexClientIdentifier: string,
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
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/media/providers',
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
                400: `Bad Request`,
            },
        });
    }
    /**
     * Refresh media providers
     * Refresh all known media providers. This is useful in case a provider has updated features.
     * @returns any OK
     * @throws ApiError
     */
    public static refreshProviders(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/media/providers/refresh',
        });
    }
    /**
     * Delete a media provider
     * Deletes a media provider with the given id
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param provider The ID of the media provider to delete
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
    public static deleteMediaProvider(
        xPlexClientIdentifier: string,
        provider: string,
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
            url: '/media/providers/{provider}',
            path: {
                'provider': provider,
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
                403: `Cannot delete a provider which is a child of another provider`,
            },
        });
    }
}
