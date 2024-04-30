import { useContext, useEffect } from "react"
import { DatasetsContext } from "../context"
import { Dataset } from "../domain/tree"
import { DatasetConnection } from "../interfaces/dataset-connect"
import { v4 as uuid } from "uuid"
import { MarkerType } from "reactflow"

interface AddNodeProps {
  handleCreateDataset(dataset: Dataset): void
  dataset: Dataset
}

export default function usePlayground() {
  useEffect(() => {
    const el = document.querySelector("[href='https://reactflow.dev']")
    if (el) {
      el.classList.add("hidden")
    }
  }, [])

  const {
    handleAddNode,
    handleAddEdge,
    edges,
    nodes,
    onEdgesChange,
    onNodesChange,
    onConnect,
    handleCleanEdges,
    handleDeleteNode,
  } = useContext(DatasetsContext)

  function handleAddDatasetNode({ dataset, handleCreateDataset }: AddNodeProps) {
    handleAddNode({
      id: dataset.id,
      type: "custom",
      position: { x: 100, y: 200 },
      data: { dataset: dataset, handleCreateDataset: handleCreateDataset },
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

  return {
    handleAddDatasetNode,
    edges,
    nodes,
    onEdgesChange,
    onNodesChange,
    onConnect,
    updateConnections,
    handleDeleteDatasetNode,
  }
}
