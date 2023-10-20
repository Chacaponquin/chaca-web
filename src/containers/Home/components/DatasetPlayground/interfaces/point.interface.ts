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

export interface ArrowCoords {
  direction: ArrowDirection
  coords: Array<Coords>
  to: DOMRect
  id: string
}

export type ArrowDirection =
  | "bottom-to-top-by-right"
  | "bootom-to-top-by-left"
  | "top-to-bottom-by-left"
  | "top-to-bottom-by-right"
  | "right-to-left"
  | "left-to-right"
