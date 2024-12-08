import { DocSection } from "../../base"
import { ModuleDocSubSection, ModuleSubSectionTitle } from "./module-section"

export const UUID: ModuleSubSectionTitle = { id: "uuid", title: "uuid" }

export const MONGODB_ID: ModuleSubSectionTitle = { id: "mongodb_id", title: "mongodbId" }

export const NANOID: ModuleSubSectionTitle = { id: "nanoid", title: "nanoid" }

export const ULID: ModuleSubSectionTitle = { id: "ulid", title: "ulid" }

export const CUID: ModuleSubSectionTitle = { id: "cuid", title: "cuid" }

export class Id extends ModuleDocSubSection {
  constructor(parent: DocSection) {
    super({
      parent: parent,
      title: { en: "Id", es: "Id" },
      url: "id",
      apiId: "id",
      titles: [UUID, MONGODB_ID, NANOID, ULID, CUID],
    })
  }
}
