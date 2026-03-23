/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Lineup } from './Lineup';
import type { MediaContainer } from './MediaContainer';
export type MediaContainerWithLineup = {
    MediaContainer?: (MediaContainer & {
        Lineup?: Array<Lineup>;
        /**
         * The UUID of this set lineups
         */
        uuid?: string;
    });
};

