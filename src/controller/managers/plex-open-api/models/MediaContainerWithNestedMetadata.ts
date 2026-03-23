/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Items } from './Items';
import type { MediaContainer } from './MediaContainer';
import type { Metadata } from './Metadata';
export type MediaContainerWithNestedMetadata = {
    MediaContainer?: (MediaContainer & {
        MetadataItem?: Array<(Metadata & {
            MetadataItem?: Array<Items>;
        })>;
    });
};

