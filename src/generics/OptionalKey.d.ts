import type { MapUnknown } from './MapUnknown'

type BaseOptionalKey<T> = {
  [P in keyof T]-?: Extract<T[P], undefined> extends never
    ? Exclude<T[P], never> extends never
      ? P
      : never
    : P
}[keyof T]

type UnknownAlternative = 1

/**
 * Get a union of optional property keys
 */
export type OptionalKey<T> = BaseOptionalKey<MapUnknown<T, UnknownAlternative>>
