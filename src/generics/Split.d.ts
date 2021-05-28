import { Delimiter } from '../static-types/Delimiter'

/**
 * Split a string with a delimiter
 */
export type Split<T extends string, U extends Delimiter> =
  T extends `${infer A}${U}${infer B}`
    ? Exclude<string, A> extends never
      ? [...Array<string>, ...Split<B, U>]
      : [A, ...Split<B, U>]
    : Exclude<string, T> extends never
    ? Array<T>
    : [T]

// demo
type A = Split<'a', '.'>
type B = Split<'a.b', '.'>
type C = Split<'a.b.c', '.'>
type D = Split<string, '.'>
type E = Split<`a.${string}`, '.'>
type F = Split<`a.${string}.z`, '.'>
type G = Split<'a...b', '...'>
