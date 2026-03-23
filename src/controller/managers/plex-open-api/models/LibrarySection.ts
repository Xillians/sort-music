/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Key } from './Key';
import type { MediaTypeString } from './MediaTypeString';
import type { PlexDateTime } from './PlexDateTime';
import type { Thumb } from './Thumb';
export type LibrarySection = {
    /**
     * The title of the library
     */
    title?: string;
    type: MediaTypeString;
    agent?: string;
    allowSync?: boolean;
    art?: string;
    composite?: string;
    content?: boolean;
    contentChangedAt?: PlexDateTime;
    createdAt?: PlexDateTime;
    directory?: boolean;
    /**
     * Indicates whether this section has filtering capabilities
     */
    filters?: boolean;
    hidden?: boolean;
    key?: Key;
    language: string;
    /**
     * The universally unique identifier for the library.
     */
    uuid: string;
    Location?: Array<{
        id?: number;
        /**
         * The path of where this directory exists on disk
         */
        path?: any;
    }>;
    /**
     * Indicates whether this library section is currently scanning
     */
    refreshing?: boolean;
    scannedAt?: PlexDateTime;
    scanner?: string;
    thumb?: Thumb;
    updatedAt?: PlexDateTime;
};

