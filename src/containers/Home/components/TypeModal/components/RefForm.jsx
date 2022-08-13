import React, { useContext } from "react";
import clsx from "clsx";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { RadioButton } from "primereact/radiobutton";
import { DATA_TYPES } from "../../../helpers/datasetsUtils";

const RefForm = ({ datasetID, handleChangeDataType, typeInfoDataType }) => {
  const { datasets } = useContext(DatasetsContext);

  const datasetsToRef = datasets.filter((el) => el.id !== datasetID);

  const handleChangeSelectedDataset = (id) => {
    if (id !== typeInfoDataType.datasetID)
      handleChangeDataType({
        type: DATA_TYPES.REF,
        datasetID: id,
        fieldRef: null,
      });
  };

  const divClass = (id) => {
    return clsx(
      "rounded-md h-[90%] bg-slate-200 py-3 px-8 cursor-pointer transition-all duration-300 flex flex-col",
      {
        "bg-principal-bg text-white scale-110":
          id === typeInfoDataType.datasetID,
      },
      { "justify-center": !(id === typeInfoDataType.datasetID) }
    );
  };

  return (
    <div className="w-full h-full flex justify-center gap-8 overflow-auto items-center">
      {datasetsToRef.map((dat, i) => (
        <div
          className={divClass(dat.id)}
          key={i}
          onClick={() => handleChangeSelectedDataset(dat.id)}
        >
          <h1 className="text-4xl font-fontExtraBold text-white text-center">
            {dat.name}
          </h1>

          <div className="flex flex-col w-full gap-3 pt-5">
            {dat.id === typeInfoDataType.datasetID &&
              dat.fields &&
              dat.fields.map((f, i) => {
                if (
                  f.name &&
                  f.type &&
                  f.type.type &&
                  f.dataType.type !== DATA_TYPES.REF
                )
                  return (
                    <div className="flex items-center gap-2" key={i}>
                      <RadioButton
                        value={typeInfoDataType.fieldRef === f.id}
                        onChange={(e) => {
                          handleChangeDataType({
                            type: DATA_TYPES.REF,
                            datasetID: dat.id,
                            fieldRef: e.checked ? f.id : null,
                          });
                        }}
                        checked={f.id === typeInfoDataType.fieldRef}
                      />
                      <p className="mb-0 text-xl font-fontBold">{f.name}</p>
                    </div>
                  );
                else return <React.Fragment key={i}></React.Fragment>;
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RefForm;
