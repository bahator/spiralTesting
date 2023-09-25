import { List } from "ts-toolbelt"

export type List<T> = {
  head: T,
  tail: List<T>
} | undefined

/**
 * Create a list of one element
 */
// "expected undefined to equal []" for the tail, test need fix
export const cons = <T>(e: T): List<T> => {
  return {
    head: e,
    tail: undefined
  }
}

/**
 * Create a list of zero element
 */
// Should be the first test
export const nil = <T>(): List<T> => {
  return undefined
}

/**
 * Create a list of many elements
 */
// expected { head: [], tail: undefined } to equal { head: [], tail: undefined } ???
export const list = <T>(...elements: ReadonlyArray<T>): List<T> => {
  var list: List<T> = undefined

  for (let i = 0; i < elements.length; i++) {
    list = {
      head: elements[i],
      tail: list
    }
  }

  return list
}

/**
 * Return the first element of the list, if any
 */
export const head = <T>(list: List<T>): T | undefined => {
  return list?.head
}

/**
 * Return all the elements of the list except the first
 */
export const tail = <T>(list: List<T>): List<T> => {
  return list?.tail
}

/**
 * Add the provided element at the start of the list
 */
// Should be before the list of many elements if i'm not retarded
export const append = <T>(e: T, list: List<T>): List<T> => {
  return {
    head: e,
    tail: list
  }
}

/**
 * Add the provided element at the end of the list
 */
//  expected { head: false, tail: undefined } to equal { head: [ false ], tail: undefined } ???
export const preppend = <T>(e: T, list: List<T>): List<T> => {

  const f = (li: List<T>): List<T> => {
    if (li == undefined) {
      return cons(e)

    }

    return {
      head: li?.head,
      tail: f(li.tail)
    }
  }

  return f(list)
}

/**
 * Extract the element at position 'index' from the list
 */
export const get = <T>(index: number, list: List<T>): T | undefined => {
  const f = (id: number, li: List<T>): T | undefined => {
    if (li == undefined) {
      return undefined
    }

    return f(id - 1, li.tail)
  }

  return f(index, list)
}

/**
 * Extract the element at position 'index' from the list, returning 'elseCase' if not element is present
 */
/*
 Not sure if this one is usefull
*/
export const getOrElse = <T>(index: number, list: List<T>, elseCase: T): T => {
  const f = (id: number, li: List<T>): T => {
    if (li == undefined) {
      return elseCase
    }

    return f(id - 1, li.tail)
  }

  return f(index, list)
}

/**
 * Compare two lists by values.
 */
// "Counterexample: [{"head":{},"tail":undefined},undefined]". Same problem that the first test
export const equals = <T>(list1: List<T>, list2: List<T>): boolean => {

  const f = (li1: List<T>, li2: List<T>): boolean => {

    if (li1?.head == !li2?.head) {
      return false
    } else if (li1?.head == undefined) {
      return true
    }

    return f(li1.tail, li2?.tail)
  }

  return f(list1, list2)
}

/**
 * Count the number of element in the given list
 */
export const count = <T>(list: List<T>): number => {

  const f = (acc: number, li: List<T>): number => {
    if (li == undefined) {
      return acc
    }

    return f(acc + 1, li.tail)
  }

  return f(0, list)
}

/**
 * Create a new list with all elements of list1 followed by all elements of list2
 */
// expected { head: [], tail: undefined } to equal { head: [], tail: undefined } ???
export const concat = <T>(list1: List<T>, list2: List<T>): List<T> => {
  const f = (li: List<T>): List<T> => {

    if (li?.head == undefined) {
      return list2
    }
    else if (li.tail == undefined) {
      return append(li.head, list2)
    }

    return append(li?.head, f(li.tail))
  }

  return f(list1)

}

/**
 * Test for the existence of a value in the list
 */
export const contains = <T>(e: T, list: List<T>): boolean => {
  const f = (li: List<T>): boolean => {
    if (li == undefined) {
      return false
    } else if (li?.head == e) {
      return true
    }

    return f(li.tail)
  }

  return f(list)
}

/**
 * Test if the slice is contained by the list
 */
// Not sure if order is important since we determined that this List is sorted (method get with index)
// 
export const containsSlice = <T>(slice: List<T>, list: List<T>): boolean => {
  const f = (li: List<T>): boolean => {

    if (li?.head == undefined) {
      return true
    }
    else if (!contains(li?.head, list)) {
      return false
    }

    return f(li?.tail)
  }

  return f(slice)
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