import { DocLayout } from "@containers/Docs/shared/components"
import { COMMAND_LINE } from "@modules/docs/domain/core/sections/guides"
import { Fragment } from "react"

export default function Command() {
  return (
    <DocLayout selected={COMMAND_LINE}>
      <Fragment></Fragment>
    </DocLayout>
  )
}
