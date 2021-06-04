/**
 * Array except first element
 */
export type Tail<T extends ReadonlyArray<any>> = T extends readonly [any]
  ? []
  : T extends readonly [any, ...infer A]
  ? A
  : Extract<T, ReadonlyArray<any>>
