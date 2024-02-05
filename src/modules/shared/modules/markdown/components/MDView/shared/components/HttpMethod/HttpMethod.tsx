import clsx from "clsx"

export default function HttpMethod({ method }: { method: string }) {
  const methodClass = clsx(
    "uppercase",
    "text-white",
    "px-5 py-2",
    "rounded",
    "http_method",
    "w-max",
    "font-normal",
    {
      "bg-[#2ecc71]": method === "GET",
      post: method === "POST",
      put: method === "PUT",
      delete: method === "DELETE",
    },
  )

  return <div className={methodClass}>{method}</div>
}
