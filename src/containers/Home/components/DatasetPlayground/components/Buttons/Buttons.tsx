import clsx from "clsx"
import { useButtons } from "./hooks"
import { Item } from "./components"

export default function Buttons() {
  const { buttons } = useButtons()

  const CLASS = clsx(
    "absolute top-0 right-0",
    "w-full",
    "flex justify-center",
    "esm:px-4 px-6",
    "py-1.5",
    "z-10",
    "gap-x-4",
  )

  const CONATINER_CLASS = clsx(
    "rounded",
    "shadow-md",
    "flex items-center",
    "py-1.5 px-2",
    "bg-scale-4",
    "gap-x-2",
  )

  return (
    <div className={CLASS}>
      <div className={CONATINER_CLASS}>
        {buttons.map((b, index) => (
          <Item key={index} {...b} />
        ))}
      </div>
    </div>
  )
}
