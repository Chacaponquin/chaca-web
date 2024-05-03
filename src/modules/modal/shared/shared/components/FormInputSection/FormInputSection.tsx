import clsx from "clsx"
import { Label } from ".."

interface Props {
  labelText: string
  children: React.ReactNode
  vertical: boolean
  info?: React.ReactNode
}

export default function FormInputSection({ labelText, children, vertical, info }: Props) {
  const CLASS = clsx("flex", "w-full", {
    "flex-col": vertical,
    "flex-row items-center gap-x-4": !vertical,
  })

  return (
    <section className={CLASS}>
      <div className="flex items-center gap-x-1.5">
        <Label text={labelText} />
        {info}
      </div>

      {children}
    </section>
  )
}
