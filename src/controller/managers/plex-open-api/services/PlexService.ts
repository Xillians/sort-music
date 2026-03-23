/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoolInt } from '../models/BoolInt';
import type { PlexDevice } from '../models/PlexDevice';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PlexService {
    /**
     * Get Server Resources
     * Get Plex server access tokens and server connections
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param accepts Indicates the client accepts the indicated media types
     * @param includeHttps Include Https entries in the results
     * @param includeRelay Include Relay addresses in the results
     * E.g: https://10-0-0-25.bbf8e10c7fa20447cacee74cd9914cde.plex.direct:32400
     *
     * @param includeIPv6 Include IPv6 entries in the results
     * @returns PlexDevice List of Plex Devices. This includes Plex hosted servers and clients
     * @throws ApiError
     */
    public static getServerResources(
        xPlexClientIdentifier: string,
        accepts: 'application/json' | 'application/xml' = 'application/xml',
        includeHttps?: BoolInt,
        includeRelay?: BoolInt,
        includeIPv6?: BoolInt,
    ): CancelablePromise<Array<PlexDevice>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/resources',
            headers: {
                'accepts': accepts,
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
            },
            query: {
                'includeHttps': includeHttps,
                'includeRelay': includeRelay,
                'includeIPv6': includeIPv6,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized - Returned if the X-Plex-Token is missing from the header or query.`,
            },
        });
    }
}
