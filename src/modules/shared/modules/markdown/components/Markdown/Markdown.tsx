import clsx from "clsx"

interface Props {
  children: React.ReactNode
}

export default function Markdown({ children }: Props) {
  const CLASS = clsx("flex flex-col", "w-full", "pt-14")

  return <div className={CLASS}>{children}</div>
}
