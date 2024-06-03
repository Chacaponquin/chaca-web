import { Lock, Minus, Plus, ScreenFit, Unlock } from "@modules/app/modules/icon/components"
import { IconProps } from "@modules/app/modules/icon/interfaces"
import { PlaygroundZoom } from "@modules/playground/domain"
import { usePlayground } from "@modules/playground/hooks"
import { useState } from "react"
import { useReactFlow, useViewport } from "reactflow"

interface ButtonItem {
  icon: React.FC<IconProps>
  active: boolean
  message: string
  onClick(): void
  disbled: boolean
}

export default function useButtons() {
  const { x, y, zoom } = useViewport()
  const { setViewport, fitView } = useReactFlow()
  const { handleDisableAllNodes, handleEnableAllNodes } = usePlayground()

  const [lock, setLock] = useState(false)

  function handleZoomIn() {
    setViewport({ x: x, y: y, zoom: PlaygroundZoom.zoomIn(zoom) })
  }

  function handleZoomOut() {
    setViewport({ x: x, y: y, zoom: PlaygroundZoom.zoomOut(zoom) })
  }

  function handleChangeLock() {
    if (lock) {
      handleEnableAllNodes()
      setLock(false)
    } else {
      handleDisableAllNodes()
      setLock(true)
    }
  }

  function handleFitScreen() {
    fitView({})
  }

  const buttons: ButtonItem[] = [
    {
      icon: lock ? Lock : Unlock,
      active: lock,
      disbled: false,
      onClick: handleChangeLock,
      message: "Lock",
    },
    { icon: Plus, active: false, message: "Zoom in", onClick: handleZoomIn, disbled: false },
    { icon: Minus, active: false, onClick: handleZoomOut, message: "Zoom out", disbled: false },
    {
      icon: ScreenFit,
      onClick: handleFitScreen,
      disbled: false,
      active: false,
      message: "Fit Screen",
    },
  ]

  return { buttons }
}
