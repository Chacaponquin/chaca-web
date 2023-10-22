import { CSSProperties } from "react"

interface Props {
  image: { image: string; alt: string }
  className?: string
  style?: CSSProperties
}

export default function Image({ image, className, style }: Props) {
  return <img src={image.image} alt={image.alt} className={className} style={style} />
}
