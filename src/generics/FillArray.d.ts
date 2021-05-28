export type FillArray<T extends ReadonlyArray<unknown>, V> =
  T extends ReadonlyArray<never>
    ? T
    : T extends [any]
    ? [V]
    : T extends readonly [any]
    ? readonly [V]
    : T extends [any, ...infer A]
    ? [V, ...FillArray<A, V>]
    : T extends readonly [any, ...infer A]
    ? readonly [V, ...FillArray<A, V>]
    : T extends Array<any>
    ? Array<V>
    : ReadonlyArray<V>

// type A = FillArray<[1], 'foo'>
// type B = FillArray<Readonly<[1]>, 'foo'>
// type C = FillArray<[1, 2], 'foo'>
// type D = FillArray<Readonly<[1, 2]>, 'foo'>
// type E = FillArray<Array<number>, 'foo'>
// type F = FillArray<ReadonlyArray<number>, 'foo'>
// type G = FillArray<[], 'foo'>
// type H = FillArray<Readonly<[]>, 'foo'>
