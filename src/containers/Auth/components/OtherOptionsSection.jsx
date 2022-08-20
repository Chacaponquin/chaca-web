import React from "react";
import Icon from "supercons";

const OtherOptionsSection = ({ loading }) => {
  const divClass =
    "border-[3px] py-4 flex gap-3 rounded-md items-center justify-center transition-all duration-300 hover:text-white cursor-pointer esm:py-2";

  return (
    <>
      {!loading && (
        <div className="grid grid-cols-2 w-full gap-2 mb-3 exsm:grid-cols-1">
          <div
            className={
              divClass +
              " border-dangerColor text-dangerColor hover:bg-dangerColor"
            }
          >
            <Icon glyph="google" />
            <p className="mb-0 text-xl">Google</p>
          </div>
          <div className={divClass + " border-black text-black hover:bg-black"}>
            <Icon glyph="github" />
            <p className="mb-0 text-xl">Github</p>
          </div>
        </div>
      )}
    </>
  );
};

export default OtherOptionsSection;
