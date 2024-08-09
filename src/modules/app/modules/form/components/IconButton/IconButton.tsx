import { IconProps } from "@modules/app/modules/icon/interfaces"

interface Props {
  icon: React.FC<IconProps>
  size: number
  space: "sm" | "base"
  onClick?: () => void
}

export default function IconButton({ icon, size, space: ispace, onClick }: Props) {
  const space = ispace === "base" ? 10 : 5

  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full dark:hover:bg-gray-50/20 hover:bg-gray-200/50 flex items-center justify-center transition-all duration-200"
      style={{ width: `${size + space}px`, height: `${size + space}px` }}
    >
      <i className="stroke-black dark:fill-white dark:stroke-white">{icon({ size: size })}</i>
    </button>
  )
}
