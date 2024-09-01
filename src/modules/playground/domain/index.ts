import { CardProps } from "@containers/Home/components/DatasetPlayground/components"
import { Schema } from "@modules/dataset/domain/core"
import { Id } from "@modules/shared/domain/id"
import { Edge, Node, Viewport } from "reactflow"

interface BuildDefaultProps {
  schema: Schema
}

interface NodeBuildProps {
  schema: Schema
  posX: number
  posY: number
}

interface EdgeBuildProps {
  schemaFrom: string
  schemaTo: string
  fieldFrom: string
  fieldTo: string
}

export class DatasetNodeBuilder {
  static build({ schema, posX, posY }: NodeBuildProps): Node<CardProps> {
    return {
      id: schema.id,
      type: "custom",
      draggable: true,
      position: { x: posX, y: posY },
      data: { schema: schema },
    }
  }

  static default({ schema }: BuildDefaultProps): Node<CardProps> {
    return this.build({ schema: schema, posX: 100, posY: 200 })
  }
}

export class DatasetEdgeBuilder {
  static build({ schemaFrom, schemaTo, fieldFrom, fieldTo }: EdgeBuildProps): Edge {
    const id = Id.generate()

    return {
      id: id,
      source: schemaFrom,
      target: schemaTo,
      sourceHandle: fieldFrom,
      targetHandle: fieldTo,
      markerEnd: undefined,
      type: "smart",
      hidden: false,
      selected: false,
      focusable: true,
      zIndex: 1,
    }
  }

  static buildSelected(edge: Edge): Edge {
    return { ...edge, zIndex: 20, selected: true }
  }
}

export class PlaygroundZoom {
  static MAX_ZOOM = 100
  static MIN_ZOOM = 1
  static STEP_ZOOM = 0.1

  static zoomIn(zoom: number): number {
    return zoom + this.STEP_ZOOM
  }

  static zoomOut(zoom: number): number {
    return zoom - this.STEP_ZOOM
  }
}

export const INIT_VIEWPORT: Viewport = { x: 1, y: 1, zoom: 1 }
