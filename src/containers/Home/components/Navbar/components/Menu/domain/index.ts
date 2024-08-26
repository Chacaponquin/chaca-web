import { IconProps } from "@modules/app/modules/icon/interfaces"
import { Languages } from "@modules/app/modules/language/interfaces"

export interface MenuItem {
  title: string
  icon: React.FC<IconProps>
  onClick(): void
  command: string
}

export interface LanguageOption {
  title: string
  type: Languages
}
