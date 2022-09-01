import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

const BooleanInput = () => {
  const [isActive, setIsActive] = useState(false);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const divClass = () =>
    clsx(
      "w-[70px] h-[35px] rounded-full flex justify-start items-center px-[10px] transition-all duration-300",
      { "justify-start bg-slate-200 ": !isActive },
      { "justify-end bg-secondColor": isActive }
    );

  return (
    <motion.div className={divClass()} onClick={() => setIsActive(!isActive)}>
      <motion.div
        layout
        transition={spring}
        className="w-[25px] bg-white rounded-full h-[25px] pointer-events-none"
      ></motion.div>
    </motion.div>
  );
};

export default BooleanInput;
