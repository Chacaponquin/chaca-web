import { useContext, useEffect } from "react"
import { DatasetsContext } from "../context"
import { Dataset } from "../domain/tree"
import { DatasetConnection } from "../interfaces/dataset-connect"
import { v4 as uuid } from "uuid"
import { getRectOfNodes, getViewportForBounds, MarkerType } from "reactflow"
import { toPng, toSvg } from "html-to-image"
import { ImageFormats } from "@modules/config/interfaces"

interface GenerateImageProps {
  success(img: string): void
  format: ImageFormats
}

export default function usePlayground() {
  useEffect(() => {
    const el = document.querySelector("[href='https://reactflow.dev']")

    if (el) {
      el.classList.add("hidden")
    }
  }, [])

  const {
    handleAddEdge,
    edges,
    nodes,
    onEdgesChange,
    onNodesChange,
    onConnect,
    handleDeleteNode,
    handleAddDatasetNode,
    handleCleanEdges,
    handleChangeNodes,
  } = useContext(DatasetsContext)

  function handleDisableAllNodes() {
    handleChangeNodes((prev) => {
      return prev.map((n) => {
        return { ...n, draggable: false }
      })
    })
  }

  function handleEnableAllNodes() {
    handleChangeNodes((prev) => {
      return prev.map((n) => {
        return { ...n, draggable: true }
      })
    })
  }

  function handleDeleteDatasetNode(id: string): void {
    handleDeleteNode(id)
  }

  function updateConnections(datasets: Dataset[]): void {
    const connections: DatasetConnection[] = getDatasetsConnections(datasets)

    handleCleanEdges()

    for (const con of connections) {
      for (const target of con.to) {
        handleAddEdge({
          id: uuid(),
          source: con.fromDataset,
          target: con.targetDataset,
          sourceHandle: con.from,
          targetHandle: target,
          markerEnd: {
            type: MarkerType.ArrowClosed,
          },
          type: "smoothstep",
          hidden: false,
          pathOptions: {},
        })
      }
    }
  }

  function getDatasetsConnections(datasets: Dataset[]): DatasetConnection[] {
    let allConnections = [] as DatasetConnection[]

    for (const dataset of datasets) {
      const connections: DatasetConnection[] = []
      const refFields = dataset.refFields()

      for (const dat of datasets) {
        if (dat !== dataset) {
          refFields.forEach((f) => {
            const fieldToRef = f.ref.at(-1)
            const datasetRef = f.ref[0]

            const saveConnection: DatasetConnection = {
              from: f.id,
              to: [],
              fromDataset: dataset.id,
              targetDataset: datasetRef,
            }

            if (fieldToRef) {
              const found = dat.findFieldById(fieldToRef)

              if (found) {
                saveConnection.to.push(fieldToRef)
              }
            }

            connections.push(saveConnection)
          })
        }
      }

      allConnections = [...allConnections, ...connections]
    }

    return allConnections
  }

  function handleGenerateImage({ success, format }: GenerateImageProps) {
    const width = 1024
    const height = 768

    const nodesBounds = getRectOfNodes(nodes)
    const { x, y, zoom: scale } = getViewportForBounds(nodesBounds, width, height, 0.5, 2)

    const content = document.querySelector(".react-flow__viewport") as HTMLElement

    const config = {
      backgroundColor: "transparent",
      width: width,
      height: height,
      style: {
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
      },
    }

    if (content) {
      if (format === "png") {
        toPng(content, config).then((image) => {
          success(image)
        })
      } else if (format === "svg") {
        toSvg(content, config).then((image) => {
          success(image)
        })
      }
    }
  }

  return {
    handleAddDatasetNode,
    edges,
    nodes,
    onEdgesChange,
    onNodesChange,
    onConnect,
    updateConnections,
    handleDeleteDatasetNode,
    handleDisableAllNodes,
    handleEnableAllNodes,
    handleGenerateImage,
  }
}
