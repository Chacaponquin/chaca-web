import React from "react";
import clsx from "clsx";
import { useContext } from "react";
import { ApiDocsContext } from "../../../context/ApiDocsContext";
import { DataTransform } from "../../../helpers/DataTransform";
import { ApiDocElement, ApiField } from "../../../interfaces/api.interface";
import { API_SECTIONS } from "../../../constant/API_SECTIONS";

const SectionParentDiv = ({
  text,
  options,
}: {
  text: string;
  options: ApiDocElement[] | ApiField[];
}) => {
  const { handleChangeSubSection, subSectionSelect } =
    useContext(ApiDocsContext);

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
        {options.map((el, i) => (
          <div key={el.id} className="flex flex-col">
            <div
              className={fieldOptionClass(el.id)}
              onClick={() => {
                if (el.section === API_SECTIONS.FIELDS) {
                  handleChangeSubSection({
                    section: el.section,
                    subElement: {
                      element: el as ApiField,
                      id: el.id,
                    },
                  });
                } else {
                  handleChangeSubSection({
                    section: el.section,
                    subElement: {
                      element: el.subElement,
                      id: el.id,
                    },
                  });
                }
              }}
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
