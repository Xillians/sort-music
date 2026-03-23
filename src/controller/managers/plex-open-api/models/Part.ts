/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * `Part` represents a particular file or "part" of a media item. The part is the playable unit of the media hierarchy. Suppose that a movie library contains a movie that is broken up into files, reminiscent of a movie split across two BDs. The metadata item represents information about the movie, the media item represents this instance of the movie at this resolution and quality, and the part items represent the two playable files.  If another media were added which contained the joining of these two parts transcoded down to a lower resolution, then this metadata would contain 2 medias, one with 2 parts and one with 1 part.
 *
 */
export type Part = Record<string, any>;
