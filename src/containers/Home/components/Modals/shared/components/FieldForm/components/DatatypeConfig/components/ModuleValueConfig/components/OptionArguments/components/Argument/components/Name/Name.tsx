interface Props {
  text: string
}

export default function Name({ text }: Props) {
  return <p className="text-base whitespace-nowrap">{text}</p>
}
