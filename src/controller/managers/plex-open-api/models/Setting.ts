/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A configuration setting or preference
 */
export type Setting = {
    /**
     * The type of the value of this setting
     */
    type?: Setting.type;
    /**
     * The default value of this setting
     */
    default?: (string | number | boolean);
    /**
     * Whether the setting is considered advanced and normally hidden from the user
     */
    advanced?: boolean;
    /**
     * The possible values for this setting if restricted. The list is `|` separated with `value:name` entries.
     */
    enumValues?: string;
    /**
     * The group name of this setting to aid in display of a hierarchy
     */
    group?: string;
    /**
     * Whether the setting is hidden or not
     */
    hidden?: boolean;
    /**
     * The query parameter name for this setting
     */
    id?: string;
    /**
     * A user-friendly name for the setting
     */
    label?: string;
    /**
     * A description of the setting
     */
    summary?: string;
    /**
     * The current value of this setting
     */
    value?: (string | number | boolean);
};
export namespace Setting {
    /**
     * The type of the value of this setting
     */
    export enum type {
        BOOL = 'bool',
        INT = 'int',
        TEXT = 'text',
        DOUBLE = 'double',
    }
}

