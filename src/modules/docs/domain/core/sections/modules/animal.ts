import { DocSection } from "../../base"
import { ModuleDocSubSection, ModuleSubSectionTitle } from "./module-section"

export const DOG: ModuleSubSectionTitle = { id: "dog", title: "dog" }

export const BEAR: ModuleSubSectionTitle = { id: "bear", title: "bear" }

export const BIRD: ModuleSubSectionTitle = { id: "bird", title: "bird" }

export const CAT: ModuleSubSectionTitle = { id: "cat", title: "cat" }

export const COW: ModuleSubSectionTitle = { id: "cow", title: "cow" }

export const FISH: ModuleSubSectionTitle = { id: "fish", title: "fish" }

export const CETACEAN: ModuleSubSectionTitle = { id: "cetacean", title: "cetacean" }

export const HORSE: ModuleSubSectionTitle = { id: "horse", title: "horse" }

export const CROCODILIA: ModuleSubSectionTitle = { id: "crocodilia", title: "crocodilia" }

export const INSECT: ModuleSubSectionTitle = { id: "insect", title: "insect" }

export const LION: ModuleSubSectionTitle = { id: "lion", title: "lion" }

export const RABBIT: ModuleSubSectionTitle = { id: "rabbit", title: "rabbit" }

export const RODENT: ModuleSubSectionTitle = { id: "rodent", title: "rodent" }

export const SNAKE: ModuleSubSectionTitle = { id: "snake", title: "snake" }

export const TYPE: ModuleSubSectionTitle = { id: "type", title: "type" }

export class Animal extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Animal", es: "Animal" },
      url: "animal",
      apiId: "animal",
      titles: [
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
      ],
    })
  }
}
