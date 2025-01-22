import { Popover } from "react-tiny-popover"

interface Props {
  children: JSX.Element
  parent: JSX.Element
  open: boolean
  position: "bottom" | "top"
  onClose(): void
}

export default function ChacaPopover({ children, parent, position, open, onClose }: Props) {
  return (
    <Popover
      isOpen={open}
      content={children}
      positions={[position]}
      clickOutsideCapture={true}
      align="start"
      containerClassName="z-50"
      onClickOutside={onClose}
    >
      {parent}
    </Popover>
  )
}
