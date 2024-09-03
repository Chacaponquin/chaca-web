interface Props {
  method: string
  url: string
}

export default function Request({ method, url }: Props) {
  return (
    <div className="flex items-center gap-x-3">
      <span className="font-fontMedium px-3 py-1 rounded-sm text-white uppercase text-sm bg-purple-6">
        {method}
      </span>

      <p className="text-sm font-fontCode text-white">{url}</p>
    </div>
  )
}
