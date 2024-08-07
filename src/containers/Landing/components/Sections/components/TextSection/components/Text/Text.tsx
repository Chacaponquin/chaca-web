interface Props {
  text: string
}

export default function Text({ text }: Props) {
  return <p className="text-scale-11 text-xl mt-4 leading-9 esm:text-lg">{text}</p>
}
