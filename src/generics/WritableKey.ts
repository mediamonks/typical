import { Writable } from './Writable'

/**
 * Get a union of writable property keys (experimental)
 */
export type WritableKey<T> = Extract<Writable<T>, T>

type X = WritableKey<Readonly<{ foo: string }>>
