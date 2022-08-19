import React from "react";
import { useState } from "react";
import clsx from "clsx";
import Icon from "supercons";
import { useContext } from "react";
import { ApiDocsContext } from "../../../context/ApiDocsContext";
import { titlePipe } from "../../../helpers/titlePipe";

const SectionParentDiv = ({ text, options, openOptions = false }) => {
  const [seeOptions, setSeeOptions] = useState(openOptions);

  const { handleChangeSubSection, subSectionSelect } =
    useContext(ApiDocsContext);

  const parentDivClass = () => {
    return clsx(
      "text-2xl px-8 py-2 w-full rounded-md flex cursor-pointer justify-between mb-2 transition-all duration-300 esm:text-xl",
      {
        "bg-slate-200": seeOptions,
      }
    );
  };

  const fieldOptionClass = (id) => {
    const className =
      "px-4 py-1 rounded-md text-xl font-fontBold cursor-pointer transition-all duration-300 esm:text-lg";

    if (subSectionSelect) {
      return clsx(
        className,
        {
          "bg-gradient-to-r from-principalColor to-secondColor text-white":
            subSectionSelect.subElement.id === id,
        },
        {
          "text-slate-400 bg-white hover:bg-slate-200":
            subSectionSelect.subElement.id !== id,
        }
      );
    } else return className + " text-slate-400 bg-white hover:bg-slate-100";
  };

  const iconClass = () => {
    return clsx("transition-all duration-300", { "rotate-90": seeOptions });
  };

  const handleOpenOptions = () => {
    setSeeOptions(!seeOptions);
  };

  return (
    <div>
      <div className={"px-4 flex esm:px-1"} onClick={handleOpenOptions}>
        <div className={parentDivClass()}>
          <h1 className="font-fontBold">{text}</h1>
          <div className={iconClass()}>
            <Icon glyph="view-forward" />
          </div>
        </div>
      </div>

      {seeOptions && (
        <div className="ml-12 flex flex-col gap-1 esm:ml-8">
          {options.map((el, i) => (
            <div key={i} className="flex flex-col pr-5">
              <div
                className={fieldOptionClass(el.id)}
                onClick={() =>
                  handleChangeSubSection({
                    section: el.section,
                    subElement: el,
                  })
                }
              >
                {titlePipe(el.parent)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionParentDiv;
