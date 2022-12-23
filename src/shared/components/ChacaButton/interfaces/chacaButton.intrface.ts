export interface ChacaButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  size: "small" | "medium" | "large";
  color: "primary" | "gradient" | "danger";
}

export interface ChacaSimpleButtonInterface extends ChacaButtonProps {}

export interface ChacaIconButtonInterface extends ChacaButtonProps {
  icon: JSX.Element;
}
