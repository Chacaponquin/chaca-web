import { useContext, Fragment } from "react";
import { DATA_TYPES } from "../../../../../../../shared/constant/DATA_TYPES";
import { v4 as uuid } from "uuid";
import clsx from "clsx";
import { DatasetsContext } from "../../../../../../../shared/context/DatasetsContext";

const DataTypeSelect = () => {
  const { selectField } = useContext(DatasetsContext);

  const barClass = (select: boolean) => {
    return clsx(
      "h-[5px] w-full rounded-full bg-secondColor mt-2 transition-all duration-200",
      { "opacity-100": select },
      { "opacity-0": !select }
    );
  };

  const textClass = (select: boolean) => {
    return clsx(
      "mb-0 h-full text-center font-fontBold text-lg pointer-events-none transition-all duration-300",
      { "text-black": select },
      { "text-slate-400": !select }
    );
  };

  return (
    <div className="bg-white flex w-full py-2 h-max justify-center gap-5 mt-4">
      {Object.values(DATA_TYPES)
        .filter((el) => el !== DATA_TYPES.MIXED)
        .map((el) => (
          <Fragment>
            <div
              key={uuid()}
              className="px-3 font-fontBold uppercase flex flex-col w-[150px] cursor-pointer"
            >
              <p
                className={textClass(
                  selectField ? selectField.info.dataType.type === el : false
                )}
              >
                {el}
              </p>
              <div
                className={barClass(
                  selectField ? selectField.info.dataType.type === el : false
                )}
              ></div>
            </div>
          </Fragment>
        ))}
    </div>
  );
};

export default DataTypeSelect;
