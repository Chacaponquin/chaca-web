import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const WHAT_API: SectionTitle = { id: "what-is-api", title: "¿Qué es una API REST?" }

export const WHY_USE: SectionTitle = {
  id: "why-use",
  title: "¿Por qué deberías utilizar la API REST?",
}

export const RATE_LIMIT: SectionTitle = { id: "rate-limit", title: "Límite de peticiones" }

export const WHY_RATE_LIMIT: SectionTitle = {
  id: "why-rate-limit",
  title: "¿Por qué existe un límite de peticiones?",
}

export const ERROR_MESSAGE: SectionTitle = { id: "error-messages", title: "Mensajes de error" }

export const RESPONSE_CODES: SectionTitle = { id: "response-codes", title: "Códigos de respuesta" }

export class OverviewSection extends DocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: { en: "Overview", es: "Introducción" }, url: "overview" })
  }
}
