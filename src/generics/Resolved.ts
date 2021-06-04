/**
 * Resolve a (nested) promise
 */
export type Resolved<T> = T extends Promise<infer A> ? A : Resolved<T>
