interface Props {
  limit: number
  name: string
}

export default function DatasetInfo({ limit, name }: Props) {
  const LIMIT = `(${limit})`

  return (
    <div className="flex items-center justify-center gap-x-1.5 w-full">
      <h1 className="text-sm text-center font-fontMedium whitespace-nowrap">{name}</h1>
      <p className="text-xs font-fontCodeMedium">{LIMIT}</p>
    </div>
  )
}
