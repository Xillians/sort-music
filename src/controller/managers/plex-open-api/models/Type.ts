/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaType } from './MediaType';
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
export type type = MediaType;
