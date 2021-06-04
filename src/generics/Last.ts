import { Unreachable } from '../static-types/Unreachable'

/**
 * Last Array element
 */
export type Last<T extends ReadonlyArray<any>> = T extends readonly [infer A]
  ? A
  : T extends readonly [...any, infer A]
  ? A
  : T extends ReadonlyArray<infer A>
  ? A | undefined
  : Unreachable
