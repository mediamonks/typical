/**
 * Get a union of required property keys
 */
export type RequiredKey<T> = {
  [P in keyof T]-?: Extract<T[P], undefined> extends never
    ? Exclude<T[P], never> extends never
      ? never
      : P
    : never
}[keyof T]
