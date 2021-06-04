/**
 * Limit `unknown` to a type you specified
 */
export type UnknownLimited<T, U> = Extract<
  unknown extends T ? 1 : 0,
  1
> extends never
  ? T
  : U
