import { CardProps } from "@containers/Home/components/DatasetPlayground/components"
import { Dataset } from "@modules/datasets/domain/tree"
import { Edge, MarkerType, Node } from "reactflow"
import { v4 as uuid } from "uuid"

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
    return {
      id: uuid(),
      source: datasetFrom,
      target: datasetTo,
      sourceHandle: fieldFrom,
      targetHandle: fieldTo,
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
      type: "smoothstep",
      hidden: false,
      pathOptions: {},
    }
  }
}
