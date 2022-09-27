import React from "react";
import clsx from "clsx";
import { useContext } from "react";
import { ApiDocsContext } from "../../../context/ApiDocsContext";
import { DataTransform } from "../../../helpers/DataTransform";
import { v4 as uuid } from "uuid";
import { AppConfigContext } from "../../../context/AppConfigContext";

const SectionParentDiv = ({ text }: { text: string }) => {
  const { handleChangeSubSection, subSectionSelect } =
    useContext(ApiDocsContext);
  const { apiFields } = useContext(AppConfigContext);

  const parentDivClass = () => {
    return clsx(
      "text-base py-1 text-slate-400 w-full rounded-md flex cursor-pointer justify-between transition-all duration-300 uppercase"
    );
  };

  const fieldOptionClass = (id: string) => {
    const commonClass = " text-black bg-white transition-all duration-300";
    const className =
      "rounded-md text-lg font-fontBold cursor-pointer transition-all duration-300 esm:text-base";

    return clsx(
      className,
      {
        "text-principalColor scale-105": subSectionSelect.subElement.id === id,
      },
      {
        [commonClass]: subSectionSelect.subElement.id !== id,
      }
    );
  };

  return (
    <div className="px-6 esm:px-4">
      <div className={"flex items-center"}>
        <div className={parentDivClass()}>
          <h1 className="font-fontBold">{text}</h1>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        {apiFields.map((el, i) => (
          <div key={uuid()} className="flex flex-col">
            <div
              className={fieldOptionClass(el.id)}
              onClick={() =>
                handleChangeSubSection({
                  section: el.section,
                  subElement: {
                    element: el,
                    id: el.id,
                  },
                })
              }
            >
              {DataTransform.titlePipe(el.parent)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionParentDiv;
