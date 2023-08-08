type List<T> = {
  head: T,
  tail: List<T>,
  (index: number): T
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

export const lift = <T>(list: List<T>): (index: number) => T | undefined => {
  throw new Error('not implemented')
}

export const unlift = <T>(list: List<T>): (index: number) => T => {
  throw new Error('not implemented')
}

export const cata = <A>(f: (list: List<A>) => A) => (list: List<A>): A => {
  throw new Error('not implemented')
}

export const ana = <A>(f: (e: A) => List<A>) => (e: A): List<A>  => {
  throw new Error('not implemented')
}

export const hylo = <B>(f: (list: List<B>) => B) => <A>(g: (e: A) => List<A>): (a: A) => B => {
  throw new Error('not implemented')
}

export const para = <B>(f: (list: List<B>) => B) => <A>(g: (e: A) => List<A>): (a: A) => B => {
  throw new Error('not implemented')
}
