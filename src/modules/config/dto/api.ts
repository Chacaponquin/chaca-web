import { Argument } from "@modules/schemas/interfaces/argument.interface"

export interface ApiFileOptionResponse {
  fileType: string
  arguments: Array<Argument>
  title: string
}
