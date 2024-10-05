import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const UUID: SectionTitle = { id: "uuid", title: "uuid" }

export const MONGODB_ID: SectionTitle = { id: "mongodb_id", title: "mongodbId" }

export class Id extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Id", url: "id", apiId: "id" })

    this.titles = [UUID, MONGODB_ID]
  }
}
