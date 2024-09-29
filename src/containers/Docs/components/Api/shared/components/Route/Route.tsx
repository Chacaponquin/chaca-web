import clsx from "clsx"
import { useBuildUrl } from "../../hooks"

interface Props {
  url: string
  method: "get" | "post" | "put" | "delete"
}

export default function Route({ method, url: iurl }: Props) {
  const { url } = useBuildUrl({ route: iurl })

  const CLASS = clsx("flex", "rounded", "p-3", "items-center", "gap-x-4", "my-4", {
    "bg-blue-500/10": method === "post",
  })

  const METHOD_CLASS = clsx(
    "uppercase",
    "text-white",
    "rounded",
    "px-3 py-1.5",
    "text-sm",
    "font-fontCodeMedium",
    {
      "bg-blue-500": method === "post",
    },
  )

  return (
    <div className={CLASS}>
      <span className={METHOD_CLASS}>
        {method === "get" && "GET"}
        {method === "post" && "POST"}
        {method === "put" && "PUT"}
        {method === "delete" && "DELETE"}
      </span>

      <p className="text-sm text-white font-fontCode">{url}</p>
    </div>
  )
}
