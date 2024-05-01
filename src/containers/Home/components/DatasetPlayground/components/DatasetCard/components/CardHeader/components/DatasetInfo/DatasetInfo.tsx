interface Props {
  limit: number
  name: string
}

export default function DatasetInfo({ limit, name }: Props) {
  const LIMIT = `(${limit})`

  return (
    <div className="flex items-end justify-center gap-x-3 w-full">
      <h1 className="text-2xl text-center font-fontMedium whitespace-nowrap">{name}</h1>
      <p className="text-xl font-fontCodeMedium">{LIMIT}</p>
    </div>
  )
}
