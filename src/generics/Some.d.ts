import { None } from '../static-types/None'
import { SomeUnknown } from '../static-types/SomeUnknown'

/**
 * A type except None
 */
export type Some<T = SomeUnknown> = Exclude<T, None>
