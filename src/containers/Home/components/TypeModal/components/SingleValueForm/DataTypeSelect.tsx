import clsx from "clsx";
import { useContext } from "react";
import { CODE_TYPES } from "../../../../../../shared/constant/CODE_TYPES";
import { DATA_TYPES } from "../../../../../../shared/constant/DATA_TYPES";
import { AppConfigContext } from "../../../../../../shared/context/AppConfigContext";
import { DataTransform } from "../../../../../../shared/helpers/DataTransform";
import {
  Dataset,
  FieldDataType,
} from "../../../../../../shared/interfaces/datasets.interface";
import { v4 as uuid } from "uuid";
import { CreateIntialData } from "../../../../helpers/CreateData";

const DataTypeSelect = ({
  selectedDataType,
  handleChangeDataType,

  toRef,
}: {
  handleChangeDataType: (obj: FieldDataType) => void;
  selectedDataType: DATA_TYPES;
  toRef: Dataset[];
}) => {
  const { schemas } = useContext(AppConfigContext);

  const handleIntitDataType = (type: DATA_TYPES) => {
    let saveObj: FieldDataType;

    if (type === DATA_TYPES.SINGLE_VALUE) {
      saveObj = {
        type,
        fieldType: {
          type: schemas[0].options[0].name,
          parent: schemas[0].parent,
          args: {},
        },
      };
    } else if (type === DATA_TYPES.CUSTOM) {
      saveObj = {
        type,
        code: "function getValue(){\n\treturn 'Buenas'\n}",
        codeType: CODE_TYPES.JAVASCRIPT,
      };
    } else if (type === DATA_TYPES.REF) {
      saveObj = {
        type,
        fieldRef: toRef[0].fields[0].name,
        ref: toRef[0].name,
      };
    } else if (type === DATA_TYPES.MIXED) {
      saveObj = {
        type,
        object: [new CreateIntialData(schemas).createField()],
      };
    } else {
      saveObj = {
        type,
        fieldType: {
          type: schemas[0].options[0].name,
          parent: schemas[0].parent,
          args: {},
        },
      };
    }

    handleChangeDataType(saveObj);
  };

  const divClass = (dat: DATA_TYPES) =>
    clsx(
      "px-12 py-2 text-2xl rounded-lg font-fontExtraBold esm:px-7 esm:text-lg uppercase whitespace-nowrap transition-all duration-300 hover:scale-105",
      { "bg-principal-bg text-white": selectedDataType === dat },
      { "bg-slate-200 text-black": !(selectedDataType === dat) },
      {
        hidden: dat === DATA_TYPES.REF && toRef.length === 0,
      }
    );

  return (
    <div className="w-full h-[80px] esm:h-[65px] flex items-center justify-center gap-5 overflow-auto">
      {Object.values(DATA_TYPES).map((dat, i) => (
        <button
          className={divClass(dat)}
          key={uuid()}
          onClick={() => handleIntitDataType(dat)}
        >
          {DataTransform.titlePipe(dat)}
        </button>
      ))}
    </div>
  );
};

export default DataTypeSelect;
