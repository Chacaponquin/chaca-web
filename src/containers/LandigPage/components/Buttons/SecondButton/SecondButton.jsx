import React from "react";
import "./secondButton.css";

const SecondButton = () => {
  return (
    <button className="secondButton">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <p className="button-text mb-0 flex items-center font-fontBold pl-8">
        Read Docs
      </p>
    </button>
  );
};

export default SecondButton;
