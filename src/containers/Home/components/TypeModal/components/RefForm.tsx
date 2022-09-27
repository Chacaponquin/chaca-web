import clsx from "clsx";
import { RadioButton } from "primereact/radiobutton";
import { DATA_TYPES } from "../../../../../shared/constant/DATA_TYPES";
import {
  Dataset,
  FieldDataType,
} from "../../../../../shared/interfaces/datasets.interface";
import { v4 as uuid } from "uuid";

const RefForm = ({
  handleChangeDataType,
  typeInfoDataType,
  toRef,
}: {
  typeInfoDataType: FieldDataType;
  handleChangeDataType: (obj: FieldDataType) => void;
  toRef: Dataset[];
}) => {
  const handleChangeSelectedDataset = (id: string) => {
    if (DATA_TYPES.REF === typeInfoDataType.type && id !== typeInfoDataType.ref)
      handleChangeDataType({
        type: DATA_TYPES.REF,
        fieldRef: toRef.find((el) => el.id === id)!.fields[0].id,
        ref: id,
      });
  };

  const divClass = (id: string): string => {
    const commonClass =
      "rounded-md h-[90%] bg-slate-200 py-3 px-8 cursor-pointer transition-all duration-300 flex flex-col";

    if (typeInfoDataType.type === DATA_TYPES.REF)
      return clsx(
        commonClass,
        {
          "bg-principal-bg text-white scale-110": id === typeInfoDataType.ref,
        },
        { "justify-center": !(id === typeInfoDataType.ref) }
      );
    else return commonClass;
  };

  return (
    <div className="w-full h-full flex justify-center gap-8 overflow-auto items-center">
      {toRef.map((dat, i) => (
        <div
          className={divClass(dat.id)}
          key={uuid()}
          onClick={() => handleChangeSelectedDataset(dat.id)}
        >
          <h1 className="text-4xl font-fontExtraBold text-white text-center">
            {dat.name}
          </h1>

          <div className="flex flex-col w-full gap-3 pt-5">
            {typeInfoDataType.type === DATA_TYPES.REF &&
              dat.fields.map((f, i) => {
                return (
                  <div className="flex items-center gap-2" key={uuid()}>
                    <RadioButton
                      value={typeInfoDataType.fieldRef === f.id}
                      onChange={(e) => {
                        handleChangeDataType({
                          type: DATA_TYPES.REF,
                          ref: dat.id,
                          fieldRef: f.id,
                        });
                      }}
                      checked={f.id === typeInfoDataType.fieldRef}
                    />
                    <p className="mb-0 text-xl font-fontBold">{f.name}</p>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RefForm;
