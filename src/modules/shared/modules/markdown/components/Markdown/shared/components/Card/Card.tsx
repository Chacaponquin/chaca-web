import clsx from "clsx"

interface Props {
  color: "purple" | "red" | "yellow" | "green"
  children: React.ReactNode
}

export default function Card({ children, color }: Props) {
  const CLASS = clsx(
    "px-5 py-4",
    "rounded",
    "my-4",
    {
      "bg-purple-500/20": color === "purple",
      "bg-carnation-500/20": color === "red",
      "bg-yellow-500/20": color === "yellow",
      "bg-green-400/20": color === "green",
    },
    {
      "border-[1px] border-green-500": color === "green",
      "border-[1px] border-yellow-500": color === "yellow",
      "border-[1px] border-carnation-500": color === "red",
      "border-[1px] border-purple-500": color === "purple",
    },
  )

  return <article className={CLASS}>{children}</article>
}
