import ReactFlow, { Background } from "reactflow"
import { DatasetCard, DatasetsButtons, Edge, Loader, Playground } from "./components"
import { useTheme } from "@modules/app/modules/theme/hooks"
import { THEME } from "@modules/app/modules/theme/constants"
import { usePlayground } from "@modules/playground/hooks"
import { APP_COLORS } from "@modules/app/constants"

import "reactflow/dist/style.css"

const nodeTypes = {
  custom: DatasetCard,
}

const edgeTypes = {
  smart: Edge,
}

interface Props {
  loading: boolean
}

export default function DatasetPlayground({ loading }: Props) {
  const { edges, nodes, onEdgesChange, onNodesChange, onConnect, handleClickEdge } = usePlayground()
  const { theme } = useTheme()

  const color = theme === THEME.DARK ? APP_COLORS.PLAYGROUND.DARK : APP_COLORS.PLAYGROUND.LIGHT

  return (
    <section className="w-full h-full flex flex-col dark:bg-scale-2 bg-gray-100">
      {loading && <Loader />}

      {!loading && (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          nodesConnectable={false}
          fitView={true}
          edgeTypes={edgeTypes}
          onEdgeClick={(_, edge) => handleClickEdge(edge)}
        >
          <Playground />
          <DatasetsButtons />
          <Background color={color} />
        </ReactFlow>
      )}
    </section>
  )
}
