/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChannelMapping } from './ChannelMapping';
import type { MediaContainer } from './MediaContainer';
export type MediaContainerWithDevice = {
    MediaContainer?: (MediaContainer & {
        Device?: Array<{
            ChannelMapping?: Array<ChannelMapping>;
            key?: string;
            lastSeenAt?: number;
            make?: string;
            model?: string;
            modelNumber?: string;
            protocol?: string;
            sources?: string;
            state?: string;
            status?: string;
            tuners?: string;
            uri?: string;
            uuid?: string;
        }>;
    });
};

