import { Param } from "@markdown/components/Markdown/components/Params/domain"

export function FORMAT(def: string): Param {
  return {
    name: "format",
    description: "Formato del color a generar",
    params: [],
    required: false,
    types: ["'css'", "'binary'", "'hex'"],
    default: `'${def}'`,
  }
}
