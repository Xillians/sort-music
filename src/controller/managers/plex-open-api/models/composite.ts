/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type composite = {
    /**
     * Limit composite to specified metadata types
     */
    type?: number;
    /**
     * The image type
     */
    format?: composite.format;
    /**
     * 6 character hex RGB value for background color for image
     */
    backgroundColor?: string;
    /**
     * The width of the intra-image border
     */
    border?: number;
    /**
     * Number of columns to construct in the composite image
     */
    cols?: number;
    /**
     * Where to crop source images to fit into composite image proportions
     */
    crop?: composite.crop;
    /**
     * The height of the image
     */
    height?: number;
    /**
     * The default image type to use as the sources
     */
    media?: composite.media;
    /**
     * Allow repetion of images if there are not enough source images to fill grid
     */
    repeat?: boolean;
    /**
     * Number of rows to construct in the composite image
     */
    rows?: number;
    /**
     * The width of the image
     */
    width?: number;
};
export namespace composite {
    /**
     * The image type
     */
    export enum format {
        JPG = 'jpg',
        PNG = 'png',
    }
    /**
     * Where to crop source images to fit into composite image proportions
     */
    export enum crop {
        CENTER = 'center',
        TOP = 'top',
    }
    /**
     * The default image type to use as the sources
     */
    export enum media {
        THUMB = 'thumb',
        ART = 'art',
        BANNER = 'banner',
    }
}

