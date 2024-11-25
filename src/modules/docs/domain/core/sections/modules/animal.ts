import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const DOG: SectionTitle = { id: "dog", title: "dog" }

export const BEAR: SectionTitle = { id: "bear", title: "bear" }

export const BIRD: SectionTitle = { id: "bird", title: "bird" }

export const CAT: SectionTitle = { id: "cat", title: "cat" }

export const COW: SectionTitle = { id: "cow", title: "cow" }

export const FISH: SectionTitle = { id: "fish", title: "fish" }

export const CETACEAN: SectionTitle = { id: "cetacean", title: "cetacean" }

export const HORSE: SectionTitle = { id: "horse", title: "horse" }

export const CROCODILIA: SectionTitle = { id: "crocodilia", title: "crocodilia" }

export const INSECT: SectionTitle = { id: "insect", title: "insect" }

export const LION: SectionTitle = { id: "lion", title: "lion" }

export const RABBIT: SectionTitle = { id: "rabbit", title: "rabbit" }

export const RODENT: SectionTitle = { id: "rodent", title: "rodent" }

export const SNAKE: SectionTitle = { id: "snake", title: "snake" }

export const TYPE: SectionTitle = { id: "type", title: "type" }

export class Animal extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Animal", url: "animal", apiId: "animal" })

    this.titles = [
      BEAR,
      CAT,
      FISH,
      COW,
      HORSE,
      CROCODILIA,
      INSECT,
      LION,
      RABBIT,
      RODENT,
      SNAKE,
      TYPE,
      BIRD,
      DOG,
    ]
  }
}
