/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Information about the player being used for playback
 */
export type Player = {
    /**
     * The title of the client
     */
    title?: string;
    /**
     * The remote address
     */
    address?: string;
    /**
     * Indicating if the client is playing from the local LAN
     */
    local?: boolean;
    /**
     * The identifier of the client
     */
    machineIdentifier?: string;
    /**
     * The model of the client
     */
    model?: string;
    /**
     * The platform of the client
     */
    platform?: string;
    /**
     * The platformVersion of the client
     */
    platformVersion?: string;
    /**
     * The product name of the client
     */
    product?: string;
    /**
     * Indicating if the client is playing over a relay connection
     */
    relayed?: boolean;
    /**
     * The client's public address
     */
    remotePublicAddress?: string;
    /**
     * Indicating if the client is playing over HTTPS
     */
    secure?: boolean;
    /**
     * The client's last reported state
     */
    state?: string;
    /**
     * The id of the user
     */
    userID?: number;
    /**
     * The vendor of the client
     */
    vendor?: string;
    /**
     * The version of the client
     */
    version?: string;
};

