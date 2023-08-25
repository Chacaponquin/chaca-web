import { MouseEvent } from "react"

export interface ClickPointProps {
  event: MouseEvent
  fieldId: string
}

export interface PointData {
  rect: DOMRect
  path: string
}
