/**
 * Get a union of readonly property keys (experimental)
 */
export type ReadonlyKey<T> = {
  -readonly [P in keyof T]: T[P]
}

interface TestObject {
  plain: number
  readonly readonly: string
}

type A = ReadonlyKey<TestObject>
