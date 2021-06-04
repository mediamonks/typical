import type { Serializable } from './Serializable'

/**
 * A serializable (readonly) Array
 */
export type SerializableArray =
  | Array<Serializable>
  | ReadonlyArray<Serializable>
