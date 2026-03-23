/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The type of media to retrieve or filter by.
 *
 * 1 = movie
 * 2 = show
 * 3 = season
 * 4 = episode
 * 5 = artist
 * 6 = album
 * 7 = track
 * 8 = photo_album
 * 9 = photo
 *
 * E.g. A movie library will not return anything with type 3 as there are no seasons for movie libraries
 *
 */
export enum MediaType {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
    '_5' = 5,
    '_6' = 6,
    '_7' = 7,
    '_8' = 8,
    '_9' = 9,
}
