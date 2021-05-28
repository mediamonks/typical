import { None } from './None'
import { Primitive } from './Primitive'

export type SomeUnknown = Exclude<Primitive, None> | Function | object
