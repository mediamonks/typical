import { Delimiter } from '../static-types/Delimiter'
import { Unreachable } from '../static-types/Unreachable'

export type Join<T extends ReadonlyArray<string>, U extends Delimiter> =
  T extends []
    ? ''
    : T extends readonly [infer A]
    ? A
    : T extends readonly [infer A, ...infer B]
    ? B extends ReadonlyArray<string>
      ? `${Extract<A, string>}${U}${Join<B, U>}`
      : Unreachable
    : T extends readonly [...infer A, infer B]
    ? A extends ReadonlyArray<string>
      ? `${Join<A, U>}${U}${Extract<B, string>}`
      : Unreachable
    : T extends ReadonlyArray<string>
    ? string
    : Unreachable

// type A = Join<[], ','>
// type B = Join<['a'], ','>
// type C = Join<['a', 'b'], ','>
// type D = Join<['a', string], ','>
// type E = Join<['a', ...Array<string>], ','>
// type F = Join<['a', string, 'z'], ','>
// type G = Join<['a', ...Array<'foo' | 'bar'>, 'z'], ','>
// type H = Join<readonly ['a'], ','>
// type I = Join<readonly ['a', 'b'], ','>
// type J = Join<Array<string>, ','>
// type K = Join<ReadonlyArray<string>, ','>
