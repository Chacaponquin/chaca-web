import { IconProps } from "@modules/app/modules/icon/interfaces/icon.interface"
import clsx from "clsx"

interface SocialButtonProps {
  loading: boolean
  id: string
  onClick: () => void
  color: "purple" | "black"
  icon: (props: IconProps) => JSX.Element
  text: string
}

export default function SocialButton({
  loading,
  id,
  onClick,
  icon,
  color,
  text,
}: SocialButtonProps) {
  const BUTTON_CLASS = clsx(
    "border-[3px] py-3 flex gap-3 rounded items-center justify-center transition-all duration-300 hover:text-white cursor-pointer esm:py-2",
    {
      "border-secondColor fill-secondColor text-secondColor hover:bg-secondColor hover:fill-white":
        color === "purple",
      "border-black text-black hover:bg-black hover:fill-white": color === "black",
    },
  )
  return (
    <button className={BUTTON_CLASS} type="button" onClick={onClick} disabled={loading} id={id}>
      {icon({ size: 23 })}
      <p className="mb-0 text-xl">{text}</p>
    </button>
  )
}
