import { record, type Arbitrary, letrec, oneof, constant, assert, property, anything, integer, func, boolean } from 'fast-check'
import { type List, cons as consImpl, dropWhile, dropRight, dropMatching, drop, nil as nilImpl, list as listImpl, head as headImpl, tail as tailImpl, append, preppend, get, getOrElse, equals, count, concat, contains, containsSlice, distinct } from './index'
import { should } from 'chai'

const { equal } = should()

const arb = <T>(value: Arbitrary<T>) =>
  letrec(tie => ({
    list: oneof({ depthSize: 'large', withCrossShrink: true }, tie('nil'), tie('cons')) as Arbitrary<List<T>>,
    cons: record({
      head: value,
      tail: tie('list')
    }),
    nil: constant(undefined)
  }))

const { list, cons } = arb(anything())

const toArray = <T>(list: List<T>): ReadonlyArray<T> => {
  if(list === undefined)
    return []

  if(list.tail === undefined)
    return [list.head]

  return [list.head, ...toArray(list.tail)]
}

describe('cons', () => {
  it('should create a valid list', () => {
    assert(
      property(cons, (expected) => {
        const actual = consImpl(expected.head)
        equal(actual?.head, expected.head)
        equal(actual?.tail, [])
      })
    )
  })
})

describe('nil', () => {
  it('should create an empty list', () => {
    return nilImpl() === undefined
  })
})

describe('list', () => {
  it('should create a list with the provided elements', () => {
    assert(
      property(list, (expected) => {
        const actual = listImpl(...toArray(expected))
        equal(actual, expected)
      })
    )
  })
})

describe('head', () => {
  it('should select the first element', () => {
    assert(
      property(list, (expected) => {
        const actual = headImpl(expected)
        equal(actual, expected?.head)
      })
    )
  })
})

describe('tail', () => {
  it('should all excepts the first element', () => {
    assert(
      property(list, (expected) => {
        const actual = tailImpl(expected)
        equal(actual, expected?.tail)
      })
    )
  })
})

describe('append', () => {
  it('should add an element', () => {
    assert(
      property(anything(), list, (thing, generated) => {
        const actual = append(thing, generated)
        const expected = { head: thing, tail: generated }
        equal(actual, expected)
      })
    )
  })
})

describe('preppend', () => {
  it('should add an element to the end of the list', () => {
    assert(
      property(anything(), list, (thing, generated) => {
        const actual = preppend(thing, generated)
        const expected = listImpl([...toArray(generated), thing])
        equal(actual, expected)
      })
    )
  })
})

describe('get', () => {
  it('should select an element at a given index', () => {
    assert(
      property(integer(), list, (index, generated) => {
        const actual = get(index, generated)
        const expected = toArray(generated)[index]
        equal(actual, expected)
      })
    )
  })
})

describe('getOrElse', () => {
  it('should select an element at a given index or return the provided default', () => {
    assert(
      property(integer(), list, anything(), (index, generated, def) => {
        const actual = getOrElse(index, generated, def)
        const expected = toArray(generated)[index] || def
        equal(actual, expected)
      })
    )
  })
})

describe('equals', () => {
  it('should compare by value two list', () => {
    assert(
      property(list, list, (list1, list2) => {
        const actual = equals(list1, list2)
        const arr1 = toArray(list1)
        const arr2 = toArray(list2)
        const expected = arr1.filter((v, i) => arr2[i] === v).length === arr1.length
        equal(actual, expected)
      })
    )
  })
})

describe('count', () => {
  it('should count the number of element in the list', () => {
    assert(
      property(list, (list1) => {
        const actual = count(list1)
        const expected = toArray(list1).length
        equal(actual, expected)
      })
    )
  })
})

describe('concat', () => {
  it('should count the number of element in the list', () => {
    assert(
      property(list, list, (list1, list2) => {
        const actual = concat(list1, list2)
        const expected = listImpl(...[...toArray(list1), ...toArray(list2)])
        equal(actual, expected)
      })
    )
  })
})

describe('contains', () => {
  it('should return true if the list contained the provided element', () => {
    assert(
      property(list, anything(), (list, element) => {
        const actual = contains(element, list)
        const expected = toArray(list).find(e => e === element) !== undefined
        equal(actual, expected)
      })
    )
  })
})

describe('containsSlice', () => {
  it('should return true if the list contained the provided elements', () => {
    assert(
      property(list, list, (list, elements) => {
        const actual = containsSlice(elements, list)

        const arr = toArray(list)
        const slice = toArray(elements)
        let index = -1
        for(const element of slice) {
          if(!arr.includes(element, index)) {
            index = -1
            break
          }
          index = arr.indexOf(element, index)
        }
        const expected = index !== -1

        equal(actual, expected)
      })
    )
  })
})

describe('distinct', () => {
  it('should return the list without duplicate', () => {
    assert(
      property(list, (list) => {
        const actual = distinct(list)

        const expected = listImpl(... new Set(toArray(list)))

        equal(actual, expected)
      })
    )
  })
})

describe('drop', () => {
  it('should remove the n first elements', () => {
    assert(
      property(integer(), list, (n, list) => {
        const actual = drop(n, list)

        const expected = listImpl(toArray(list).slice(n))

        equal(actual, expected)
      })
    )
  })
})

describe('dropRight', () => {
  it('should remove the n last elements', () => {
    assert(
      property(integer(), list, (n, list) => {
        const actual = dropRight(n, list)

        const expected = listImpl(toArray(list).slice(0, n+1))

        equal(actual, expected)
      })
    )
  })
})

describe('dropMatching', () => {
  it('should remove all elements matching the predicate', () => {
    assert(
      property(func(boolean()), list, (f, list) => {
        const actual = dropMatching(f, list)

        const expected = listImpl(toArray(list).filter(v => !f(v)))

        equal(actual, expected)
      })
    )
  })
})

describe('dropWhile', () => {
  it('should remove longest sequence of element that satisfy the predicate', () => {
    assert(
      property(func(boolean()), list, (f, list) => {
        const actual = dropWhile(f, list)

        let indexes = [] as number[]
        const arr = toArray(list) as unknown[]
        const onOff = arr.map(f)
        onOff.forEach((v, i) => {
          if(v) indexes.push(i)
          else indexes = []
        })
        const [start, end] = [indexes[0] || 0, indexes[indexes.length - 1 || 0]]
        arr.splice(start, end)

        const expected = listImpl(arr);
        equal(actual, expected)
      })
    )
  })
})