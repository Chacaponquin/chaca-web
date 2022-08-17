import React from "react";
import "./accountButton.css";

const AccountButton = () => {
  return (
    <button className="fancy rounded-md px-7 py-2 font-fontBold">
      <span className="top-key"></span>
      <span className="text font-fontBold">Account</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </button>
  );
};

export default AccountButton;
