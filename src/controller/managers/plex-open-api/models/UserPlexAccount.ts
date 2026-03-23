/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlexDateTime } from './PlexDateTime';
import type { UserProfile } from './UserProfile';
export type UserPlexAccount = {
    /**
     * Unknown
     */
    adsConsent?: boolean | null;
    adsConsentReminderAt?: (PlexDateTime | null);
    adsConsentSetAt?: (PlexDateTime | null);
    /**
     * Unknown
     */
    anonymous?: boolean | null;
    /**
     * The account token
     */
    authToken: string;
    /**
     * If the two-factor authentication backup codes have been created
     */
    backupCodesCreated?: boolean;
    /**
     * If the account has been confirmed
     */
    confirmed?: boolean;
    /**
     * The account country
     */
    country?: string;
    /**
     * The account email address
     */
    email: string;
    /**
     * If login with email only is enabled
     */
    emailOnlyAuth?: boolean;
    /**
     * If experimental features are enabled
     */
    experimentalFeatures?: boolean;
    /**
     * Your account full name
     */
    friendlyName: string;
    /**
     * List of devices your allowed to use with this account
     */
    entitlements?: Array<string>;
    /**
     * If the account is a Plex Home guest user
     */
    guest?: boolean;
    /**
     * If the account has a password
     */
    hasPassword: boolean;
    /**
     * If the account is a Plex Home user
     */
    home?: boolean;
    /**
     * If the account is the Plex Home admin
     */
    homeAdmin?: boolean;
    /**
     * The number of accounts in the Plex Home
     */
    homeSize?: number;
    /**
     * The Plex account ID
     */
    id: number;
    joinedAt: PlexDateTime;
    /**
     * The account locale
     */
    locale?: string | null;
    /**
     * If you are subscribed to the Plex newsletter
     */
    mailingListActive?: boolean;
    /**
     * Your current mailing list status
     */
    mailingListStatus?: UserPlexAccount.mailingListStatus;
    /**
     * The maximum number of accounts allowed in the Plex Home
     */
    maxHomeSize?: number;
    /**
     * [Might be removed] The hashed Plex Home PIN
     * @deprecated
     */
    pin?: string;
    profile?: UserProfile;
    /**
     * If the account has a Plex Home PIN enabled
     */
    protected?: boolean;
    rememberExpiresAt?: PlexDateTime;
    /**
     * If the account is a Plex Home managed user
     */
    restricted?: boolean;
    /**
     * [Might be removed] List of account roles. Plexpass membership listed here
     */
    roles?: Array<string>;
    /**
     * Unknown
     */
    scrobbleTypes?: string;
    services?: Array<{
        identifier: string;
        endpoint: string;
        token: string | null;
        secret: string | null;
        status: 'online' | 'offline';
    }>;
    /**
     * If the account's Plex Pass subscription is active
     */
    subscription?: {
        /**
         * List of features allowed on your Plex Pass subscription
         */
        features?: Array<string>;
        /**
         * If the account's Plex Pass subscription is active
         */
        active?: boolean;
        /**
         * Date the account subscribed to Plex Pass
         */
        subscribedAt?: string | null;
        /**
         * String representation of subscriptionActive
         */
        status?: UserPlexAccount.status;
        /**
         * Payment service used for your Plex Pass subscription
         */
        paymentService?: string | null;
        /**
         * Name of Plex Pass subscription plan
         */
        plan?: string | null;
    };
    /**
     * Description of the Plex Pass subscription
     */
    subscriptionDescription?: string | null;
    subscriptions?: Array<{
        /**
         * List of features allowed on your Plex Pass subscription
         */
        features?: Array<string>;
        /**
         * If the account's Plex Pass subscription is active
         */
        active?: boolean;
        /**
         * Date the account subscribed to Plex Pass
         */
        subscribedAt?: string | null;
        /**
         * String representation of subscriptionActive
         */
        status?: 'Inactive' | 'Active';
        /**
         * Payment service used for your Plex Pass subscription
         */
        paymentService?: string | null;
        /**
         * Name of Plex Pass subscription plan
         */
        plan?: string | null;
    }>;
    /**
     * URL of the account thumbnail
     */
    thumb?: string;
    /**
     * The title of the account (username or friendly name)
     */
    title: string;
    /**
     * If two-factor authentication is enabled
     */
    twoFactorEnabled: boolean;
    /**
     * The account username
     */
    username: string;
    /**
     * The account UUID
     */
    uuid: string;
    attributionPartner?: string | null;
};
export namespace UserPlexAccount {
    /**
     * Your current mailing list status
     */
    export enum mailingListStatus {
        ACTIVE = 'active',
        UNSUBSCRIBED = 'unsubscribed',
        REMOVED = 'removed',
    }
    /**
     * String representation of subscriptionActive
     */
    export enum status {
        INACTIVE = 'Inactive',
        ACTIVE = 'Active',
    }
}

