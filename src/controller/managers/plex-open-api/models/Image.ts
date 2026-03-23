/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Images such as movie posters and background artwork are represented by Image elements.
 *
 */
export type Image = {
    /**
     * Describes both the purpose and intended presentation of the image.
     */
    type?: Image.type;
    /**
     * Title to use for accessibility.
     */
    alt?: string;
    /**
     * The relative path or absolute url for the image.
     */
    url?: string;
};
export namespace Image {
    /**
     * Describes both the purpose and intended presentation of the image.
     */
    export enum type {
        BACKGROUND = 'background',
        BACKGROUND_SQUARE = 'backgroundSquare',
        BANNER = 'banner',
        CLEAR_LOGO = 'clearLogo',
        COVER_POSTER = 'coverPoster',
        SNAPSHOT = 'snapshot',
    }
}

