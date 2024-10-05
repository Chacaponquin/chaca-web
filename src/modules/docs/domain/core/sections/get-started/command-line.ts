import { DocSection, DocSubSection } from "../../base"

export class CommandLineSection extends DocSubSection {
  constructor(parent: DocSection) {
    super({ title: "Command Line", parent: parent, url: "command-line" })
  }
}
