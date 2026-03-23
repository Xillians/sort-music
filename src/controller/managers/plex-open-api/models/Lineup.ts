/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Lineup = {
    title?: string;
    /**
     * The type of this object (`lineup` in this case)
     */
    type?: string;
    /**
     * - `-1`: N/A
     * - `0`: Over the air
     * - `1`: Cable
     * - `2`: Satellite
     * - `3`: IPTV
     * - `4`: Virtual
     *
     */
    lineupType?: Lineup.lineupType;
    location?: string;
    /**
     * The uuid of this lineup
     */
    uuid?: string;
};
export namespace Lineup {
    /**
     * - `-1`: N/A
     * - `0`: Over the air
     * - `1`: Cable
     * - `2`: Satellite
     * - `3`: IPTV
     * - `4`: Virtual
     *
     */
    export enum lineupType {
        '_-1' = -1,
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
    }
}

