/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoolInt } from '../models/BoolInt';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UpdaterService {
    /**
     * Applying updates
     * Apply any downloaded updates.  Note that the two parameters `tonight` and `skip` are effectively mutually exclusive. The `tonight` parameter takes precedence and `skip` will be ignored if `tonight` is also passed.
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
     * @param tonight Indicate that you want the update to run during the next Butler execution. Omitting this or setting it to false indicates that the update should install immediately.
     * @param skip Indicate that the latest version should be marked as skipped. The <Release> entry for this version will have the `state` set to `skipped`.
     * @returns any The update process started correctly
     * @throws ApiError
     */
    public static applyUpdates(
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
        tonight?: BoolInt,
        skip?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/updater/apply',
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
                'tonight': tonight,
                'skip': skip,
            },
            errors: {
                400: `This system cannot install updates`,
                500: `The update process failed to start`,
            },
        });
    }
    /**
     * Checking for updates
     * Perform an update check and potentially download
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
     * @param download Indicate that you want to start download any updates found.
     * @returns any OK
     * @throws ApiError
     */
    public static checkUpdates(
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
        download?: BoolInt,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/updater/check',
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
        });
    }
    /**
     * Querying status of updates
     * Get the status of updating the server
     * @returns any OK
     * @throws ApiError
     */
    public static getUpdatesStatus(): CancelablePromise<{
        MediaContainer?: {
            /**
             * The version of the updater (currently `1`)
             */
            autoUpdateVersion?: number;
            /**
             * Indicates whether this install can be updated through these endpoints (typically only on MacOS and Windows)
             */
            canInstall?: boolean;
            /**
             * The last time a check for updates was performed
             */
            checkedAt?: number;
            /**
             * The URL where the update is available
             */
            downloadURL?: string;
            Release?: Array<{
                /**
                 * A list of what has been added in this version
                 */
                added?: string;
                /**
                 * The URL of where this update is available
                 */
                downloadURL?: string;
                /**
                 * A list of what has been fixed in this version
                 */
                fixed?: string;
                /**
                 * The URL key of the update
                 */
                key?: string;
                /**
                 * The status of this update.
                 *
                 * - available - This release is available
                 * - downloading - This release is downloading
                 * - downloaded - This release has been downloaded
                 * - installing - This release is installing
                 * - tonight - This release will be installed tonight
                 * - skipped - This release has been skipped
                 * - error - This release has an error
                 * - notify - This release is only notifying it is available (typically because it cannot be installed on this setup)
                 * - done - This release is complete
                 *
                 */
                state?: 'available' | 'downloading' | 'downloaded' | 'installing' | 'tonight' | 'skipped' | 'error' | 'notify' | 'done';
                /**
                 * The version available
                 */
                version?: string;
            }>;
            /**
             * The current error code (`0` means no error)
             */
            status?: number;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/updater/status',
        });
    }
}
