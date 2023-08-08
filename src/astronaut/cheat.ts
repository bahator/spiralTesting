import type { Union, List } from 'ts-toolbelt'

type __Members<T, K extends List.Readonly<Array<unknown>>> = 
  ((...args: K) => unknown) extends ((head: infer Head, ...tail: infer Tail) => unknown)
  ? Head extends keyof T
    ? [T[Head], __Members<T, Tail>]
    : []
  : []

type Members<T> = List.Flatten<__Members<T, Union.ListOf<keyof T>>>