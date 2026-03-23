/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A variety of extra information about a metadata item is included as tags. These tags use their own element names such as `Genre`, `Writer`, `Directory`, and `Role`. Individual tag types may introduce their own extra attributes.
 *
 */
export type Tag = {
    /**
     * Measure of the confidence of an automatic tag
     */
    confidence?: number;
    context?: string;
    /**
     * A filter parameter that can be used to query for more content that matches this tag value.
     */
    filter?: string;
    id?: number;
    /**
     * The rating key (Media ID) of this media item. Note: Although this is always an integer, it is represented as a string in the API.
     */
    ratingKey?: string;
    /**
     * The role this actor played
     */
    role?: string;
    /**
     * The value of the tag (the name)
     */
    tag: string;
    /**
     * Plex identifier for this tag which can be used to fetch additional information from plex.tv
     */
    tagKey?: string;
    tagType?: number;
    thumb?: string;
};

