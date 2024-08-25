import { CardProps } from "@containers/Home/components/DatasetPlayground/components"
import { Dataset } from "@modules/datasets/domain/core"
import { Id } from "@modules/shared/domain/id"
import { Edge, MarkerType, Node, Viewport } from "reactflow"

interface BuildDefaultProps {
  dataset: Dataset
}

interface NodeBuildProps {
  dataset: Dataset
  posX: number
  posY: number
}

interface EdgeBuildProps {
  datasetFrom: string
  datasetTo: string
  fieldFrom: string
  fieldTo: string
}

export class DatasetNodeBuilder {
  static build({ dataset, posX, posY }: NodeBuildProps): Node<CardProps> {
    return {
      id: dataset.id,
      type: "custom",
      draggable: true,
      position: { x: posX, y: posY },
      data: { dataset: dataset },
    }
  }

  static default({ dataset }: BuildDefaultProps): Node<CardProps> {
    return this.build({ dataset: dataset, posX: 100, posY: 200 })
  }
}

export class DatasetEdgeBuilder {
  static build({ datasetFrom, datasetTo, fieldFrom, fieldTo }: EdgeBuildProps): Edge {
    const id = Id.generate()

    return {
      id: id,
      source: datasetFrom,
      target: datasetTo,
      sourceHandle: fieldFrom,
      targetHandle: fieldTo,
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
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
