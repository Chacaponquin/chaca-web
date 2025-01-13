import { Param } from "@markdown/components/Markdown/components/Params/domain"

export function FORMAT(def: string): Param {
  return {
    name: "format",
    description: { es: "Formato del color a generar", en: "Color format" },
    params: [],
    required: false,
    types: ["'css'", "'binary'", "'hex'"],
    default: `'${def}'`,
  }
}
