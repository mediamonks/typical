import type { ObjectEntry } from '../generics/ObjectEntry'

/**
 * Strict signature for Object#entries
 */
export type ObjectEntries = <T>(value: T) => Array<ObjectEntry<T>>
