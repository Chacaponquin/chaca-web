import { ArrowRight } from "@modules/app/modules/icon/components"
import clsx from "clsx"

interface Props {
  name: string
  isDoc: boolean
}

export default function Card({ name, isDoc }: Props) {
  const TEXT_CLASS = clsx(
    "rounded-full",
    "font-fontMedium",
    "text-sm",
    {
      "bg-scale-11/20": isDoc,
    },
    { "text-purple-6": isDoc },
    { "px-4 py-1": isDoc },
    { "ml-1": isDoc, "ml-5": !isDoc },
  )

  return (
    <div className="flex items-center dark:fill-scale-10 dark:text-white">
      <ArrowRight size={16} />

      <p className={TEXT_CLASS}>{name}</p>
    </div>
  )
}
