import { ContentLoader } from "@modules/shared/components"

interface Props {
  src: string
}

export default function Image({ src }: Props) {
  return (
    <figure className="mb-3">
      {src ? (
        <img src={src} alt="export-image" className="object-contain w-full h-[320px]" />
      ) : (
        <ContentLoader height={320} />
      )}
    </figure>
  )
}
