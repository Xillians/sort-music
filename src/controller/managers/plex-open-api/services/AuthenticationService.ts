/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlexDateTime } from '../models/PlexDateTime';
import type { UserPlexAccount } from '../models/UserPlexAccount';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthenticationService {
    /**
     * Get Token Details
     * Get the User data from the provided X-Plex-Token
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
     * @returns UserPlexAccount Logged in user details
     * @throws ApiError
     */
    public static getTokenDetails(
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
    ): CancelablePromise<UserPlexAccount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user',
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
            errors: {
                400: `Bad Request - A parameter was not specified, or was specified incorrectly.`,
                401: `Unauthorized - Returned if the X-Plex-Token is missing from the header or query.`,
            },
        });
    }
    /**
     * Get User Sign In Data
     * Sign in user with username and password and return user data with Plex authentication token
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
     * @param formData Login credentials
     * @returns any Returns the user account data with a valid auth token
     * @throws ApiError
     */
    public static postUsersSignInData(
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
        formData?: {
            login: string;
            password: string;
            rememberMe?: boolean;
            verificationCode?: string;
        },
    ): CancelablePromise<(UserPlexAccount & {
        pastSubscriptions: Array<{
            id: string | null;
            mode: string | null;
            renewsAt: (PlexDateTime | null);
            endsAt: (PlexDateTime | null);
            canceled: boolean;
            gracePeriod: boolean;
            onHold: boolean;
            canReactivate: boolean;
            canUpgrade: boolean;
            canDowngrade: boolean;
            canConvert: boolean;
            type: string;
            transfer: string | null;
            state: 'ended';
            billing: {
                internalPaymentMethod: Record<string, any>;
                paymentMethodId: number | null;
            };
        }>;
        trials: Array<Record<string, any>>;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/signin',
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
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                400: `Bad Request - A parameter was not specified, or was specified incorrectly.`,
                401: `Unauthorized - Returned if the X-Plex-Token is missing from the header or query.`,
            },
        });
    }
}
