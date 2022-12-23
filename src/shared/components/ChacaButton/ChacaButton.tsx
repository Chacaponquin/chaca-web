import React from "react";
import {
  ChacaSimpleButtonInterface,
  ChacaIconButtonInterface,
  ChacaButtonProps,
} from "./interfaces/chacaButton.intrface";
import clsx from "clsx";

const buttonClass = ({ size, className, color }: ChacaButtonProps) => {
  return clsx(
    "font-fontBold text-white flex items-center fill-white transition-all duration-300 hover:opacity-70",
    className,
    {
      "py-1 px-5 text-base rounded-md": size === "small",
      "py-1 px-5 text-base rounded-sm": size === "medium",
      "py-1 px-6 text-lg rounded-sm": size === "large",
    },
    {
      "bg-principalColor": color === "primary",
      "bg-principal-bg": color === "gradient",
      "bg-dangerColor": color === "danger",
      "bg-secondColor": color === "secondary",
      "bg-slate-100 !text-black": color === "cancel",
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
