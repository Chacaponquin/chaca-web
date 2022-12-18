import { useCallback, useContext } from "react";
import { DATA_TYPES } from "../../../../../../shared/constant/DATA_TYPES";
import { AppConfigContext } from "../../../../../../shared/context/AppConfigContext";
import {
  FieldArgument,
  FieldDataType,
} from "../../../../../../shared/interfaces/datasets.interface";
import FieldOptionDiv from "./FieldOptionDiv";
import ParentDiv from "./ParentDiv";
import { v4 as uuid } from "uuid";
import React from "react";
import { Schema } from "../../../../../../shared/interfaces/options.interface";

const SingleValueForm = ({
  handleChangeDataType,
  fieldInfo,
}: {
  handleChangeDataType: (obj: FieldDataType) => void;
  fieldInfo: {
    fieldID: string;
    dataType: FieldDataType;
  };
}) => {
  const { schemas } = useContext(AppConfigContext);

  const handleChangeArguments = ({
    value,
    field,
  }: {
    field: string;
    value: FieldArgument;
  }) => {
    if (fieldInfo.dataType.type === DATA_TYPES.SINGLE_VALUE) {
      const newArguments: FieldDataType = {
        type: DATA_TYPES.SINGLE_VALUE,
        fieldType: {
          ...fieldInfo.dataType.fieldType,
          args: { ...fieldInfo.dataType.fieldType.args, [field]: value },
        },
      };

      handleChangeDataType(newArguments);
    }
  };

  const handleChangeOptionSelected = (field: string) => {
    if (fieldInfo.dataType.type === DATA_TYPES.SINGLE_VALUE) {
      if (fieldInfo.dataType.fieldType.type !== field) {
        const newDatatype = {
          ...fieldInfo.dataType,
          fieldType: { ...fieldInfo.dataType.fieldType, type: field, args: {} },
        };

        handleChangeDataType(newDatatype);
      }
    }
  };

  const handleChangeParentSelected = (parent: string) => {
    const foundParent = schemas.find((el) => el.parent === parent)!;

    const newDataType: FieldDataType = {
      type: DATA_TYPES.SINGLE_VALUE,
      fieldType: {
        parent: foundParent.parent,
        args: {},
        type: foundParent.options[0].name,
      },
    };

    handleChangeDataType(newDataType);
  };

  const findParent = useCallback(
    (p: string): Schema => {
      return schemas.find((el) => el.parent === p)!;
    },
    [schemas]
  );

  return (
    <React.Fragment>
      <div className="flex sm:flex-col items-center gap-3 px-2 sm:h-full overflow-auto sm:w-[230px] w-full sm:py-0 py-2 min-h-[80px]">
        {schemas.map((el, i) => (
          <ParentDiv
            key={uuid()}
            parent={el.parent}
            handleChangeParentSelected={handleChangeParentSelected}
            isSelected={
              fieldInfo.dataType.type === DATA_TYPES.SINGLE_VALUE &&
              el.parent === fieldInfo.dataType.fieldType.parent
            }
          />
        ))}
      </div>

      <div className="sm:h-full grid xl:grid-cols-4 grid-cols-2 esm:grid-cols-1 auto-rows-max overflow-auto gap-3 w-full">
        {fieldInfo.dataType.type === DATA_TYPES.SINGLE_VALUE &&
          findParent(fieldInfo.dataType.fieldType.parent).options.map(
            (el, i) => (
              <FieldOptionDiv
                option={el}
                key={i}
                isSelected={
                  fieldInfo.dataType.type === DATA_TYPES.SINGLE_VALUE &&
                  el.name === fieldInfo.dataType.fieldType.type
                }
                handleChangeOptionSelected={handleChangeOptionSelected}
                handleChangeArguments={handleChangeArguments}
                allArguments={
                  fieldInfo.dataType.type === DATA_TYPES.SINGLE_VALUE
                    ? fieldInfo.dataType.fieldType.args
                    : {}
                }
              />
            )
          )}
      </div>
    </React.Fragment>
  );
};

export default SingleValueForm;
