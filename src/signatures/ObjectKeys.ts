/**
 * Strict signature for Object#keys
 */
export type ObjectKeys = <T>(value: T) => Array<keyof T>
