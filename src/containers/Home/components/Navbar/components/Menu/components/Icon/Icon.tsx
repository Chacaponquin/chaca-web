import { IconProps } from "@modules/app/modules/icon/interfaces"

interface Props {
  icon: React.FC<IconProps>
}

export default function Icon({ icon }: Props) {
  return (
    <i className="dark:stroke-white dark:fill-white stroke-black fill-black">
      {icon({ size: 17 })}
    </i>
  )
}
