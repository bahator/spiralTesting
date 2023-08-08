import type { } from 'ts-toolbelt'

/* Type constructor that extract the list of types of the values of a given Record type
 * example: 
 * - Members<{}> <=> []
 * - Members<{1: string, 2: number, 3: string}> => [string, number, string]
 */
type Members<T> = T