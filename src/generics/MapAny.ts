import type { AnyLimited } from './AnyLimited'

/**
 * Map unknown object properties to a type you specified
 */
export type MapAny<T, U = unknown> = {
  [P in keyof T]: AnyLimited<T[P], U>
}
