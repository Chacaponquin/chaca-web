import React from "react";
import "./principalButton.css";
import clsx from "clsx";

const PrincipalButton = ({
  short = false,
  text,
}: {
  short?: boolean;
  text: string;
}) => {
  const buttonClass = () => {
    return clsx("cssbuttons-io rounded-md", { "!w-max !h-[3rem]": short });
  };

  return (
    <button className={buttonClass()}>
      <span className="font-fontBold uppercase px-10">{text}</span>
    </button>
  );
};

export default PrincipalButton;
