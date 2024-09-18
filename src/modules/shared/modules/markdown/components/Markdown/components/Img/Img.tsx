import clsx from "clsx"

interface Props {
  src: { src: string; alt: string }
  full?: boolean
}

export default function Img({ src, full = false }: Props) {
  const CLASS = clsx("object-contain", "w-full", "my-6", "rounded", { "max-w-[500px]": !full })

  return (
    <section className="w-full flex justify-center">
      <img src={src.src} alt={src.alt} className={CLASS} />
    </section>
  )
}
