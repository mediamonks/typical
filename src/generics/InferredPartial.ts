import type { OptionalKey } from './OptionalKey'
import type { RequiredKey } from './RequiredKey'

/**
 * Infer which properties are optional and make them so
 */
export type InferredPartial<T> = {
  [P in RequiredKey<T>]: T[P]
} &
  {
    [P in OptionalKey<T>]?: T[P]
  }
