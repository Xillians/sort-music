/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicates how incompatible advanced subtitles (such as ass/ssa) should be included: * 'burn' - Burn incompatible advanced text subtitles into the video stream * 'text' - Transcode incompatible advanced text subtitles to a compatible text format, even if some markup is lost
 *
 */
export enum advancedSubtitles {
    BURN = 'burn',
    TEXT = 'text',
    UNKNOWN = 'unknown',
}
