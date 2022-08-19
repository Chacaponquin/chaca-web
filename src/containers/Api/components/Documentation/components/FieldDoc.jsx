import React from "react";
import { titlePipe } from "../../../../../shared/helpers/titlePipe";
import Icon from "supercons";
import { useState } from "react";
import { useEffect } from "react";
import { getSelectValues } from "../../../helpers/showDataTransform";
import { FIELDS_INPUT_TYPES } from "../../../../../shared/helpers/datasetsUtils";

const FieldDoc = ({ fieldData }) => {
  const tableHeaderClass =
    "text-left font-fontCodeBold px-4 py-2 text-base esm:text-sm";
  const separatorClass = "w-full border-t-[2px] border-slate-300";
  const cellTableClass = "font-fontCodeRegular px-4 py-2 text-base esm:text-sm";

  return (
    <div className="flex flex-col w-full">
      {fieldData.fields.map((f, i) => (
        <div key={i} className="w-full flex flex-col">
          <div className="w-full flex-col py-5 flex gap-5">
            <div className="flex flex-col gap-1">
              <DataHeader name={f.name} route={f.route} />
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
                facilis doloribus corporis incidunt? Ut eaque vel nobis
                doloremque fugit sint.
              </div>
            </div>

            {f.arguments.length > 0 && (
              <div className="flex flex-col gap-1">
                <h1
                  className={
                    "md:text-xl font-fontBold text-lg whitespace-nowrap"
                  }
                >
                  Parámetros:
                </h1>
                <table className="table-fixed border-2 rounded-md">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className={tableHeaderClass}>Argument</th>
                      <th className={tableHeaderClass}>Type</th>
                      <th className={tableHeaderClass}>Description</th>
                    </tr>
                  </thead>

                  <tbody>
                    {f.arguments.map((a, i) => (
                      <tr key={i}>
                        <td className={cellTableClass}>{a.argument}</td>
                        <td className={cellTableClass}>
                          {a.inputType === FIELDS_INPUT_TYPES.SELECT
                            ? getSelectValues(a.selectValues)
                            : titlePipe(a.inputType)}
                        </td>
                        <td className={cellTableClass}>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Sed, dignissimos.
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className={separatorClass}></div>
        </div>
      ))}
    </div>
  );
};

const DataHeader = ({ name, route }) => {
  const headerClass =
    "font-fontBold md:text-2xl esm:text-xl sm:text-xl whitespace-nowrap";

  const [isCopy, setIsCopy] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  }, [isCopy]);

  const handleCopy = () => {
    setIsCopy(true);
    navigator.clipboard.writeText(route);
  };

  return (
    <div className="flex md:gap-7 gap-3 md:items-center items-start md:flex-row flex-col ">
      <h1 className={headerClass}>{name}</h1>

      <div className="flex gap-4 items-center esm:hidden">
        <div
          className={
            "text-white font-fontCodeBold xl:text-base bg-principal-bg px-4 py-2 rounded-md text-sm whitespace-nowrap"
          }
        >
          GET {route}
        </div>

        <div className="flex items-center gap-2 xl:flex-row flex-col esm:hidden">
          <button
            className="w-[50px] h-[50px] rounded-full flex items-center justify-center transition-all duration-200 hover:bg-slate-100"
            onClick={handleCopy}
          >
            <Icon glyph="copy" size={32} />
          </button>

          {isCopy && (
            <div className="px-3 py-1 bg-principalColor/30 rounded-md text-principalColor text-base">
              Copied
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FieldDoc;
