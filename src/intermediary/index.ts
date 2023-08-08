import type { List } from '../junior'

/**
 * Build all possible combinations of a given list
 */
export const combinations = <T>(list: List<T>): ReadonlyArray<List<T>> => {
  throw new Error('not implemented')
}

/**
 * Build a new list from the result of applying f to all elements of list
 */
export const map = <T, T1>(f: (e: T) => T1, list: List<T>): List<T1> => {
  throw new Error('not implemented')
}

/**
 * Use the predicate to select elements
 */
export const filter = <T, T1>(f: (e: T) => T1, list: List<T>): List<T1> => {
  throw new Error('not implemented')
}

/**
 * Fold over the list and return a unique result
 */
export const fold = <T>(f: (acc: T, e: T) => T, list: List<T>): T => {
  throw new Error('not implemented')
}

/**
 * Fold over the list in the natural order and return the accumulated result
 */
export const foldLeft = <T, A>(f: (acc: A, e: T) => A, starter: A, list: List<T>): List<A> => {
  throw new Error('not implemented')
}

/**
 * Fold over the list in the opposite order and return the accumulated result
 */
export const foldRight = <T, A>(f: (acc: A, e: T) => A, starter: A, list: List<T>): List<A> => {
  throw new Error('not implemented')
}

/**
 * Select the first element that does match the predicate
 */
export const collectFirst = <T>(predicate: (e: T) => boolean, list: List<T>): T | undefined => {
  throw new Error('not implemented')
}

/**
 * Find the superset differences between two lists
 */
export const diff = <T>(list1: List<T>, list2: List<T>): List<T> => {
  throw new Error('not implemented')
}

/**
 * Find distinct elements after applying the transformation f
 */
export const distinctBy = <T, A>(f: (e: T) => A, list: List<T>): List<T> => {
  throw new Error('not implemented')
}

/**
 * Check if the list ends with the provided elements
 */
export const endsWith = <T>(elements: ReadonlyArray<T>, list: List<T>): boolean => {
  throw new Error('not implemented')
}

/**
 * Answer to the question : does that predicate hold true for at least one of the elements ?
 */
export const exists = <T>(predicate: (e: T) => boolean, list: List<T>): boolean => {
  throw new Error('not implemented')
}

/**
 * Find the first element for which the predicate hold true
 */
export const find = <T>(predicate: (e: T) => boolean, list: List<T>): T | undefined => {
  throw new Error('not implemented')
}

/**
 * Find the last element for which the predicate hold true
 */
export const findLast = <T>(predicate: (e: T) => boolean, list: List<T>): T | undefined => {
  throw new Error('not implemented')
}

/**
 * Flatten a list of list onto a new list.
 * example: [[1], [2]] => [1, 2]
 */
export const flatten = <T>(list: List<List<T>>): List<T>  => {
  throw new Error('not implemented')
}

/**
 * Check if a predicate holds for all elements of a list
 */
export const forall = <T>(predicate: (e: T) => boolean, list: List<T>): boolean  => {
  throw new Error('not implemented')
}

/**
 * Side effect escape hatch.
 * Apply provided function to all elements, forgetting the results
 */
export const foreach = <T, U>(f: (e: T) => U, list: List<T>): void  => {
  throw new Error('not implemented')
}

/**
 * Group element by resulting keys after applying f
 */
export const groupBy = <K extends string | number | symbol, T>(f: (e: T) => K, list: List<T>): Map<K, List<T>>  => {
  throw new Error('not implemented')
}

/**
 * Pair elements of the two lists into a new one.
 */
export const zip = <T1, T2>(list1: List<T1>, list2: List<T2>): List<[T1, T2]>  => {
  throw new Error('not implemented')
}

/**
 * Create two lists out of a list of pair by separating the values
 */
export const unzip = <T1, T2>(list: List<[T1, T2]>): [List<T1>, List<T2>]  => {
  throw new Error('not implemented')
}

/**
 * Turn a list of Promise into a promise of list
 */
export const sequencePromise = <T>(list: List<Promise<T>>): Promise<List<T>>  => {
  throw new Error('not implemented')
}

/**
 * Turn a list of Map into a map of list
 */
export const sequenceMap = <K, T>(list: List<Map<K, T>>): Map<K, List<T>>  => {
  throw new Error('not implemented')
}
