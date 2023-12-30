interface Props {
  type: string
}

export default function FieldType({ type }: Props) {
  return <p className="font-fontCodeBold text-center whitespace-nowrap">{type}</p>
}
