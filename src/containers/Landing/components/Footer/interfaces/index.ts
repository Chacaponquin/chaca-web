import { IconProps } from "@modules/app/modules/icon/interfaces"

export interface FooterLink {
  icon: React.FC<IconProps>
  title: string
  link: string
}
