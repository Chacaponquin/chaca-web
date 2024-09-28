import clsx from "clsx"
import { HttpMethod } from "../../../../domain"

interface Props {
  method: HttpMethod
  url: string
}

export default function Request({ method, url }: Props) {
  const CLASS = clsx(
    "font-fontCodeMedium",
    "text-xs",
    "uppercase",
    "text-white",
    "rounded-sm",
    "px-2.5 py-1",

    { "bg-blue-500": method === "post" },
  )

  return (
    <div className="flex items-center gap-x-3">
      <span className={CLASS}>{method}</span>

      <p className="text-sm font-fontCode text-white">{url}</p>
    </div>
  )
}
