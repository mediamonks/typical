/**
 * Wrap any type in a flat promise
 */
export type Promised<T> = T extends Promise<infer A> ? Promised<A> : Promise<T>
