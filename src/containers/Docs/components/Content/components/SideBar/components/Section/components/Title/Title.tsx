import { ArrowDown } from "@modules/app/modules/icon/components"
import clsx from "clsx"

interface Props {
  title: string
  handleChangeOpen(): void
  open: boolean
}

export default function Title({ title, handleChangeOpen, open }: Props) {
  const CLASS = clsx(
    "flex justify-between",
    "rounded w-full cursor-pointer",
    "py-1.5 px-4",
    "stroke-black",
    "mb-1",
    {
      "duration-300 hover:bg-scale-11/30 transition-all": !open,
      "bg-scale-11/30": open,
    },
    { "text-purple-6": open, "text-scale-8": !open },
  )

  return (
    <div onClick={handleChangeOpen} className={CLASS}>
      <p className="text-base">{title}</p>

      <button>
        <ArrowDown size={24} />
      </button>
    </div>
  )
}
