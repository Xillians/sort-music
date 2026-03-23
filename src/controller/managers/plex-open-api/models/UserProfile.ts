/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserProfile = {
    /**
     * If the account has automatically select audio and subtitle tracks enabled
     */
    autoSelectAudio: boolean;
    /**
     * The preferred audio language for the account
     */
    defaultAudioLanguage: string | null;
    defaultAudioAccessibility?: 0 | 1 | 2 | 3;
    /**
     * The preferred audio languages for the account
     */
    defaultAudioLanguages?: any[] | null;
    /**
     * The preferred subtitle language for the account
     */
    defaultSubtitleLanguage: string | null;
    /**
     * The preferred subtitle languages for the account
     */
    defaultSubtitleLanguages?: any[] | null;
    autoSelectSubtitle: 0 | 1 | 2;
    defaultSubtitleAccessibility: 0 | 1 | 2 | 3;
    defaultSubtitleForced: 0 | 1 | 2 | 3;
    watchedIndicator: 0 | 1 | 2 | 3;
    mediaReviewsVisibility: 0 | 1 | 2 | 3;
    /**
     * The languages for media reviews visibility
     */
    mediaReviewsLanguages?: any[] | null;
};

