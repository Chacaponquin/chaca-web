export default function DatasetInfo({ limit, name }: { limit: number; name: string }) {
  const LIMIT = `(${limit})`

  return (
    <div className="flex items-end gap-x-3">
      <h1 className="text-2xl font-fontBold">{name}</h1>
      <p className="text-xl font-fontCodeBold">{LIMIT}</p>
    </div>
  )
}
