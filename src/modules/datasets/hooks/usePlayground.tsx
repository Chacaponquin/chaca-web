import { useContext } from "react"
import { DatasetsContext } from "../context"
import { Dataset } from "../domain/tree"

interface AddNodeProps {
  handleCreateDataset(dataset: Dataset): void
  dataset: Dataset
}

export default function usePlayground() {
  const { handleAddNode, edges, nodes, onEdgesChange, onNodesChange, onConnect } =
    useContext(DatasetsContext)

  function handleAddDatasetNode(props: AddNodeProps) {
    handleAddNode({
      id: props.dataset.id,
      type: "custom",
      position: { x: 100, y: 200 },
      data: props,
    })
  }

  return { handleAddDatasetNode, edges, nodes, onEdgesChange, onNodesChange, onConnect }
}
