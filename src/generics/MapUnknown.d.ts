import type { UnknownLimited } from './UnknownLimited'

/**
 * Map unknown object properties to a type you specified
 */
export type MapUnknown<T, U> = {
  [P in keyof T]: UnknownLimited<T[P], U>
}
