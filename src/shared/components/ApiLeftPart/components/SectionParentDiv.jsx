import React from "react";
import clsx from "clsx";
import { useContext } from "react";
import { ApiDocsContext } from "../../../context/ApiDocsContext";
import { titlePipe } from "../../../helpers/titlePipe";

const SectionParentDiv = ({ text, options }) => {
  const { handleChangeSubSection, subSectionSelect } =
    useContext(ApiDocsContext);

  const parentDivClass = () => {
    return clsx(
      "text-base py-1 text-slate-400 w-full rounded-md flex cursor-pointer justify-between transition-all duration-300 uppercase"
    );
  };

  const fieldOptionClass = (id) => {
    const commonClass = " text-black bg-white transition-all duration-300";
    const className =
      "rounded-md text-lg font-fontBold cursor-pointer transition-all duration-300 esm:text-base";

    if (subSectionSelect) {
      return clsx(
        className,
        {
          "text-principalColor scale-105":
            subSectionSelect.subElement.id === id,
        },
        {
          [commonClass]: subSectionSelect.subElement.id !== id,
        }
      );
    } else return className + commonClass;
  };

  return (
    <div className="px-10 esm:px-6">
      <div className={"flex items-center"}>
        <div className={parentDivClass()}>
          <h1 className="font-fontBold">{text}</h1>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        {options.map((el, i) => (
          <div key={i} className="flex flex-col">
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
    </div>
  );
};

export default SectionParentDiv;
