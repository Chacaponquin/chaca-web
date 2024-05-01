interface Props {
  text: string
}

export default function Title({ text }: Props) {
  return <p className="text-base">{text}</p>
}
