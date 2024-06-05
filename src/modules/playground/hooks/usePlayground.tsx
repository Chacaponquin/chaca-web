import { useContext, useEffect } from "react"
import { Dataset } from "../../datasets/domain/dataset"
import { DatasetConnection } from "../../datasets/interfaces/dataset-connect"
import { getRectOfNodes, getViewportForBounds } from "reactflow"
import { toPng, toSvg } from "html-to-image"
import { ImageFormats } from "@modules/config/interfaces"
import { PlaygroundContext } from "../context"
import { DatasetEdgeBuilder } from "../domain"

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

  function handleCleanNodes() {
    handleSetNodes([])
  }

  function handleCleanEdges() {
    handleSetEdges([])
  }

  function handleDeleteDatasetNode(id: string): void {
    handleDeleteNode(id)
  }

  function updateConnections(datasets: Dataset[]): void {
    const connections: DatasetConnection[] = getDatasetsConnections(datasets)

    handleCleanEdges()

    for (const con of connections) {
      for (const target of con.to) {
        handleAddEdge(
          DatasetEdgeBuilder.build({
            datasetFrom: con.fromDataset,
            datasetTo: con.targetDataset,
            fieldFrom: con.from,
            fieldTo: target,
          }),
        )
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
  }
}
