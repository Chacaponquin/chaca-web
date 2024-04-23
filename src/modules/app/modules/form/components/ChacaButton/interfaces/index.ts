import { Size } from "@form/interfaces"

export interface ChacaButtonProps {
  text: string
  size: Size
  color: "primary" | "gradient" | "danger" | "secondary" | "cancel"
  full?: boolean
  type?: "submit" | "button"
  id?: string
  onClick?: () => void
  rounded?: boolean
}

export interface ChacaIconButtonInterface extends ChacaButtonProps {
  icon: React.ReactNode
}
