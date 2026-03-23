/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ActivitiesService {
    /**
     * Get all activities
     * List all activities on the server.  Admins can see all activities but other users can only see their own
     * @returns any OK
     * @throws ApiError
     */
    public static listActivities(): CancelablePromise<{
        MediaContainer?: {
            Activity?: Array<{
                /**
                 * Indicates whether this activity can be cancelled
                 */
                cancellable?: boolean;
                /**
                 * An object with additional values
                 */
                Context?: Record<string, any>;
                /**
                 * A progress percentage.  A value of -1 means the progress is indeterminate
                 */
                progress?: number;
                /**
                 * An object with the response to the async opperation
                 */
                Response?: Record<string, any>;
                /**
                 * A user-friendly sub-title for this activity
                 */
                subtitle?: string;
                /**
                 * A user-friendly title for this activity
                 */
                title?: string;
                /**
                 * The type of activity
                 */
                type?: string;
                /**
                 * The user this activity belongs to
                 */
                userID?: number;
                /**
                 * The ID of the activity
                 */
                uuid?: string;
            }>;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activities',
        });
    }
    /**
     * Cancel a running activity
     * Cancel a running activity.  Admins can cancel all activities but other users can only cancel their own
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param activityId The UUID of the activity to cancel.
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
    public static cancelActivity(
        xPlexClientIdentifier: string,
        activityId: string,
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
            url: '/activities/{activityId}',
            path: {
                'activityId': activityId,
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
                400: `Activity is not cancellable`,
                404: `No activity with the provided id is found`,
            },
        });
    }
}
