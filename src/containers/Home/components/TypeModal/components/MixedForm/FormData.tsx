import React, { useContext, useCallback } from "react";
import { AppConfigContext } from "../../../../../../shared/context/AppConfigContext";
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
import { Checkbox } from "primereact/checkbox";
import { InputNumber } from "primereact/inputnumber";

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
    if (selectField.dataType.fieldType.type !== o)
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
      "rounded-md px-5 py-2 flex text-base whitespace-nowrap cursor-pointer flex-col",
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
    <div className="flex xl:flex-row flex-col xl:gap-0 gap-3">
      <div className="flex xl:flex-col flex-row w-full xl:h-full py-2 xl:py-0 overflow-auto gap-2 px-4 xl:w-[200px]">
        {fieldsOptions.map((el) => (
          <div
            key={el.id}
            className={parentClass(el.parent)}
            onClick={() => handleChangeParent(el.id)}
          >
            {DataTransform.titlePipe(el.parent)}
          </div>
        ))}
      </div>

      <div className="xl:flex xl:flex-col grid grid-cols-1 md:grid-cols-2 xl:h-full overflow-y-auto gap-3 xl:px-8 w-full xl:w-[500px] pb-4 no-scroll">
        {findParent(selectField.dataType.fieldType.parent).fields.map(
          (el, i) => (
            <div
              key={i}
              className={optionClass(el.name)}
              onClick={() => handleChangeOption(el.name)}
            >
              <p className="mb-0 text-lg font-fontBold"> {el.name}</p>

              {selectField.dataType.fieldType.type === el.name && (
                <div>
                  <div className="flex flex-col gap-2">
                    {findArguments(
                      selectField.dataType.fieldType.parent,
                      selectField.dataType.fieldType.type
                    ).map((a, i) => (
                      <div
                        key={i}
                        className="items-center flex text-base gap-2"
                      >
                        <p className="mb-0">
                          {DataTransform.titlePipe(a.argument)}:
                        </p>
                        <FieldInputArgument
                          handleChangeArguments={handleChangeArguments}
                          allArguments={selectField.dataType.fieldType.args}
                          arg={a}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 mt-3">
                    <div className="flex items-start">
                      <Checkbox
                        checked={selectField.isArray ? true : false}
                        onChange={(e) => {
                          handleChangeSelectField({
                            ...selectField,
                            isArray: e.target.checked
                              ? { min: 0, max: 10 }
                              : false,
                          });
                        }}
                      />
                      <p className="mb-0 ml-2 mr-4">IsArray:</p>

                      {selectField.isArray && (
                        <div className="flex items-center gap-2 text-sm exsm:flex-col">
                          <div className="flex items-center gap-2">
                            <p className="mb-0">Min:</p>
                            <InputNumber
                              step={1}
                              min={1}
                              value={selectField.isArray.min}
                              max={selectField.isArray.max}
                              onChange={(e) => {
                                if (selectField.isArray)
                                  handleChangeSelectField({
                                    ...selectField,
                                    isArray: {
                                      ...selectField.isArray,
                                      min: e.value || 1,
                                    },
                                  });
                              }}
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="mb-0">Max:</p>
                            <InputNumber
                              step={1}
                              value={selectField.isArray.max}
                              max={150}
                              min={selectField.isArray.min}
                              onChange={(e) => {
                                if (selectField.isArray)
                                  handleChangeSelectField({
                                    ...selectField,
                                    isArray: {
                                      ...selectField.isArray,
                                      max: e.value || 10,
                                    },
                                  });
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex">
                      <Checkbox
                        checked={selectField.isPosibleNull}
                        onChange={(e) => {
                          handleChangeSelectField({
                            ...selectField,
                            isPosibleNull: e.target.checked,
                          });
                        }}
                      />
                      <p className="mb-0 ml-2">Possibly Null:</p>
                    </div>
                  </div>
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
