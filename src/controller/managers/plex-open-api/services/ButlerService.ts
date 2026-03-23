/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ButlerService {
    /**
     * Stop all Butler tasks
     * This endpoint will stop all currently running tasks and remove any scheduled tasks from the queue.
     * @returns any OK
     * @throws ApiError
     */
    public static stopTasks(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/butler',
        });
    }
    /**
     * Get all Butler tasks
     * Get the list of butler tasks and their scheduling
     *
     * @returns any Butler tasks
     * @throws ApiError
     */
    public static getTasks(): CancelablePromise<{
        ButlerTasks?: {
            ButlerTask?: Array<{
                /**
                 * A user-friendly description of the task
                 */
                description?: string;
                /**
                 * Whether this task is enabled or not
                 */
                enabled?: boolean;
                /**
                 * The interval (in days) of when this task is run.  A value of 1 is run every day, 7 is every week, etc.
                 */
                interval?: number;
                /**
                 * The name of the task
                 */
                name?: string;
                /**
                 * Indicates whether the timing of the task is randomized within the butler interval
                 */
                scheduleRandomized?: boolean;
                /**
                 * A user-friendly title of the task
                 */
                title?: string;
            }>;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/butler',
        });
    }
    /**
     * Start all Butler tasks
     * This endpoint will attempt to start all Butler tasks that are enabled in the settings. Butler tasks normally run automatically during a time window configured on the server's Settings page but can be manually started using this endpoint. Tasks will run with the following criteria:
     *
     * 1. Any tasks not scheduled to run on the current day will be skipped.
     * 2. If a task is configured to run at a random time during the configured window and we are outside that window, the task will start immediately.
     * 3. If a task is configured to run at a random time during the configured window and we are within that window, the task will be scheduled at a random time within the window.
     * 4. If we are outside the configured window, the task will start immediately.
     *
     * @returns any OK
     * @throws ApiError
     */
    public static startTasks(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/butler',
        });
    }
    /**
     * Stop a single Butler task
     * This endpoint will stop a currently running task by name, or remove it from the list of scheduled tasks if it exists
     *
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param butlerTask The task name
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
    public static stopTask(
        xPlexClientIdentifier: string,
        butlerTask: 'AutomaticUpdates' | 'BackupDatabase' | 'ButlerTaskGenerateAdMarkers' | 'ButlerTaskGenerateCreditsMarkers' | 'ButlerTaskGenerateIntroMarkers' | 'ButlerTaskGenerateVoiceActivity' | 'CleanOldBundles' | 'CleanOldCacheFiles' | 'DeepMediaAnalysis' | 'GarbageCollectBlobs' | 'GarbageCollectLibraryMedia' | 'GenerateBlurHashes' | 'GenerateChapterThumbs' | 'GenerateMediaIndexFiles' | 'LoudnessAnalysis' | 'MusicAnalysis' | 'OptimizeDatabase' | 'RefreshEpgGuides' | 'RefreshLibraries' | 'RefreshLocalMedia' | 'RefreshPeriodicMetadata' | 'UpgradeMediaAnalysis',
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
            url: '/butler/{butlerTask}',
            path: {
                'butlerTask': butlerTask,
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
                404: `No task with this name was found or no task with this name was running`,
            },
        });
    }
    /**
     * Start a single Butler task
     * This endpoint will attempt to start a specific Butler task by name.
     *
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param butlerTask The task name
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
     * @returns any Task started
     * @throws ApiError
     */
    public static startTask(
        xPlexClientIdentifier: string,
        butlerTask: 'AutomaticUpdates' | 'BackupDatabase' | 'ButlerTaskGenerateAdMarkers' | 'ButlerTaskGenerateCreditsMarkers' | 'ButlerTaskGenerateIntroMarkers' | 'ButlerTaskGenerateVoiceActivity' | 'CleanOldBundles' | 'CleanOldCacheFiles' | 'DeepMediaAnalysis' | 'GarbageCollectBlobs' | 'GarbageCollectLibraryMedia' | 'GenerateBlurHashes' | 'GenerateChapterThumbs' | 'GenerateMediaIndexFiles' | 'LoudnessAnalysis' | 'MusicAnalysis' | 'OptimizeDatabase' | 'RefreshEpgGuides' | 'RefreshLibraries' | 'RefreshLocalMedia' | 'RefreshPeriodicMetadata' | 'UpgradeMediaAnalysis',
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
            url: '/butler/{butlerTask}',
            path: {
                'butlerTask': butlerTask,
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
                404: `No task with this name was found`,
            },
        });
    }
}
