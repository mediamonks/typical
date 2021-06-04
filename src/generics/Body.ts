/**
 * Array except last element
 */
export type Body<T extends ReadonlyArray<any>> = T extends readonly [any]
  ? []
  : T extends readonly [...infer A, any]
  ? A
  : Extract<T, ReadonlyArray<any>>
