/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoolInt } from '../models/BoolInt';
import type { MediaContainerWithDecision } from '../models/MediaContainerWithDecision';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TranscoderService {
    /**
     * Transcode an image
     * Transcode an image, possibly changing format or size
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
     * @param url The source URL for the image to transcode.  Note, if this URL requires a token such as `X-Plex-Token`, it should be given as a query parameter to this url.
     * @param format The output format for the image; defaults to jpg
     * @param width The desired width of the output image
     * @param height The desired height of the output image
     * @param quality The desired quality of the output.  -1 means the highest quality.  Defaults to -1
     * @param background The background color to apply before painting the image.  Only really applicable if image has transparency.  Defaults to none
     * @param upscale Indicates if image should be upscaled to the desired width/height.  Defaults to false
     * @param minSize Indicates if image should be scaled to fit the smaller dimension.  By default (false) the image is scaled to fit within the width/height specified but if this parameter is true, it will allow overflowing one dimension to fit the other.  Essentially it is making the width/height minimum sizes of the image or sizing the image to fill the entire width/height even if it overflows one dimension.
     * @param rotate Obey the rotation values specified in EXIF data.  Defaults to true.
     * @param blur Apply a blur to the image, Defaults to 0 (none)
     * @param saturation Scale the image saturation by the specified percentage.  Defaults to 100
     * @param opacity Render the image at the specified opacity percentage.  Defaults to 100
     * @param chromaSubsampling Use the specified chroma subsambling.
     * - 0: 411
     * - 1: 420
     * - 2: 422
     * - 3: 444
     * Defaults to 3 (444)
     * @param blendColor The color to blend with the image.  Defaults to none
     * @returns binary The resulting image
     * @throws ApiError
     */
    public static transcodeImage(
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
        format?: 'jpg' | 'jpeg' | 'png' | 'ppm',
        width?: number,
        height?: number,
        quality?: number,
        background?: string,
        upscale?: BoolInt,
        minSize?: BoolInt,
        rotate?: BoolInt,
        blur?: number,
        saturation?: number,
        opacity?: number,
        chromaSubsampling?: 0 | 1 | 2 | 3,
        blendColor?: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/photo/:/transcode',
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
                'format': format,
                'width': width,
                'height': height,
                'quality': quality,
                'background': background,
                'upscale': upscale,
                'minSize': minSize,
                'rotate': rotate,
                'blur': blur,
                'saturation': saturation,
                'opacity': opacity,
                'chromaSubsampling': chromaSubsampling,
                'blendColor': blendColor,
            },
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Make a decision on media playback
     * Make a decision on media playback based on client profile, and requested settings such as bandwidth and resolution.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param transcodeType Type of transcode media
     * @param xPlexClientIdentifier Unique per client.
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
     * @param transcodeSessionId Transcode session UUID
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
     * @param xPlexClientProfileExtra See [Profile Augmentations](#section/API-Info/Profile-Augmentations) .
     * @param xPlexClientProfileName Which built in Client Profile to use in the decision. Generally should only be used to specify the Generic profile.
     * @param xPlexDevice Device the client is running on
     * @param xPlexModel Model of the device the client is running on
     * @param xPlexPlatform Client Platform
     * @param xPlexPlatformVersion Client Platform Version
     * @param xPlexSessionIdentifier Unique per client playback session.  Used if a client can playback multiple items at a time (such as a browser with multiple tabs)
     * @returns MediaContainerWithDecision OK
     * @throws ApiError
     */
    public static makeDecision(
        xPlexClientIdentifier: string,
        transcodeType: 'video' | 'music' | 'audio' | 'subtitles',
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
        transcodeSessionId?: string,
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
        xPlexClientProfileExtra?: string,
        xPlexClientProfileName?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexSessionIdentifier?: string,
    ): CancelablePromise<MediaContainerWithDecision> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{transcodeType}/:/transcode/universal/decision',
            path: {
                'transcodeType': transcodeType,
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
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Client-Profile-Extra': xPlexClientProfileExtra,
                'X-Plex-Client-Profile-Name': xPlexClientProfileName,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Session-Identifier': xPlexSessionIdentifier,
            },
            query: {
                'transcodeSessionId': transcodeSessionId,
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
     * Manually trigger a transcoder fallback
     * Manually trigger a transcoder fallback ex: HEVC to h.264 or hw to sw
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param transcodeType Type of transcode media
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
     * @param transcodeSessionId Transcode session UUID
     * @returns any OK
     * @throws ApiError
     */
    public static triggerFallback(
        xPlexClientIdentifier: string,
        transcodeType: 'video' | 'music' | 'audio' | 'subtitles',
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
        transcodeSessionId?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/{transcodeType}/:/transcode/universal/fallback',
            path: {
                'transcodeType': transcodeType,
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
                'transcodeSessionId': transcodeSessionId,
            },
            errors: {
                404: `Session ID does not exist`,
                412: `Transcode could not fallback`,
                500: `Transcode failed to fallback`,
            },
        });
    }
    /**
     * Transcode subtitles
     * Only transcode subtitle streams.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param transcodeType Type of transcode media
     * @param xPlexClientIdentifier Unique per client.
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
     * @param transcodeSessionId Transcode session UUID
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
     * @param xPlexClientProfileExtra See [Profile Augmentations](#section/API-Info/Profile-Augmentations) .
     * @param xPlexClientProfileName Which built in Client Profile to use in the decision. Generally should only be used to specify the Generic profile.
     * @param xPlexDevice Device the client is running on
     * @param xPlexModel Model of the device the client is running on
     * @param xPlexPlatform Client Platform
     * @param xPlexPlatformVersion Client Platform Version
     * @param xPlexSessionIdentifier Unique per client playback session.  Used if a client can playback multiple items at a time (such as a browser with multiple tabs)
     * @returns any Transcoded subtitle file
     * @throws ApiError
     */
    public static transcodeSubtitles(
        xPlexClientIdentifier: string,
        transcodeType: 'video' | 'music' | 'audio' | 'subtitles',
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
        transcodeSessionId?: string,
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
        xPlexClientProfileExtra?: string,
        xPlexClientProfileName?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexSessionIdentifier?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{transcodeType}/:/transcode/universal/subtitles',
            path: {
                'transcodeType': transcodeType,
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
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Client-Profile-Extra': xPlexClientProfileExtra,
                'X-Plex-Client-Profile-Name': xPlexClientProfileName,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Session-Identifier': xPlexSessionIdentifier,
            },
            query: {
                'transcodeSessionId': transcodeSessionId,
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
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Start A Transcoding Session
     * Starts the transcoder and returns the corresponding streaming resource document.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param transcodeType Type of transcode media
     * @param extension Extension
     *
     * @param xPlexClientIdentifier Unique per client.
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
     * @param transcodeSessionId Transcode session UUID
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
     * @param xPlexClientProfileExtra See [Profile Augmentations](#section/API-Info/Profile-Augmentations) .
     * @param xPlexClientProfileName Which built in Client Profile to use in the decision. Generally should only be used to specify the Generic profile.
     * @param xPlexDevice Device the client is running on
     * @param xPlexModel Model of the device the client is running on
     * @param xPlexPlatform Client Platform
     * @param xPlexPlatformVersion Client Platform Version
     * @param xPlexSessionIdentifier Unique per client playback session.  Used if a client can playback multiple items at a time (such as a browser with multiple tabs)
     * @returns binary MPD file (see ISO/IEC 23009-1:2022), m3u8 file (see RFC 8216), or binary http stream
     * @throws ApiError
     */
    public static startTranscodeSession(
        xPlexClientIdentifier: string,
        transcodeType: 'video' | 'music' | 'audio' | 'subtitles',
        extension: 'm3u8' | 'mpd',
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
        transcodeSessionId?: string,
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
        xPlexClientProfileExtra?: string,
        xPlexClientProfileName?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexSessionIdentifier?: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/{transcodeType}/:/transcode/universal/start.{extension}',
            path: {
                'transcodeType': transcodeType,
                'extension': extension,
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
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Client-Profile-Extra': xPlexClientProfileExtra,
                'X-Plex-Client-Profile-Name': xPlexClientProfileName,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Session-Identifier': xPlexSessionIdentifier,
            },
            query: {
                'transcodeSessionId': transcodeSessionId,
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
            errors: {
                400: `Bad Request`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
