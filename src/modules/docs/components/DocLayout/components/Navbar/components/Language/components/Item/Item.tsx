import { Image } from "@modules/app/components"
import { PopoverItem } from "@modules/app/modules/form/components/ChacaPopover/components"

interface Props {
  text: string
  image: { image: string; alt: string }
  onChange(): void
}

export default function Item({ text, image, onChange }: Props) {
  return (
    <PopoverItem
      onClick={onChange}
      text={text}
      selected={false}
      size="sm"
      icon={() => <Image image={image} className="object-contain w-[18px] h-[18px]" />}
    />
  )
}
