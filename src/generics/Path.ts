export type Path<T> = T extends ReadonlyArray<infer A>
  ? [number, ...Path<A>]
  : T extends object
  ? {
      [P in keyof T]: [P, ...Path<T[P]>]
    }[keyof T]
  : []

type X = Path<{
  foo: number
  bar: string
  baz: {
    a: string
    b: [
      number,
      boolean,
      {
        x: number
      },
    ]
  }
}>
