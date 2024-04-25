import clsx from "clsx"
import { Label } from ".."

interface Props {
  labelText: string
  id: string
  children: React.ReactNode
  vertical: boolean
}

export default function FormInputSection({ labelText, id, children, vertical }: Props) {
  const CLASS = clsx("flex", "w-full", {
    "flex-col": vertical,
    "flex-row items-center gap-x-4": !vertical,
  })

  return (
    <section className={CLASS}>
      <Label htmlFor={id} text={labelText} />
      {children}
    </section>
  )
}
