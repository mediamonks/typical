/**
 * An object entry
 */
export type ObjectEntry<T> = {
  [P in keyof T]: [P, T[P]]
}[keyof T]
