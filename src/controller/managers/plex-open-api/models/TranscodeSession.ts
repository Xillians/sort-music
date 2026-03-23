/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The transcode session if item is currently being transcoded
 */
export type TranscodeSession = {
    complete?: boolean;
    context?: string;
    duration?: number;
    error?: boolean;
    key?: string;
    progress?: number;
    protocol?: string;
    size?: number;
    sourceAudioCodec?: string;
    sourceVideoCodec?: string;
    speed?: number;
    throttled?: boolean;
    transcodeHwFullPipeline?: boolean;
    transcodeHwRequested?: boolean;
};

