import { Argument } from "@modules/schemas/domain/argument"

export interface ApiFileOptionResponse {
  fileType: string
  arguments: Argument[]
  title: string
}
