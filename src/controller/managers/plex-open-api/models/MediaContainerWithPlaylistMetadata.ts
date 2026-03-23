/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaContainer } from './MediaContainer';
import type { Metadata } from './Metadata';
export type MediaContainerWithPlaylistMetadata = {
    MediaContainer?: (MediaContainer & {
        Metadata?: Array<({
            /**
             * If we return this as true then this playlist cannot be altered or deleted directly by the client.
             */
            readOnly?: boolean;
            /**
             * A composite image for the playlist.
             */
            composite?: string;
            /**
             * The total duration of the playlist in ms
             */
            duration?: number;
            /**
             * Leads to a list of items in the playlist.
             */
            key?: string;
            /**
             * The number of items in the playlist.
             */
            leafCount?: number;
            /**
             * The type of the playlist.
             */
            playlistType?: 'audio' | 'video' | 'photo';
            /**
             * Whether or not the playlist is smart.
             */
            smart?: boolean;
            /**
             * If this is a special playlist, this returns its type (e.g. favorites).
             */
            specialPlaylistType?: string;
        } & Metadata)>;
    });
};

