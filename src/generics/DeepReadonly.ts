/**
 * Recursively make a type readonly (experimental)
 */
export type DeepReadonly<T> = T extends Readonly<[infer A]>
  ? Readonly<[DeepReadonly<A>]>
  : T extends Readonly<[infer A, ...infer B]>
  ? Readonly<[DeepReadonly<A>, ...DeepReadonly<B>]>
  : T extends ReadonlyArray<infer A>
  ? ReadonlyArray<DeepReadonly<A>>
  : T extends object
  ? Readonly<
      {
        [P in keyof T]: DeepReadonly<T[P]>
      }
    >
  : T
