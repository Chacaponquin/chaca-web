import { useContext, useEffect } from "react"
import { DatasetConnection } from "../../dataset/domain/core/dataset-connect"
import { Edge, getRectOfNodes, getViewportForBounds } from "reactflow"
import { toPng, toSvg } from "html-to-image"
import { ImageFormats } from "@modules/config/domain/core"
import { PlaygroundContext } from "../context"
import { DatasetEdgeBuilder } from "../domain"
import { Schema } from "@modules/dataset/domain/core/schema"

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
    handleChangeNodes,
    handleDeleteNode,
    handleSetEdges,
    handleAddEdge,
    handleSetNodes,
    nodes,
    edges,
    handleChangeEdges,
    onConnect,
    onEdgesChange,
    onNodesChange,
    handleChangeViewport,
    viewport,
  } = useContext(PlaygroundContext)

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

  function handleClickEdge(edge: Edge) {
    handleChangeEdges((prev) => {
      return prev.map((e) => {
        if (e.id === edge.id) {
          return DatasetEdgeBuilder.buildSelected(e)
        }

        return e
      })
    })
  }

  function handleCleanNodes() {
    handleSetNodes([])
  }

  function handleCleanEdges() {
    handleSetEdges([])
  }

  function handleDeleteDatasetNode(id: string): void {
    handleDeleteNode(id)
  }

  function updateConnections(dataset: Schema[]): void {
    const connections: DatasetConnection[] = getDatasetsConnections(dataset)

    handleCleanEdges()

    for (const con of connections) {
      for (const target of con.to) {
        handleAddEdge(
          DatasetEdgeBuilder.build({
            schemaFrom: con.fromDataset,
            schemaTo: con.targetDataset,
            fieldFrom: con.from,
            fieldTo: target,
          }),
        )
      }
    }
  }

  function getDatasetsConnections(dataset: Schema[]): DatasetConnection[] {
    let allConnections = [] as DatasetConnection[]

    for (const schema of dataset) {
      const connections: DatasetConnection[] = []
      const refFields = schema.refFields()

      for (const s of dataset) {
        if (schema !== s) {
          refFields.forEach((f) => {
            const fieldToRef = f.ref.at(-1)
            const datasetRef = f.ref[0]

            const saveConnection: DatasetConnection = {
              from: f.id,
              to: [],
              fromDataset: schema.id,
              targetDataset: datasetRef,
            }

            if (fieldToRef) {
              const found = s.findFieldById(fieldToRef)

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
    handleChangeNodes,
    handleSetNodes,
    handleChangeEdges,
    handleCleanEdges,
    handleCleanNodes,
    viewport,
    handleChangeViewport,
    handleClickEdge,
  }
}
