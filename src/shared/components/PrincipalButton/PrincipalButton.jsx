import React from "react";
import "./principalButton.css";
import clsx from "clsx";

const PrincipalButton = ({ maxContent = false, text }) => {
  const buttonClass = () => {
    return clsx("cssbuttons-io rounded-md", { "!w-max": maxContent });
  };

  return (
    <button className={buttonClass()}>
      <span className="py-3 font-fontBold uppercase px-10">{text}</span>
    </button>
  );
};

export default PrincipalButton;
