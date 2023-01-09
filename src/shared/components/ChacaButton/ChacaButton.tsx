import {
  ChacaSimpleButtonInterface,
  ChacaIconButtonInterface,
  ChacaButtonProps,
} from "./interfaces/chacaButton.intrface";
import clsx from "clsx";

const buttonClass = ({ size, className, color }: ChacaButtonProps) => {
  return clsx(
    "font-fontBold flex items-center fill-white transition-all duration-300 hover:opacity-70",
    className,
    {
      "py-1 px-5 text-base rounded": size === "small",
      "py-1 px-5 text-base rounded-sm": size === "medium",
      "py-1 px-6 text-lg rounded-sm": size === "large",
      "py-2 px-7 rounded-sm text-lg": size === "extra-large",
    },
    {
      "bg-principalColor text-white": color === "primary",
      "bg-principal-bg text-white": color === "gradient",
      "bg-dangerColor text-white": color === "danger",
      "bg-secondColor text-white": color === "secondary",
      "bg-slate-200 text-black": color === "cancel",
    }
  );
};

const ChacaSimpleButton = (props: ChacaSimpleButtonInterface) => {
  return (
    <button onClick={props.onClick} className={buttonClass(props)}>
      {props.text}
    </button>
  );
};

const ChacaIconButton = (props: ChacaIconButtonInterface) => {
  return (
    <button onClick={props.onClick} className={buttonClass(props)}>
      {props.icon}
      <p className="mb-0 ml-2"> {props.text}</p>
    </button>
  );
};

export { ChacaSimpleButton, ChacaIconButton };
