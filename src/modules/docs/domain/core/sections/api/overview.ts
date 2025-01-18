import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const WHAT_API: SectionTitle = {
  id: "what-is-api",
  title: { es: "¿Qué es una API REST?", en: "What is a REST API?" },
}

export const WHY_USE: SectionTitle = {
  id: "why-use",
  title: { es: "¿Por qué deberías utilizar la API REST?", en: "Why should you use our REST API?" },
}

export const RATE_LIMIT: SectionTitle = {
  id: "rate-limit",
  title: { es: "Límite de peticiones", en: "Request limit" },
}

export const WHY_RATE_LIMIT: SectionTitle = {
  id: "why-rate-limit",
  title: { es: "¿Por qué existe un límite de peticiones?", en: "Why a request limit?" },
}

export const ERROR_MESSAGE: SectionTitle = {
  id: "error-messages",
  title: { es: "Mensajes de error", en: "Error messages" },
}

export const RESPONSE_CODES: SectionTitle = {
  id: "response-codes",
  title: { es: "Códigos de respuesta", en: "Response codes" },
}

export class OverviewSection extends DocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Overview", es: "Introducción" },
      url: "overview",
      description: {
        es: "Aprende sobre nuestra API REST y las rutas definidas para poder crear y transformar schemas y datasets solamente con una llamada HTTP sin necesidad de utilizar la librería de Chaca",
        en: "Learn about our REST API and the defined routes to be able to create and transform schemas and datasets with just one HTTP call without having to use the Chaca library.",
      },
    })
  }
}
