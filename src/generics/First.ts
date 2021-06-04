import { Unreachable } from '../static-types/Unreachable'

/**
 * First Array element
 */
export type First<T extends ReadonlyArray<any>> = T extends readonly [
  infer A,
  ...any
]
  ? A
  : T extends ReadonlyArray<infer A>
  ? A | undefined
  : Unreachable
