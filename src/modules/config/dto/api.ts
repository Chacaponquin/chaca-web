import { Argument } from "@modules/schemas/interfaces/argument"

export interface ApiFileOptionResponse {
  fileType: string
  arguments: Array<Argument>
  title: string
}
