import type { SerializableArray } from './SerializableArray'
import type { SerializableObject } from './SerializableObject'
import type { SerializablePrimitive } from './SerializablePrimitive'

export type Serializable =
  | SerializablePrimitive
  | SerializableArray
  | SerializableObject
