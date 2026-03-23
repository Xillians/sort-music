/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlexDateTimeISO } from './PlexDateTimeISO';
export type PlexDevice = {
    name: string;
    product: string;
    productVersion: string;
    platform: string | null;
    platformVersion: string | null;
    device: string | null;
    clientIdentifier: string;
    createdAt: PlexDateTimeISO;
    lastSeenAt: PlexDateTimeISO;
    provides: string;
    /**
     * ownerId is null when the device is owned by the token used to send the request
     */
    ownerId: number | null;
    sourceTitle: string | null;
    publicAddress: string;
    accessToken: string;
    owned: boolean;
    home: boolean;
    synced: boolean;
    relay: boolean;
    presence: boolean;
    httpsRequired: boolean;
    publicAddressMatches: boolean;
    dnsRebindingProtection: boolean;
    natLoopbackSupported: boolean;
    connections: Array<{
        /**
         * The protocol used for the connection (http, https, etc)
         */
        protocol: 'http' | 'https';
        /**
         * The (ip) address or domain name used for the connection
         */
        address: string;
        /**
         * The port used for the connection
         */
        port: number;
        /**
         * The full URI of the connection
         */
        uri: string;
        /**
         * If the connection is local address
         */
        local: boolean;
        /**
         * If the connection is relayed through plex.direct
         */
        relay: boolean;
        /**
         * If the connection is using IPv6
         */
        IPv6: boolean;
    }>;
};

