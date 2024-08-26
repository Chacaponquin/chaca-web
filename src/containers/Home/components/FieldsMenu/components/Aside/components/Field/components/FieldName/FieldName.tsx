interface Props {
  name: string
}

export default function FieldName({ name }: Props) {
  return <p className="ml-3 text-base cursor-text font-fontCode">{name}</p>
}
