import { SmartStepEdge } from "@tisoap/react-flow-smart-edge"
import { EdgeProps } from "reactflow"

export default function Edge(props: EdgeProps) {
  return (
    <SmartStepEdge
      {...props}
      style={{
        stroke: props.selected ? "#7d5fff" : "#c1cccf",
        strokeWidth: "1.5px",
      }}
    />
  )
}
