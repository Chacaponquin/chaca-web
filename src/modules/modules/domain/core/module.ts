import { Argument } from "./module-argument"

export interface Module {
  name: string
  arguments: Argument[]
  id: string
}
