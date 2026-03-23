/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * `Stream` represents a particular stream from a media item, such as the video stream, audio stream, or subtitle stream. The stream may either be part of the file represented by the parent `Part` or, especially for subtitles, an external file. The stream contains more detailed information about the specific stream. For example, a video may include the `aspectRatio` at the `Media` level, but detailed information about the video stream like the color space will be included on the `Stream` for the video stream.  Note that photos do not have streams (mostly as an optimization).
 *
 */
export type Stream = Record<string, any>;
