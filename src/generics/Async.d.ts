import type { Signature } from '../static-types/Signature'
import { Promised } from './Promised'

/**
 * Make any function async
 */
export type Async<T extends Signature> = (
  ...params: Parameters<T>
) => Promised<ReturnType<T>>
