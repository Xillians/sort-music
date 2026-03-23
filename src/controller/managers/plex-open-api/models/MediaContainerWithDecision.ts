/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Media } from './Media';
import type { MediaContainer } from './MediaContainer';
import type { Metadata } from './Metadata';
import type { Part } from './Part';
import type { Stream } from './Stream';
/**
 * `MediaContainer` is commonly found as the root of a response and is a pretty generic container. Common attributes include `identifier` and things related to paging (`offset`, `size`, `totalSize`).
 *
 * It is also common for a `MediaContainer` to contain attributes "hoisted" from its children. If every element in the container would have had the same attribute, then that attribute can be present on the container instead of being repeated on every element. For example, an album's list of tracks might include `parentTitle` on the container since all of the tracks have the same album title. A container may have a `source` attribute when all of the items came from the same source. Generally speaking, when looking for an attribute on an item, if the attribute wasn't found then the container should be checked for that attribute as well.
 *
 */
export type MediaContainerWithDecision = {
    MediaContainer?: (MediaContainer & {
        /**
         * The maximum available bitrate when the decision was rendered.
         */
        availableBandwidth?: number;
        directPlayDecisionCode?: number;
        directPlayDecisionText?: string;
        /**
         * The overall decision. 1xxx are playback can succeed, 2xxx are a general error (such as insufficient bandwidth), 3xxx are errors in direct play, and 4xxx are errors in transcodes. Same codes are used in all.
         */
        generalDecisionCode?: number;
        generalDecisionText?: string;
        /**
         * The code indicating the status of evaluation of playback when client indicates `hasMDE=1`
         */
        mdeDecisionCode?: number;
        /**
         * Descriptive text for the above code
         */
        mdeDecisionText?: string;
        Metadata?: Array<(Metadata & {
            Media?: Array<(Media & {
                abr?: boolean;
                Part?: Array<(Part & {
                    decision?: 'directplay' | 'transcode' | 'none';
                    selected?: boolean;
                    Stream?: Array<(Stream & {
                        decision?: 'copy' | 'transcode' | 'burn' | 'unavailable' | 'ignore' | 'none';
                        location?: 'direct' | 'sidecar-subs' | 'segments-video' | 'segments-audio' | 'segments-av' | 'segments-subs' | 'embedded' | 'sidecar';
                    })>;
                })>;
                resourceSession?: string;
                selected?: boolean;
            })>;
        })>;
        transcodeDecisionCode?: number;
        transcodeDecisionText?: string;
    });
};

