import { PopoverItem } from "@modules/app/modules/form/components/ChacaPopover/components"

interface Props {
  onClick: () => void
  text: string
}

export default function Item({ onClick, text }: Props) {
  return <PopoverItem onClick={onClick} selected={false} size="sm" text={text} />
}
