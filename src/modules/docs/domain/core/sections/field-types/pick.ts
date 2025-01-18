import { DocSection, DocSubSection, SectionTitle } from "../../base"

export const PICK_SPECIFIC_COUNT: SectionTitle = {
  id: "pick-count",
  title: { es: "Cantidad de elementos específica", en: "Specific quantity of elements" },
}

export const ELEMENTS_RANGE: SectionTitle = {
  id: "elements-range",
  title: { es: "Rango de elementos", en: "Values range" },
}

export const CUSTOM_COUNT: SectionTitle = {
  id: "custom-count",
  title: { es: "Cantidad variable de elementos", en: "Variable elements amount" },
}

export class Pick extends DocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Pick", es: "Pick" },
      url: "pick",
      description: {
        es: "Aprende a utilizar el campo pick para seleccionar una cantidad de valores limitados para cada documento de forma tal que se genere un arreglo que no contenga valores repetidos",
        en: "Learn how to use the pick field to select a limited number of values for each document in such a way that an array is generated that does not contain repeated values",
      },
    })

    this.titles = [PICK_SPECIFIC_COUNT, ELEMENTS_RANGE, CUSTOM_COUNT]
  }
}
