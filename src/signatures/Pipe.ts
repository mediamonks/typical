import { Last } from '../generics/Last'
import { Unreachable } from '../static-types/Unreachable'

export type CurriedPipe<T extends ReadonlyArray<Transform<any, any>>> = (
  ...transforms: PipeTransforms<T>
) => (value: PipeInitialType<T>) => PipeReturnType<T>

export type ValueFirstPipe<T extends ReadonlyArray<Transform<any, any>>> = (
  value: PipeInitialType<T>,
  transforms: PipeTransforms<T>,
) => PipeReturnType<T>

export type ValueLastPipe<T extends ReadonlyArray<Transform<any, any>>> = (
  transforms: PipeTransforms<T>,
  value: PipeInitialType<T>,
) => PipeReturnType<T>

type PipeTransforms<T extends ReadonlyArray<Transform<any, any>>> = T extends [
  Transform<any, any>,
]
  ? T
  : T extends Readonly<[infer A, ...infer B]>
  ? A extends Transform<any, infer C>
    ? B extends ReadonlyArray<Transform<any, any>>
      ? B[0] extends Transform<C, any>
        ? [A, ...PipeTransforms<B>]
        : [A, Transform<C, unknown>, ...any]
      : Unreachable
    : Unreachable
  : Unreachable

type PipeInitialType<T extends ReadonlyArray<Transform<any, any>>> =
  T[0] extends Transform<infer A, any> ? A : never

type PipeReturnType<T extends ReadonlyArray<Transform<any, any>>> =
  Last<T> extends Transform<any, infer A> ? A : never
