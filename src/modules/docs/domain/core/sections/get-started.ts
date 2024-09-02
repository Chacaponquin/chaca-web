import { DocSection, DocSubSection } from "../base"

class GetStartedSection extends DocSection {
  constructor() {
    super({ title: "Guides", url: "guides" })
  }
}

export const SECTION = new GetStartedSection()

class IntroductionSection extends DocSubSection {
  constructor() {
    super({ parent: SECTION, title: "Introduction", url: "introduction" })
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

export const INTRODUCTION = new IntroductionSection()
export const COMMAND_LINE = new CommandLineSection()
export const USAGE = new UsageSection()

SECTION.push([INTRODUCTION, COMMAND_LINE, USAGE])
