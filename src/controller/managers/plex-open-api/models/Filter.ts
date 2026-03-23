/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Directory } from './Directory';
export type Filter = (Directory & {
    /**
     * The title for the filter.
     */
    title?: string;
    /**
     * This represents the filter name used for the filter, which can be used to construct complex media queries with.
     */
    filter?: string;
    /**
     * This is either `string`, `integer`, or `boolean`, and describes the type of values used for the filter.
     */
    filterType?: string;
    /**
     * This provides the endpoint where the possible range of values for the filter can be retrieved (e.g. for a "Genre" filter, it returns a list of all the genres in the library). This will include a `type` argument that matches the metadata type of the Type element.
     */
    key?: string;
});

