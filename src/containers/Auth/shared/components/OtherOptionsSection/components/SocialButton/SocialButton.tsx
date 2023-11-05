import { IconProps } from "@modules/app/modules/icon/interfaces/icon.interface"
import clsx from "clsx"

interface Props {
  loading: boolean
  id: string
  onClick: () => void
  color: "purple" | "black"
  icon: (props: IconProps) => JSX.Element
  text: string
}

export default function SocialButton({ loading, id, onClick, icon, color, text }: Props) {
  const BUTTON_CLASS = clsx(
    "flex gap-3 rounded items-center justify-center transition-all duration-300 hover:text-white cursor-pointer",
    "border-[3px] dark:border-[1.5px]",
    "esm:py-3 py-3.5",
    {
      "border-purple-7 fill-purple-7 text-purple-7 hover:bg-purple-7 hover:fill-white":
        color === "purple",
      "dark:border-scale-9 dark:fill-white dark:bg-purple-6 dark:text-white dark:hover:opacity-80":
        color === "purple",
    },
    {
      "border-black text-black hover:bg-black hover:fill-white": color === "black",
      "dark:border-scale-9 dark:fill-white dark:bg-scale-3 dark:text-white dark:hover:opacity-80":
        color === "black",
    },
  )

  return (
    <button className={BUTTON_CLASS} type="button" onClick={onClick} disabled={loading} id={id}>
      {icon({ size: 28 })}
      <p className="mb-0 text-xl">{text}</p>
    </button>
  )
}
