import { Argument } from "@modules/schemas/domain/core/argument"

export interface ApiFileOptionResponse {
  fileType: string
  arguments: Argument[]
  title: string
}
