import { Image } from "@modules/app/components"

interface Props {
  image: { image: string; alt: string }
}

export default function Flag({ image }: Props) {
  return <Image image={image} className="object-contain rounded-full w-[25px] h-[25px]" />
}
