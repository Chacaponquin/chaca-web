import React from "react";
import FieldOptionDiv from "./FieldOptionDiv";
import ParentDiv from "./ParentDiv";

const SingleValueForm = ({
  handleChangeDataType,
  fieldInfo,
  fieldsOptions,
}) => {
  const handleChangeArguments = ({ value, field }) => {
    const { dataType } = fieldInfo;

    const newArguments = {
      ...dataType,
      fieldType: {
        ...dataType.fieldType,
        args: { ...dataType.fieldType.args, [field]: value },
      },
    };

    handleChangeDataType(newArguments);
  };

  const handleChangeOptionSelected = (field) => {
    if (fieldInfo.dataType.fieldType.type.name !== field.name) {
      const { dataType } = fieldInfo;

      const newDatatype = {
        ...dataType,
        fieldType: { ...dataType.fieldType, type: field, args: {} },
      };

      handleChangeDataType(newDatatype);
    }
  };

  const handleChangeParentSelected = (parent) => {
    const { dataType } = fieldInfo;

    const newDataType = {
      ...dataType,
      fieldType: { parent, type: parent.fields[0], args: {} },
    };

    handleChangeDataType(newDataType);
  };

  return (
    <>
      <div className="flex sm:flex-col items-center gap-3 px-2 sm:h-full overflow-auto sm:w-[230px] w-full sm:py-0 py-2 min-h-[80px]">
        {fieldsOptions.map((el, i) => (
          <ParentDiv
            key={i}
            parent={el}
            handleChangeParentSelected={handleChangeParentSelected}
            isSelected={el.id === fieldInfo.dataType.fieldType.parent.id}
          />
        ))}
      </div>

      <div className="sm:h-full grid xl:grid-cols-4 grid-cols-2 esm:grid-cols-1 auto-rows-max overflow-auto gap-3 w-full">
        {fieldInfo.dataType.fieldType.parent &&
          fieldInfo.dataType.fieldType.parent.fields.map((el, i) => (
            <FieldOptionDiv
              field={el}
              key={i}
              isSelected={el.name === fieldInfo.dataType.fieldType.type.name}
              handleChangeOptionSelected={handleChangeOptionSelected}
              handleChangeArguments={handleChangeArguments}
              allArguments={fieldInfo.dataType.fieldType.args}
            />
          ))}
      </div>
    </>
  );
};

export default SingleValueForm;
