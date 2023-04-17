export interface ChacaButtonProps {
  text: string
  onClick?: () => void
  size: "small" | "medium" | "large" | "extra-large"
  color: "primary" | "gradient" | "danger" | "secondary" | "cancel"
  className?: string
  full?: boolean
}

export interface ChacaIconButtonInterface extends ChacaButtonProps {
  icon: JSX.Element
}
