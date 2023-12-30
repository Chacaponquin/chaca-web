import clsx from "clsx"
import { Handle, Position } from "reactflow"

interface Props {
  position: Position
  id: string
  type: "source" | "target"
}

export default function Connect({ id, position, type }: Props) {
  const NODE_CLASS = clsx(
    "absolute",
    "z-[999] w-[10px] h-[10px] rounded-none",
    "-translate-y-1",
    "invisible",
    "cursor-default",
    {
      "right-0": position === Position.Right,
      "left-0": position === Position.Left,
    },
  )

  return (
    <Handle type={type} position={position} id={id} isConnectable={true} className={NODE_CLASS} />
  )
}
