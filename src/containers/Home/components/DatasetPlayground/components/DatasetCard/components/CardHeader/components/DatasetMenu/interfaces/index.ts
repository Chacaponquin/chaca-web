import { IconProps } from "@modules/app/modules/icon/interfaces"

export interface MenuItem {
  text: string
  icon: React.FC<IconProps>
  id: string
  onClick(): void
  command: string
}
