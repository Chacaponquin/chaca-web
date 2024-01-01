import { IconProps } from "@modules/app/modules/icon/interfaces"

export interface LinkButton {
  icon: React.FC<IconProps>
  title: string
  link: string
}
