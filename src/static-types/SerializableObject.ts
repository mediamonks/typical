import type { Serializable } from './Serializable'

/**
 * A serializable object
 */
export type SerializableObject = Partial<{
  [key: string]: Serializable
}>
