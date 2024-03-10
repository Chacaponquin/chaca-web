import { ArrowDown, ArrowRight } from "@modules/app/modules/icon/components"
import clsx from "clsx"

interface Props {
  title: string
  handleChangeOpen(): void
  selected: boolean
  open: boolean
}

export default function Title({ title, handleChangeOpen, selected, open }: Props) {
  const CLASS = clsx(
    "flex justify-between",
    "rounded w-full cursor-pointer",
    "py-1.5 px-4",
    "mb-1",
    {
      "duration-300 hover:bg-scale-11/30 dark:hover:bg-scale-11/10 transition-all": !selected,
      "bg-scale-11/30 dark:bg-scale-11/10": selected,
    },
    { "text-purple-6 dark:text-purple-6": selected, "text-scale-8 dark:text-white": !selected },
  )

  return (
    <div onClick={handleChangeOpen} className={CLASS}>
      <p className="text-base font-fontMedium">{title}</p>

      <i className="stroke-black dark:stroke-white fill-black dark:fill-white">
        {open ? <ArrowDown size={20} /> : <ArrowRight size={20} />}
      </i>
    </div>
  )
}
