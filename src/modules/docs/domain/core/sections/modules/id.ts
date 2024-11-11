import { DocSection, SectionTitle } from "../../base"
import { ModuleDocSubSection } from "./module-section"

export const UUID: SectionTitle = { id: "uuid", title: "uuid" }

export const MONGODB_ID: SectionTitle = { id: "mongodb_id", title: "mongodbId" }

export const NANOID: SectionTitle = { id: "nanoid", title: "nanoid" }

export const ULID: SectionTitle = { id: "ulid", title: "ulid" }

export const CUID: SectionTitle = { id: "cuid", title: "cuid" }

export class Id extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({ parent: parent, title: "Id", url: "id", apiId: "id" })

    this.titles = [UUID, MONGODB_ID, NANOID, ULID, CUID]
  }
}
