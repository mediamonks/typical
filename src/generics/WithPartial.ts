/**
 * Make specific properties optional
 */
export type WithPartial<T, U extends keyof T> = {
  [P in Exclude<keyof T, U>]: T[P]
} &
  {
    [P in Extract<keyof T, U>]?: T[P]
  }

type A = WithPartial<{ foo: number }, 'foo'>
type B = WithPartial<{ foo?: number }, 'foo'>
type C = WithPartial<{ foo: number; bar: string }, 'foo'>
type D = WithPartial<{ foo: number; bar?: string }, 'foo'>
type E = WithPartial<{ foo?: number; bar: string }, 'foo'>
