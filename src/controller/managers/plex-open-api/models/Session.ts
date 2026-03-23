/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Information about the playback session
 */
export type Session = {
    /**
     * The bandwidth used by this client's playback in kbps
     */
    bandwidth?: number;
    /**
     * The id of the playback session
     */
    id?: string;
    /**
     * The location of the client
     */
    location?: Session.location;
};
export namespace Session {
    /**
     * The location of the client
     */
    export enum location {
        LAN = 'lan',
        WAN = 'wan',
    }
}

