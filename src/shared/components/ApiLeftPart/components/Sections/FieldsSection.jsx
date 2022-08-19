import React from "react";
import clsx from "clsx";
import SectionParentDiv from "./SectionParentDiv";
import { API_SECTIONS } from "../../../../../containers/Api/helpers/SECTIONS";
import { titlePipe } from "../../../../helpers/titlePipe";

const FieldsSection = ({
  apiFields,
  handleChangeSubSection,
  subSectionSelect,
}) => {
  const fieldOptionClass = (id) => {
    const className =
      "px-4 py-1 rounded-md text-xl font-fontBold cursor-pointer transition-all duration-300";

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

  return (
    <SectionParentDiv text={"Fields"}>
      <div className="ml-12 flex flex-col gap-1 esm:ml-8">
        {apiFields.map((el, i) => (
          <div key={i} className="flex flex-col pr-5">
            <div
              className={fieldOptionClass(el.id)}
              onClick={() =>
                handleChangeSubSection({
                  section: API_SECTIONS.FIELDS,
                  subElement: el,
                })
              }
            >
              {titlePipe(el.parent)}
            </div>
          </div>
        ))}
      </div>
    </SectionParentDiv>
  );
};

export default FieldsSection;
