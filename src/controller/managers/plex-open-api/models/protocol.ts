/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indicates the network streaming protocol to be used for the transcode session: * 'http' - include the file in the http response such as MKV streaming * 'hls' - hls stream (RFC 8216) * 'dash' - dash stream (ISO/IEC 23009-1:2022)
 *
 */
export enum protocol {
    HTTP = 'http',
    HLS = 'hls',
    DASH = 'dash',
}
