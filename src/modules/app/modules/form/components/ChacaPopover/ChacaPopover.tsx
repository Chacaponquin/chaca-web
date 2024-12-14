import { Popover } from "react-tiny-popover"

interface Props {
  children: JSX.Element
  parent: JSX.Element
  open: boolean
  position: "bottom" | "top"
  onClickOutside: () => void
}

export default function ChacaPopover({ children, parent, position, open, onClickOutside }: Props) {
  return (
    <Popover
      isOpen={open}
      content={children}
      positions={[position]}
      clickOutsideCapture={true}
      align="end"
      containerClassName="z-50"
      onClickOutside={onClickOutside}
    >
      {parent}
    </Popover>
  )
}
