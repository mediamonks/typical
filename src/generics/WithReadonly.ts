/**
 * Make specific properties readonly (experimental)
 */
export type WithReadonly<T, U extends keyof T> = {
  [P in keyof T]: T[P]
} &
  {
    readonly [P in Extract<keyof T, U>]: T[P]
  }

type A = WithReadonly<TestObject, 'required'>
type B = WithReadonly<TestObject, 'optional'>
type C = WithReadonly<TestObject, 'readonlyRequired'>
type D = WithReadonly<TestObject, 'readonlyOptional'>

interface TestObject {
  required: string
  optional?: string
  readonly readonlyRequired: string
  readonly readonlyOptional: string | undefined
}
