import React, { useContext, useCallback } from "react";
import { AppConfigContext } from "../../../../../../shared/context/AppConfigContext";
import { v4 as uuid } from "uuid";
import { DataTransform } from "../../../../../../shared/helpers/DataTransform";
import { FieldOptions } from "../../../../../../shared/interfaces/options.interface";
import {
  DatasetField,
  SingleValueDataType,
} from "../../../../../../shared/interfaces/datasets.interface";
import clsx from "clsx";
import { DATA_TYPES } from "../../../../../../shared/constant/DATA_TYPES";
import FieldInputArgument from "../../../../../../shared/components/FieldInputArgument/FieldInputArgument";
import { FieldArgument } from "../../../../../../shared/interfaces/datasets.interface";

const FormData = ({
  selectField,
  handleChangeSelectField,
}: {
  selectField: DatasetField<SingleValueDataType>;
  handleChangeSelectField: (f: DatasetField<SingleValueDataType>) => void;
}) => {
  const { fieldsOptions } = useContext(AppConfigContext);

  const findParent = useCallback(
    (p: string): FieldOptions => {
      return fieldsOptions.find((el) => el.parent === p)!;
    },
    [fieldsOptions]
  );

  const findArguments = useCallback(
    (p: string, op: string) => {
      const foundParent = fieldsOptions.find((el) => el.parent === p)!;

      return foundParent.fields.find((el) => el.name === op)!.arguments;
    },
    [fieldsOptions]
  );

  const handleChangeParent = (pID: string) => {
    const parentFound = fieldsOptions.find((el) => el.id === pID)!;

    handleChangeSelectField({
      ...selectField,
      dataType: {
        type: DATA_TYPES.SINGLE_VALUE,
        fieldType: {
          args: {},
          parent: parentFound.parent,
          type: parentFound.fields[0].name,
        },
      },
    });
  };

  const handleChangeOption = (o: string) => {
    handleChangeSelectField({
      ...selectField,
      dataType: {
        ...selectField.dataType,
        fieldType: { ...selectField.dataType.fieldType, args: {}, type: o },
      },
    });
  };

  const handleChangeArguments = ({
    value,
    field,
  }: {
    value: FieldArgument;
    field: string;
  }) => {
    handleChangeSelectField({
      ...selectField,
      dataType: {
        ...selectField.dataType,
        fieldType: {
          ...selectField.dataType.fieldType,
          args: {
            ...selectField.dataType.fieldType.args,
            [field]: value,
          },
        },
      },
    });
  };

  const parentClass = (pName: string) => {
    return clsx(
      "text-xl px-8 py-2 font-fontBold cursor-pointer rounded-md text-center whitespace-nowrap",
      {
        "text-white bg-secondColor":
          pName === selectField.dataType.fieldType.parent,
      },
      {
        "text-black bg-slate-100":
          pName !== selectField.dataType.fieldType.parent,
      }
    );
  };

  const optionClass = (oName: string) => {
    return clsx(
      "rounded-md px-5 py-2 text-black flex text-base whitespace-nowrap cursor-pointer flex-col",
      {
        "bg-secondColor text-white":
          selectField.dataType.fieldType.type === oName,
      },
      {
        "bg-slate-100 text-black":
          selectField.dataType.fieldType.type !== oName,
      }
    );
  };

  return (
    <div className="flex">
      <div className="flex flex-col h-full overflow-y-auto gap-2 px-4 w-[200px]">
        {fieldsOptions.map((el) => (
          <div
            key={uuid()}
            className={parentClass(el.parent)}
            onClick={() => handleChangeParent(el.id)}
          >
            {DataTransform.titlePipe(el.parent)}
          </div>
        ))}
      </div>

      <div className="flex flex-col h-full overflow-y-auto gap-3 px-8 w-[500px]">
        {findParent(selectField.dataType.fieldType.parent).fields.map(
          (el, i) => (
            <div
              key={i}
              className={optionClass(el.name)}
              onClick={() => handleChangeOption(el.name)}
            >
              <p className="mb-0 text-lg"> {el.name}</p>

              {selectField.dataType.fieldType.type === el.name && (
                <div className="flex flex-col gap-2">
                  {findArguments(
                    selectField.dataType.fieldType.parent,
                    selectField.dataType.fieldType.type
                  ).map((el, i) => (
                    <div key={i} className="items-center flex text-base gap-2">
                      <p className="mb-0">
                        {DataTransform.titlePipe(el.argument)}:
                      </p>
                      <FieldInputArgument
                        handleChangeArguments={handleChangeArguments}
                        allArguments={selectField.dataType.fieldType.args}
                        arg={el}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FormData;
