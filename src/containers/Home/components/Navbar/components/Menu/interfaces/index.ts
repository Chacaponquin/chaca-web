import { IconProps } from "@modules/app/modules/icon/interfaces"

export interface MenuItem {
  title: string
  icon: React.FC<IconProps>
  onClick(): void
  command: string
}
