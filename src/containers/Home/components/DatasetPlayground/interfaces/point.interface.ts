import { MouseEvent } from "react"

export interface ClickPointProps {
  event: MouseEvent
  fieldId: string
}

export interface Point {
  rect: DOMRect
  path: string
}

export interface Coords {
  x: number
  y: number
}
