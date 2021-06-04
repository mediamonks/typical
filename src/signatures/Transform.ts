/**
 * Function that transforms a value into something else
 */
type Transform<T, U = T> = (value: T) => U
