/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoolInt } from '../models/BoolInt';
import type { MediaContainer } from '../models/MediaContainer';
import type { MediaContainerWithDirectory } from '../models/MediaContainerWithDirectory';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GeneralService {
    /**
     * Get PMS info
     * Information about this PMS setup and configuration
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param accepts Indicates the client accepts the indicated media types
     * @param xPlexProduct The name of the client product
     * @param xPlexVersion The version of the client application
     * @param xPlexPlatform The platform of the client
     * @param xPlexPlatformVersion The version of the platform
     * @param xPlexDevice A relatively friendly name for the client device
     * @param xPlexModel A potentially less friendly identifier for the device model
     * @param xPlexDeviceVendor The device vendor
     * @param xPlexDeviceName A friendly name for the client
     * @param xPlexMarketplace The marketplace on which the client application is distributed
     * @returns MediaContainerWithDirectory OK
     * @throws ApiError
     */
    public static getServerInfo(
        xPlexClientIdentifier: string,
        accepts: 'application/json' | 'application/xml' = 'application/xml',
        xPlexProduct?: string,
        xPlexVersion?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexDeviceVendor?: string,
        xPlexDeviceName?: string,
        xPlexMarketplace?: string,
    ): CancelablePromise<MediaContainerWithDirectory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
            headers: {
                'accepts': accepts,
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Product': xPlexProduct,
                'X-Plex-Version': xPlexVersion,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Device-Vendor': xPlexDeviceVendor,
                'X-Plex-Device-Name': xPlexDeviceName,
                'X-Plex-Marketplace': xPlexMarketplace,
            },
        });
    }
    /**
     * Get PMS identity
     * Get details about this PMS's identity
     * @returns any OK
     * @throws ApiError
     */
    public static getIdentity(): CancelablePromise<{
        MediaContainer?: {
            /**
             * Indicates whether this server has been claimed by a user
             */
            claimed?: boolean;
            /**
             * A unique identifier of the computer
             */
            machineIdentifier?: string;
            size?: number;
            /**
             * The full version string of the PMS
             */
            version?: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/identity',
        });
    }
    /**
     * Get Source Connection Information
     * If a caller requires connection details and a transient token for a source that is known to the server, for example a cloud media provider or shared PMS, then this endpoint can be called. This endpoint is only accessible with either an admin token or a valid transient token generated from an admin token.
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param source The source identifier with an included prefix.
     * @param accepts Indicates the client accepts the indicated media types
     * @param xPlexProduct The name of the client product
     * @param xPlexVersion The version of the client application
     * @param xPlexPlatform The platform of the client
     * @param xPlexPlatformVersion The version of the platform
     * @param xPlexDevice A relatively friendly name for the client device
     * @param xPlexModel A potentially less friendly identifier for the device model
     * @param xPlexDeviceVendor The device vendor
     * @param xPlexDeviceName A friendly name for the client
     * @param xPlexMarketplace The marketplace on which the client application is distributed
     * @param refresh Force refresh
     * @returns any OK
     * @throws ApiError
     */
    public static getSourceConnectionInformation(
        xPlexClientIdentifier: string,
        source: string,
        accepts: 'application/json' | 'application/xml' = 'application/xml',
        xPlexProduct?: string,
        xPlexVersion?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexDeviceVendor?: string,
        xPlexDeviceName?: string,
        xPlexMarketplace?: string,
        refresh?: BoolInt,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            Device?: {
                accessToken?: string;
                clientIdentifier?: string;
                Connection?: Array<{
                    address?: string;
                    /**
                     * Indicates if the connection is the server's LAN address
                     */
                    local?: boolean;
                    port?: number;
                    protocol?: string;
                    /**
                     * Indicates the connection is over a relayed connection
                     */
                    relay?: boolean;
                    uri?: string;
                }>;
                name?: string;
            };
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/security/resources',
            headers: {
                'accepts': accepts,
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Product': xPlexProduct,
                'X-Plex-Version': xPlexVersion,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Device-Vendor': xPlexDeviceVendor,
                'X-Plex-Device-Name': xPlexDeviceName,
                'X-Plex-Marketplace': xPlexMarketplace,
            },
            query: {
                'source': source,
                'refresh': refresh,
            },
            errors: {
                400: `A query param is missing or the wrong value`,
                403: `Invalid or no token provided or a transient token could not be created`,
            },
        });
    }
    /**
     * Get Transient Tokens
     * This endpoint provides the caller with a temporary token with the same access level as the caller's token. These tokens are valid for up to 48 hours and are destroyed if the server instance is restarted.
     * Note: This endpoint responds to all HTTP verbs but POST in preferred
     * @param xPlexClientIdentifier An opaque identifier unique to the client
     * @param type The value `delegation` is the only supported `type` parameter.
     * @param scope The value `all` is the only supported `scope` parameter.
     * @param accepts Indicates the client accepts the indicated media types
     * @param xPlexProduct The name of the client product
     * @param xPlexVersion The version of the client application
     * @param xPlexPlatform The platform of the client
     * @param xPlexPlatformVersion The version of the platform
     * @param xPlexDevice A relatively friendly name for the client device
     * @param xPlexModel A potentially less friendly identifier for the device model
     * @param xPlexDeviceVendor The device vendor
     * @param xPlexDeviceName A friendly name for the client
     * @param xPlexMarketplace The marketplace on which the client application is distributed
     * @returns any OK
     * @throws ApiError
     */
    public static getTransientToken(
        xPlexClientIdentifier: string,
        type: 'delegation',
        scope: 'all',
        accepts: 'application/json' | 'application/xml' = 'application/xml',
        xPlexProduct?: string,
        xPlexVersion?: string,
        xPlexPlatform?: string,
        xPlexPlatformVersion?: string,
        xPlexDevice?: string,
        xPlexModel?: string,
        xPlexDeviceVendor?: string,
        xPlexDeviceName?: string,
        xPlexMarketplace?: string,
    ): CancelablePromise<{
        MediaContainer?: (MediaContainer & {
            /**
             * The transient token
             */
            token?: string;
        });
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/security/token',
            headers: {
                'accepts': accepts,
                'X-Plex-Client-Identifier': xPlexClientIdentifier,
                'X-Plex-Product': xPlexProduct,
                'X-Plex-Version': xPlexVersion,
                'X-Plex-Platform': xPlexPlatform,
                'X-Plex-Platform-Version': xPlexPlatformVersion,
                'X-Plex-Device': xPlexDevice,
                'X-Plex-Model': xPlexModel,
                'X-Plex-Device-Vendor': xPlexDeviceVendor,
                'X-Plex-Device-Name': xPlexDeviceName,
                'X-Plex-Marketplace': xPlexMarketplace,
            },
            query: {
                'type': type,
                'scope': scope,
            },
            errors: {
                400: `A query param is missing or the wrong value`,
                403: `Invalid or no token provided or a transient token could not be created`,
            },
        });
    }
}
