import ReactFlow, { Background } from "reactflow"
import { DatasetCard, DatasetsButtons } from "./components"
import { useTheme } from "@modules/app/modules/theme/hooks"
import { THEME } from "@modules/app/modules/theme/constants"
import { PlaygroundZoom } from "@containers/Home/domain"
import { useSchemas } from "@modules/schemas/hooks"

import "reactflow/dist/style.css"

import { usePlayground } from "@modules/playground/hooks"

const nodeTypes = {
  custom: DatasetCard,
}

export default function DatasetPlayground() {
  const { edges, nodes, onEdgesChange, onNodesChange, onConnect } = usePlayground()
  const { theme } = useTheme()
  const { schemas } = useSchemas()

  const color = theme === THEME.DARK ? "#ffffff" : "#000000"

  return (
    <section className="w-full h-full flex flex-col dark:bg-scale-2 bg-scale-12">
      {schemas.length && (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          nodesConnectable={false}
          maxZoom={PlaygroundZoom.MAX_ZOOM}
          minZoom={PlaygroundZoom.MIN_ZOOM}
        >
          <DatasetsButtons />
          <Background color={color} />
        </ReactFlow>
      )}
    </section>
  )
}
