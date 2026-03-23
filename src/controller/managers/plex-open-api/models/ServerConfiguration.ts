/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaContainer } from './MediaContainer';
export type ServerConfiguration = (MediaContainer & {
    allowCameraUpload?: boolean;
    allowChannelAccess?: boolean;
    allowMediaDeletion?: boolean;
    allowSharing?: boolean;
    allowSync?: boolean;
    allowTuners?: boolean;
    backgroundProcessing?: boolean;
    certificate?: boolean;
    companionProxy?: boolean;
    countryCode?: string;
    diagnostics?: string;
    eventStream?: boolean;
    friendlyName?: string;
    hubSearch?: boolean;
    itemClusters?: boolean;
    livetv?: number;
    machineIdentifier?: any;
    mediaProviders?: boolean;
    multiuser?: boolean;
    musicAnalysis?: number;
    myPlex?: boolean;
    myPlexMappingState?: any;
    myPlexSigninState?: any;
    myPlexSubscription?: boolean;
    myPlexUsername?: string;
    offlineTranscode?: any;
    /**
     * A comma-separated list of features which are enabled for the server owner
     */
    ownerFeatures?: string;
    platform?: string;
    platformVersion?: string;
    pluginHost?: boolean;
    pushNotifications?: boolean;
    readOnlyLibraries?: boolean;
    streamingBrainABRVersion?: number;
    streamingBrainVersion?: number;
    sync?: boolean;
    transcoderActiveVideoSessions?: number;
    transcoderAudio?: boolean;
    transcoderLyrics?: boolean;
    transcoderPhoto?: boolean;
    transcoderSubtitles?: boolean;
    transcoderVideo?: boolean;
    /**
     * The suggested video quality bitrates to present to the user
     */
    transcoderVideoBitrates?: any;
    transcoderVideoQualities?: string;
    /**
     * The suggested video resolutions to the above quality bitrates
     */
    transcoderVideoResolutions?: any;
    updatedAt?: number;
    updater?: boolean;
    version?: string;
    voiceSearch?: boolean;
});

