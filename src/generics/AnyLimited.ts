/**
 * Limit `any` to a type you specified, defaults to `unknown`
 */
export type AnyLimited<T, U> = Extract<T extends never ? 1 : 0, 1> extends never
  ? T
  : U
