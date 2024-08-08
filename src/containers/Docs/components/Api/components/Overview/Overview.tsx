import { DocLayout } from "@containers/Docs/shared/components"
import { OVERVIEW } from "@modules/docs/domain/core/sections/api"
import { Fragment } from "react"

export default function Overview() {
  return (
    <DocLayout selected={OVERVIEW}>
      <Fragment></Fragment>
    </DocLayout>
  )
}
