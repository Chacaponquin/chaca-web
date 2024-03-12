interface Props {
  src: string
  alt: string
}

export default function Img({ alt, src }: Props) {
  return <img src={src} alt={alt} className="mb-2 w-full" />
}
