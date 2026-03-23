/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Metadata } from './Metadata';
/**
 * A media grab opration represents a scheduled or active recording of media
 *
 */
export type MediaGrabOperation = {
    currentSize?: number;
    grabberIdentifier?: string;
    grabberProtocol?: string;
    id?: string;
    key?: string;
    mediaIndex?: number;
    mediaSubscriptionID?: number;
    Metadata?: Metadata;
    percent?: number;
    provider?: string;
    status?: MediaGrabOperation.status;
};
export namespace MediaGrabOperation {
    export enum status {
        INACTIVE = 'inactive',
        SCHEDULED = 'scheduled',
        INPROGRESS = 'inprogress',
        COMPLETE = 'complete',
        CANCELLED = 'cancelled',
        ERROR = 'error',
        POSTPROCESSING = 'postprocessing',
        PAUSED = 'paused',
    }
}

