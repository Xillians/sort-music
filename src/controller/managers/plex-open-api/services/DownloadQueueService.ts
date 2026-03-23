/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoolInt } from '../models/BoolInt';
import type { MediaContainerWithDecision } from '../models/MediaContainerWithDecision';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DownloadQueueService {
    /**
     * Create download queue
     * Available: 0.2.0
     *
     * Creates a download queue for this client if one doesn't exist, or returns the existing queue for this client and user.
     *
     * @returns any OK
     * @throws ApiError
     */
    public static createDownloadQueue(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/downloadQueue',
        });
    }
    /**
     * Get a download queue
     * Available: 0.2.0
     *
     * Get a download queue by its id
     *
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param queueId The queue id
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
    public static getDownloadQueue(
        xPlexClientIdentifier: string,
        queueId: number,
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
            method: 'GET',
            url: '/downloadQueue/{queueId}',
            path: {
                'queueId': queueId,
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
        });
    }
    /**
     * Add to download queue
     * Available: 0.2.0
     *
     * Add items to the download queue
     *
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param queueId The queue id
     * @param keys Keys to add
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
     * @param advancedSubtitles Indicates how incompatible advanced subtitles (such as ass/ssa) should be included: * 'burn' - Burn incompatible advanced text subtitles into the video stream * 'text' - Transcode incompatible advanced text subtitles to a compatible text format, even if some markup is lost
     *
     * @param audioBoost Percentage of original audio loudness to use when transcoding (100 is equivalent to original volume, 50 is half, 200 is double, etc)
     * @param audioChannelCount Target video number of audio channels.
     * @param autoAdjustQuality Indicates the client supports ABR.
     * @param autoAdjustSubtitle Indicates if the server should adjust subtitles based on Voice Activity Data.
     * @param directPlay Indicates the client supports direct playing the indicated content.
     * @param directStream Indicates the client supports direct streaming the video of the indicated content.
     * @param directStreamAudio Indicates the client supports direct streaming the audio of the indicated content.
     * @param disableResolutionRotation Indicates if resolution should be adjusted for orientation.
     * @param hasMde Ignore client profiles when determining if direct play is possible. Only has an effect when directPlay=1 and both mediaIndex and partIndex are specified and neither are -1
     * @param location Network type of the client, can be used to help determine target bitrate.
     * @param mediaBufferSize Buffer size used in playback (in KB). Clients should specify a lower bound if not known exactly. This value could make the difference between transcoding and direct play on bandwidth constrained networks.
     * @param mediaIndex Index of the media to transcode. -1 or not specified indicates let the server choose.
     * @param musicBitrate Target bitrate for audio only files (in kbps, used to transcode).
     * @param offset Offset from the start of the media (in seconds).
     * @param partIndex Index of the part to transcode. -1 or not specified indicates the server should join parts together in a transcode
     * @param path Internal PMS path of the media to transcode.
     * @param peakBitrate Maximum bitrate (in kbps) to use in ABR.
     * @param photoResolution Target photo resolution.
     * @param protocol Indicates the network streaming protocol to be used for the transcode session: * 'http' - include the file in the http response such as MKV streaming * 'hls' - hls stream (RFC 8216) * 'dash' - dash stream (ISO/IEC 23009-1:2022)
     *
     * @param secondsPerSegment Number of seconds to include in each transcoded segment
     * @param subtitleSize Percentage of original subtitle size to use when burning subtitles (100 is equivalent to original size, 50 is half, ect)
     * @param subtitles Indicates how subtitles should be included: * 'auto' - Compute the appropriate subtitle setting automatically * 'burn' - Burn the selected subtitle; auto if no selected subtitle * 'none' - Ignore all subtitle streams * 'sidecar' - The selected subtitle should be provided as a sidecar * 'embedded' - The selected subtitle should be provided as an embedded stream * 'segmented' - The selected subtitle should be provided as a segmented stream
     *
     * @param videoBitrate Target video bitrate (in kbps).
     * @param videoQuality Target photo quality.
     * @param videoResolution Target maximum video resolution.
     * @returns any OK
     * @throws ApiError
     */
    public static addDownloadQueueItems(
        xPlexClientIdentifier: string,
        queueId: number,
        keys: Array<string>,
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
        advancedSubtitles?: 'burn' | 'text' | 'unknown',
        audioBoost?: number,
        audioChannelCount?: number,
        autoAdjustQuality?: BoolInt,
        autoAdjustSubtitle?: BoolInt,
        directPlay?: BoolInt,
        directStream?: BoolInt,
        directStreamAudio?: BoolInt,
        disableResolutionRotation?: BoolInt,
        hasMde?: BoolInt,
        location?: 'lan' | 'wan' | 'cellular',
        mediaBufferSize?: number,
        mediaIndex?: number,
        musicBitrate?: number,
        offset?: number,
        partIndex?: number,
        path?: string,
        peakBitrate?: number,
        photoResolution?: string,
        protocol?: 'http' | 'hls' | 'dash',
        secondsPerSegment?: number,
        subtitleSize?: number,
        subtitles?: 'auto' | 'burn' | 'none' | 'sidecar' | 'embedded' | 'segmented' | 'unknown',
        videoBitrate?: number,
        videoQuality?: number,
        videoResolution?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/downloadQueue/{queueId}/add',
            path: {
                'queueId': queueId,
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
                'keys': keys,
                'advancedSubtitles': advancedSubtitles,
                'audioBoost': audioBoost,
                'audioChannelCount': audioChannelCount,
                'autoAdjustQuality': autoAdjustQuality,
                'autoAdjustSubtitle': autoAdjustSubtitle,
                'directPlay': directPlay,
                'directStream': directStream,
                'directStreamAudio': directStreamAudio,
                'disableResolutionRotation': disableResolutionRotation,
                'hasMDE': hasMde,
                'location': location,
                'mediaBufferSize': mediaBufferSize,
                'mediaIndex': mediaIndex,
                'musicBitrate': musicBitrate,
                'offset': offset,
                'partIndex': partIndex,
                'path': path,
                'peakBitrate': peakBitrate,
                'photoResolution': photoResolution,
                'protocol': protocol,
                'secondsPerSegment': secondsPerSegment,
                'subtitleSize': subtitleSize,
                'subtitles': subtitles,
                'videoBitrate': videoBitrate,
                'videoQuality': videoQuality,
                'videoResolution': videoResolution,
            },
        });
    }
    /**
     * Get download queue items
     * Available: 0.2.0
     *
     * Get items from a download queue
     *
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param queueId The queue id
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
    public static listDownloadQueueItems(
        xPlexClientIdentifier: string,
        queueId: number,
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
            method: 'GET',
            url: '/downloadQueue/{queueId}/items',
            path: {
                'queueId': queueId,
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
        });
    }
    /**
     * Grab download queue item decision
     * Available: 0.2.0
     *
     * Grab the decision for a download queue item
     *
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param queueId The queue id
     * @param itemId The item ids
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
     * @returns MediaContainerWithDecision OK
     * @throws ApiError
     */
    public static getItemDecision(
        xPlexClientIdentifier: string,
        queueId: number,
        itemId: number,
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
    ): CancelablePromise<MediaContainerWithDecision> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/downloadQueue/{queueId}/item/{itemId}/decision',
            path: {
                'queueId': queueId,
                'itemId': itemId,
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
                400: `The item is not in a state where a decision is available`,
            },
        });
    }
    /**
     * Grab download queue media
     * Available: 0.2.0
     *
     * Grab the media for a download queue item
     *
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param queueId The queue id
     * @param itemId The item ids
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
     * @returns any The raw media file
     * @throws ApiError
     */
    public static getDownloadQueueMedia(
        xPlexClientIdentifier: string,
        queueId: number,
        itemId: number,
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
            method: 'GET',
            url: '/downloadQueue/{queueId}/item/{itemId}/media',
            path: {
                'queueId': queueId,
                'itemId': itemId,
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
                503: `![503](https://http.cat/503.jpg)
                The queue item is not yet complete and is currently transcoding or waiting to transcode
                `,
            },
        });
    }
    /**
     * Delete download queue items
     * delete items from a download queue
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param queueId The queue id
     * @param itemId The item id
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
    public static removeDownloadQueueItems(
        xPlexClientIdentifier: string,
        queueId: number,
        itemId: Array<number>,
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
            url: '/downloadQueue/{queueId}/items/{itemId}',
            path: {
                'queueId': queueId,
                'itemId': itemId,
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
        });
    }
    /**
     * Get download queue items
     * Available: 0.2.0
     *
     * Get items from a download queue
     *
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param queueId The queue id
     * @param itemId The item ids
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
    public static getDownloadQueueItems(
        xPlexClientIdentifier: string,
        queueId: number,
        itemId: Array<number>,
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
            method: 'GET',
            url: '/downloadQueue/{queueId}/items/{itemId}',
            path: {
                'queueId': queueId,
                'itemId': itemId,
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
        });
    }
    /**
     * Restart processing of items from the decision
     * Available: 0.2.0
     *
     * Reprocess download queue items with previous decision parameters
     *
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param queueId The queue id
     * @param itemId The item ids
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
    public static restartProcessingDownloadQueueItems(
        xPlexClientIdentifier: string,
        queueId: number,
        itemId: Array<number>,
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
            url: '/downloadQueue/{queueId}/items/{itemId}/restart',
            path: {
                'queueId': queueId,
                'itemId': itemId,
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
        });
    }
}
