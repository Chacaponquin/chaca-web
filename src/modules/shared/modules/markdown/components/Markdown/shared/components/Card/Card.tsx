import clsx from "clsx"

interface Props {
  color: "purple" | "red" | "yellow"
  children: React.ReactNode
}

export default function Card({ children, color }: Props) {
  const CLASS = clsx("px-6 py-5", "rounded", "mb-3 mt-3", {
    "bg-purple-500/20": color === "purple",
    "bg-carnation-500/20": color === "red",
    "bg-yellow-500/20": color === "yellow",
  })

  return <article className={CLASS}>{children}</article>
}
