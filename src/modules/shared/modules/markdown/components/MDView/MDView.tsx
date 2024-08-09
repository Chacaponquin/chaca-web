import clsx from "clsx"

interface Props {
  children: React.ReactNode
}

export default function MDView({ children }: Props) {
  const CLASS = clsx("flex flex-col", "w-full")

  return <div className={CLASS}>{children}</div>
}
