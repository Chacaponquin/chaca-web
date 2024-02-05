import clsx from "clsx"

export default function HttpMethod({ method }: { method: string }) {
  const CLASS = clsx(
    "uppercase",
    "text-white",
    "px-5 py-2",
    "rounded-sm",
    "http_method",
    "w-max",
    "font-fontSemiBold",
    {
      "bg-[#2ecc71]": method === "GET",
      "bg-[#3498db]": method === "POST",
      "bg-[#f39c12]": method === "PUT",
      "bg-red-2": method === "DELETE",
    },
  )

  return <div className={CLASS}>{method}</div>
}
