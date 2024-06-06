import { usePlayground } from "@modules/playground/hooks"
import { Fragment, useEffect } from "react"
import { useViewport } from "reactflow"

export default function Playground() {
  const { handleChangeViewport } = usePlayground()

  const viewport = useViewport()

  useEffect(() => {
    handleChangeViewport({ x: viewport.x, y: viewport.y, zoom: viewport.zoom })
  }, [viewport])

  return <Fragment></Fragment>
}
