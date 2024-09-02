interface Props {
  src: { src: string; alt: string }
}

export default function Img({ src }: Props) {
  return (
    <section className="w-full flex justify-center">
      <img src={src.src} alt={src.alt} className="my-5 max-w-[500px] w-full object-contain" />
    </section>
  )
}
