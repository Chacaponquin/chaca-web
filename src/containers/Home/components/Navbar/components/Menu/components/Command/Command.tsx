interface Props {
  text: string
}

export default function Command({ text }: Props) {
  return <p className="text-xs text-gray-500 font-fontCodeMedium">{text}</p>
}
