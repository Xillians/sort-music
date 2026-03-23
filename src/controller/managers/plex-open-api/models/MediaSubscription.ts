/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaGrabOperation } from './MediaGrabOperation';
import type { Setting } from './Setting';
/**
 * A media subscription contains a representation of metadata desired to be recorded
 *
 */
export type MediaSubscription = {
    title?: string;
    /**
     * The metadata type of the root item of the subscription
     */
    type?: number;
    airingsType?: MediaSubscription.airingsType;
    createdAt?: number;
    /**
     * Media Matching Hints
     */
    Directory?: any;
    /**
     * Only included if `includeStorage` is specified
     */
    durationTotal?: number;
    key?: string;
    librarySectionTitle?: string;
    locationPath?: string;
    MediaGrabOperation?: Array<MediaGrabOperation>;
    /**
     * Media Matching Hints
     */
    Playlist?: any;
    Setting?: Array<Setting>;
    /**
     * Only included if `includeStorage` is specified
     */
    storageTotal?: number;
    /**
     * The library section id for where the item is to be recorded
     */
    targetLibrarySectionID?: number;
    /**
     * The library section location id for where the item is to be recorded
     */
    targetSectionLocationID?: number;
    /**
     * Media Matching Hints
     */
    Video?: any;
};
export namespace MediaSubscription {
    export enum airingsType {
        NEW_AIRINGS_ONLY = 'New Airings Only',
        NEW_AND_REPEAT_AIRINGS = 'New and Repeat Airings',
    }
}

