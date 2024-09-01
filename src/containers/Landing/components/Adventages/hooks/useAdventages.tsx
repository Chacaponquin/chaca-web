import { Adventage } from "../interfaces"
import { useTranslation } from "@modules/app/modules/language/hooks"

export default function useAdventages() {
  const {
    FIRST_DESCRIPTION,
    FIRST_TITLE,
    FOURTH_DESCRIPTION,
    FOURTH_TITLE,
    SECOND_DESCRIPTION,
    SECOND_TITLE,
    THIRD_TITLE,
    THRID_DESCRIPTION,
  } = useTranslation({
    FIRST_TITLE: {
      en: "256+ mock data functions",
      es: "Más de 256 funciones de mock data",
    },
    FIRST_DESCRIPTION: {
      en: "Use the data generating functions organized by categories to define your dataset",
      es: "Utiliza las funciones generadoras de datos ordeneadas por categorías para definir tus dataset",
    },
    SECOND_TITLE: { en: "A NodeJS package", es: "Una librería NodeJS" },
    SECOND_DESCRIPTION: {
      en: "If you want to integrate the creation of your data into a NodeJS application, you can download our library from npm and create it in a simpler way",
      es: "Si deseas integrar la creación de tus datos en una aplicación NodeJS puedes descargar nuestra librería desde npm y realizar la creación de forma más simple",
    },
    THIRD_TITLE: { en: "REST API", es: "API REST" },
    THRID_DESCRIPTION: {
      en: "Create your data only with a simple HTTP request to our API without having to download the library",
      es: "Crea tus datos solamente con una simple petición HTTP a nuestra API sin necesidad de descargar la librería",
    },
    FOURTH_TITLE: { en: "An online tool", es: "Una herramienta online" },
    FOURTH_DESCRIPTION: {
      en: "If you do not want to create your data with Javascript you can use our online tool to have a more realistic visualization of the process",
      es: "Si no deseas crear tus datos con Javascript puedes utilizar nuestra herramienta online para tener una visualización másreal del proceso",
    },
  })

  const CARDS: Array<Adventage> = [
    {
      title: FIRST_TITLE,
      content: FIRST_DESCRIPTION,
      icon: "📚",
    },
    {
      title: SECOND_TITLE,
      content: SECOND_DESCRIPTION,
      icon: "📦",
    },
    {
      title: THIRD_TITLE,
      content: THRID_DESCRIPTION,
      icon: "🌐",
    },
    {
      title: FOURTH_TITLE,
      content: FOURTH_DESCRIPTION,
      icon: "🪛",
    },
  ]

  return { CARDS }
}
