import { DocSection } from "../../base"
import { CommandLineSection } from "./command-line"
import { IntroductionSection } from "./introduction"
import { UsageSection } from "./usage"
import { UtilsSection } from "./utils"

class GetStartedSection extends DocSection {
  constructor() {
    super({ title: "Guides", url: "guides" })
  }
}

export const SECTION = new GetStartedSection()

export const INTRODUCTION = new IntroductionSection(SECTION)
export const COMMAND_LINE = new CommandLineSection(SECTION)
export const USAGE = new UsageSection(SECTION)
export const UTILS = new UtilsSection(SECTION)

SECTION.push([INTRODUCTION, USAGE, COMMAND_LINE, UTILS])
