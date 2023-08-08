export type List<T> = {
  head: T,
  tail: List<T>
} | undefined

/**
 * Create a list of one element
 */
export const cons = <T>(e: T): List<T> => {
  throw new Error('not implemented')
}

/**
 * Create a list of zero element
 */
export const nil = <T>(): List<T> => {
  throw new Error('not implemented')
}

/**
 * Create a list of many elements
 */
export const list = <T>(...elements: ReadonlyArray<T>): List<T> => {
  throw new Error('not implemented')
}

/**
 * Return the first element of the list, if any
 */
export const head = <T>(list: List<T>): T | undefined => {
  throw new Error('not implemented')
}

/**
 * Return all the elements of the list except the first
 */
export const tail = <T>(list: List<T>): List<T> => {
  throw new Error('not implemented')
}

/**
 * Add the provided element at the start of the list
 */
export const append = <T>(e: T, list: List<T>): List<T> => {
  throw new Error('not implemented')
}

/**
 * Add the provided element at the end of the list
 */
export const preppend = <T>(e: T, list: List<T>): List<T> => {
  throw new Error('not implemented')
}

/**
 * Extract the element at position 'index' from the list
 */
export const get = <T>(index: number, list: List<T>): T | undefined => {
  throw new Error('not implemented')
}

/**
 * Extract the element at position 'index' from the list, returning 'elseCase' if not element is present
 */
export const getOrElse = <T>(index: number, list: List<T>, elseCase: T): T => {
  throw new Error('not implemented')
}

/**
 * Compare two lists by values.
 */
export const equals = <T>(list1: List<T>, list2: List<T>): boolean => {
  throw new Error('not implemented')
}

/**
 * Count the number of element in the given list
 */
export const count = <T>(list: List<T>): number => {
  throw new Error('not implemented')
}

/**
 * Create a new list with all elements of list1 followed by all elements of list2
 */
export const concat = <T>(list1: List<T>, list2: List<T>): List<T> => {
  throw new Error('not implemented')
}

/**
 * Test for the existence of a value in the list
 */
export const contains = <T>(e: T, list: List<T>): boolean => {
  throw new Error('not implemented')
}

/**
 * Test if the slice is contained by the list
 */
export const containsSlice = <T>(slice: List<T>, list: List<T>): boolean => {
  throw new Error('not implemented')
}

/**
 * Select all elements of the list ignoring duplicates
 */
export const distinct = <T>(list: List<T>): List<T> => {
  throw new Error('not implemented')
}

/**
 * Remove n element from the list
 */
export const drop = <T>(n: number, list: List<T>): List<T> => {
  throw new Error('not implemented')
}

/**
 * Remove n element from the end of the list
 */
export const dropRight = <T>(n: number, list: List<T>): List<T> => {
  throw new Error('not implemented')
}

/**
 * Remove all elements matching the predicate
 */
export const dropMatching = <T>(predicate: (e: T) => boolean,  list: List<T>): List<T> => {
  throw new Error('not implemented')
}

/**
 * Remove longest sequence of element that satisfy the predicate
 */
export const dropWhile = <T>(predicate: (e: T) => boolean,  list: List<T>): List<T> => {
  throw new Error('not implemented')
}