/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Directory } from './Directory';
export type Sort = (Directory & {
    /**
     * The title of the field.
     */
    title?: string;
    /**
     * If present, this sort is the default and in this direction
     */
    default?: Sort.Default;
    /**
     * This default diction of this sort
     */
    defaultDirection?: Sort.defaultDirection;
    /**
     * The key for sorting this field in reverse order
     */
    descKey?: string;
    /**
     * The key to use to get items sorted by this field and indexed by the first character
     */
    firstCharacterKey?: string;
    /**
     * The key to use in the sort field to make items sort by this item
     */
    key?: string;
});
export namespace Sort {
    /**
     * If present, this sort is the default and in this direction
     */
    export enum Default {
        ASC = 'asc',
        DESC = 'desc',
    }
    /**
     * This default diction of this sort
     */
    export enum defaultDirection {
        ASC = 'asc',
        DESC = 'desc',
    }
}

