import { Image } from "@modules/app/components"

interface Props {
  image: { image: string; alt: string }
}

export default function ImageSection({ image }: Props) {
  return (
    <div className="xl:flex hidden w-full">
      <div className="rounded bg-scale-3 flex w-full items-center p-4">
        <div className="rounded h-max flex items-center">
          <Image image={image} className="w-full object-contain rounded-md" />
        </div>
      </div>
    </div>
  )
}
