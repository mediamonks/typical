import type { ObjectValue } from '../generics/ObjectValue'

/**
 * Strict signature for Object#values
 */
export type ObjectValues = <T>(value: T) => Array<ObjectValue<T>>
