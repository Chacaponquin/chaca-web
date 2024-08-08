import { DocSection, DocSubSection } from "../base"

class GuidesSection extends DocSection {
  constructor() {
    super({ title: "Guides", url: "guides" })
  }
}

export const SECTION = new GuidesSection()

class GettingStartedSection extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Getting Started", url: "getting-started" })
  }
}

class CommandLineSection extends DocSubSection {
  constructor() {
    super({ title: "Command Line", parent: SECTION, url: "command-line" })
  }
}

class UsageSection extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Usage", url: "usage" })
  }
}

export const GETTING_STARTED = new GettingStartedSection()
export const COMMAND_LINE = new CommandLineSection()
export const USAGE = new UsageSection()

SECTION.push([GETTING_STARTED, COMMAND_LINE, USAGE])
