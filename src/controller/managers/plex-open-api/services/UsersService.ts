/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlexDateTime } from '../models/PlexDateTime';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * Get list of all connected users
     * Get list of all users that are friends and have library access with the provided Plex authentication token
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
     * @returns any Successful response with media container data in JSON
     * @throws ApiError
     */
    public static getUsers(
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
    ): CancelablePromise<{
        /**
         * Container holding user and server details.
         */
        MediaContainer?: {
            /**
             * The friendly name of the Plex instance.
             */
            friendlyName: string;
            identifier: string;
            /**
             * Unique Machine identifier of the Plex server.
             */
            machineIdentifier: string;
            /**
             * Total number of users.
             */
            totalSize: number;
            /**
             * Number of users in the current response.
             */
            size: number;
            /**
             * List of users with access to the Plex server.
             */
            User: Array<{
                /**
                 * User's unique ID.
                 */
                id: number;
                /**
                 * User's display name.
                 */
                title: string;
                /**
                 * User's username.
                 */
                username: string;
                /**
                 * User's email address.
                 */
                email: string;
                /**
                 * ID of the user's recommendation playlist.
                 */
                recommendationsPlaylistId?: string | null;
                /**
                 * URL to the user's avatar image.
                 */
                thumb: string;
                protected: 0 | 1;
                home: 0 | 1;
                allowTuners: 0 | 1;
                allowSync: 0 | 1;
                allowCameraUpload: 0 | 1;
                allowChannels: 0 | 1;
                allowSubtitleAdmin: 0 | 1;
                /**
                 * Filters applied for all content.
                 */
                filterAll?: string | null;
                /**
                 * Filters applied for movies.
                 */
                filterMovies?: string | null;
                /**
                 * Filters applied for music.
                 */
                filterMusic?: string | null;
                /**
                 * Filters applied for photos.
                 */
                filterPhotos?: string | null;
                /**
                 * Filters applied for television.
                 */
                filterTelevision?: string;
                restricted: 0 | 1;
                /**
                 * List of servers owned by the user.
                 */
                Server: Array<{
                    /**
                     * Unique ID of the server of the connected user
                     */
                    id: number;
                    /**
                     * ID of the actual Plex server.
                     */
                    serverId: number;
                    /**
                     * Machine identifier of the Plex server.
                     */
                    machineIdentifier: string;
                    /**
                     * Name of the Plex server of the connected user.
                     */
                    name: string;
                    lastSeenAt: PlexDateTime;
                    /**
                     * Number of libraries in the server this user has access to.
                     */
                    numLibraries: number;
                    allLibraries: 0 | 1;
                    owned: 0 | 1;
                    pending: 0 | 1;
                }>;
            }>;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
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
                400: `Bad Request - A parameter was not specified, or was specified incorrectly.`,
                401: `Unauthorized - Returned if the X-Plex-Token is missing from the header or query.`,
            },
        });
    }
}
