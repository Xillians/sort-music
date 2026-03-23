/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MediaQuery } from './MediaQuery';
/**
 * A querystring-based filtering language used to select subsets of media. Can be provided as an object with typed properties for type safety, or as a string for complex queries with operators and boolean logic.
 *
 * The query supports:
 * - Fields: integer, boolean, tag, string, date, language
 * - Operators: =, !=, ==, !==, <=, >=, >>=, <<= (varies by field type)
 * - Boolean operators: & (AND), , (OR), push/pop (parentheses), or=1 (explicit OR)
 * - Sorting: sort parameter with :desc, :nullsLast modifiers
 * - Grouping: group parameter
 * - Limits: limit parameter
 *
 * Examples:
 * - Object format: `{type: 4, sourceType: 2, title: "24"}` → `type=4&sourceType=2&title=24`
 * - String format: `type=4&sourceType=2&title==24` - type = 4 AND sourceType = 2 AND title = "24"
 * - Complex: `push=1&index=1&or=1&rating=2&pop=1&duration=10` - (index = 1 OR rating = 2) AND duration = 10
 *
 * See [API Info section](#section/API-Info/Media-Queries) for detailed information on building media queries.
 *
 */
export type mediaQuery = MediaQuery;
