import { DocSection, DocSubSection } from "../../base"

export class UtilsSection extends DocSubSection {
  private readonly replaceSymbolsId = "replace-symbols"

  readonly replaceSymbolsUrl = this.buildUrl(this.replaceSymbolsId)

  constructor(parent: DocSection) {
    super({ parent: parent, title: "Utils", url: "utils" })
  }
}
