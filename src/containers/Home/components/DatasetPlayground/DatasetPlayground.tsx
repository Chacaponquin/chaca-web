import ReactFlow, { MiniMap, Controls, Background } from "reactflow"
import { DatasetCard, DatasetsButtons } from "./components"

import "reactflow/dist/style.css"
import { usePlayground } from "@modules/datasets/hooks"

interface Props {
  handleCreateAllDatasets: () => void
  handleAddDataset: () => void
}

const nodeTypes = {
  custom: DatasetCard,
}

export default function DatasetPlayground({ handleAddDataset, handleCreateAllDatasets }: Props) {
  const { edges, nodes, onEdgesChange, onNodesChange, onConnect } = usePlayground()

  return (
    <section className="w-full h-full flex flex-col dark:bg-scale-2 bg-scale-12">
      <DatasetsButtons
        handleAddDataset={handleAddDataset}
        handleCreateAllDatasets={handleCreateAllDatasets}
      />

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>

      {/* 
      <Playground>
        {showDatasets.map((d, index) => (
          <DatasetCard
            handleCreateSelectDataset={handleCreateSelectDataset}
            index={index}
            key={d.dataset.id}
            positionX={d.positionX}
            positionY={d.positionY}
            handleClickPoint={handleClickPoint}
            dataset={d.dataset}
            selectFieldPoint={selectFieldPoint}
            handleUpdateLines={handleUpdateLines}
            handleChangeDatasetCardPosition={handleChangeDatasetCardPosition}
          />
        ))}

        <ArrowSvg points={points} />
      </Playground>*/}
    </section>
  )
}
