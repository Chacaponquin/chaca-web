import clsx from "clsx"

interface Props {
  children: React.ReactNode
}

export default function Section({ children }: Props) {
  const CONTAINER_CLASS = clsx("grid xl:grid-cols-2 grid-cols-1 gap-x-14")

  return <div className={CONTAINER_CLASS}>{children}</div>
}
