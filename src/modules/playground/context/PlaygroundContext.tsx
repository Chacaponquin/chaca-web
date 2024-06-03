import { CardProps } from "@containers/Home/components/DatasetPlayground/components"
import { createContext, useCallback } from "react"
import {
  addEdge,
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  useEdgesState,
  useNodesState,
} from "reactflow"

interface Props {
  nodes: Node<CardProps>[]
  edges: Edge[]
  onNodesChange(changes: NodeChange[]): void
  onEdgesChange(changes: EdgeChange[]): void
  onConnect(param: Connection): void
  handleAddEdge(edge: Edge): void
  handleDeleteNode(id: string): void
  handleChangeEdges(func: (edges: Edge[]) => Edge[]): void
  handleChangeNodes(fun: (prev: Node<CardProps>[]) => Node<CardProps>[]): void
  handleSetNodes(nodes: Node<CardProps>[]): void
  handleSetEdges(array: Edge[]): void
}

export const PlaygroundContext = createContext<Props>({
  nodes: [] as Node<CardProps>[],
  edges: [] as Edge[],
} as Props)

export function PlaygroundProvider({ children }: { children: React.ReactNode }) {
  const [nodes, setNodes, onNodesChange] = useNodesState<CardProps>([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  function handleSetNodes(array: Node<CardProps>[]): void {
    setNodes(array)
  }

  function handleSetEdges(array: Edge[]): void {
    setEdges(array)
  }

  function handleChangeEdges(func: (edges: Edge[]) => Edge[]) {
    setEdges(func)
  }

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge(params, eds))
    },
    [setEdges],
  )

  function handleDeleteNode(id: string) {
    setNodes((prev) => prev.filter((n) => n.id !== id))
  }

  function handleAddEdge(edge: Edge) {
    setEdges((prev) => {
      const result = [...prev, edge]
      return result
    })
  }

  function handleChangeNodes(fun: (prev: Node<CardProps>[]) => Node<CardProps>[]) {
    setNodes(fun)
  }

  const value: Props = {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    handleChangeNodes,
    handleChangeEdges,
    onConnect,
    handleAddEdge,
    handleDeleteNode,
    handleSetNodes,
    handleSetEdges,
  }

  return <PlaygroundContext.Provider value={value}>{children}</PlaygroundContext.Provider>
}
