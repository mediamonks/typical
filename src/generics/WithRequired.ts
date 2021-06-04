/**
 * Make specific properties required (experimental)
 */
export type WithRequired<T, U extends keyof T> = {
  [P in Exclude<keyof T, U>]: T[P]
} &
  {
    [P in Extract<keyof T, U>]-?: Exclude<T[P], undefined>
  }

type A = WithRequired<{ foo: number }, 'foo'>
type B = WithRequired<{ foo?: number }, 'foo'>
type C = WithRequired<{ foo: number; bar: string }, 'foo'>
type D = WithRequired<{ foo: number; bar?: string }, 'foo'>
type E = WithRequired<{ foo?: number; bar: string }, 'foo'>
