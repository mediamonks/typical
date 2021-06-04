import { Writable } from './Writable'

/**
 * Recursively make a type writable (experimental)
 */
export type DeepWritable<T> = T extends Readonly<[infer A]>
  ? [DeepWritable<A>]
  : T extends Readonly<[infer A, ...infer B]>
  ? [DeepWritable<A>, ...DeepWritable<B>]
  : T extends ReadonlyArray<infer A>
  ? Array<DeepWritable<A>>
  : T extends object
  ? Writable<
      {
        [P in keyof T]: DeepWritable<T[P]>
      }
    >
  : T
