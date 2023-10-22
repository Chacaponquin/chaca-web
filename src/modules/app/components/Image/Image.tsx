interface Props {
  image: { image: string; alt: string }
  className?: string
}

export default function Image({ image, className }: Props) {
  return <img src={image.image} alt={image.alt} className={className} />
}
