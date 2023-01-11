import { useContext, useState } from "react"
import { Argument, SubOption } from "../../../../../../../shared/interfaces/options.interface"
import {
  DatasetField,
  SingleValueDataType,
} from "../../../../../../../shared/interfaces/datasets.interface"
import { DatasetsContext } from "../../../../../../../shared/context/DatasetsContext"
import { DATASETS_ACTIONS } from "../../../../../constants/ACTION_TYPES"
import { DATA_TYPES } from "../../../../../../../shared/constant/DATA_TYPES"
import { useUtils } from "../../../../../hooks/useUtils"
import Option from "./Option"

const OptionsContainer = ({
  options,
  field,
}: {
  options: SubOption[]
  field: DatasetField<SingleValueDataType>
}) => {
  const { datasetDispatch, selectedDataset } = useContext(DatasetsContext)
  const { findType } = useUtils()

  const [selectOption, setSelectOption] = useState<string>(
    findType(field.dataType.fieldType.parent, field.dataType.fieldType.type).id,
  )
  const [optionArguments, setOptionArguments] = useState<Argument[]>(
    findType(field.dataType.fieldType.parent, field.dataType.fieldType.type).arguments,
  )

  const handleSelectOption = (option: SubOption) => {
    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_FIELD_DATATYPE,
      payload: {
        datasetID: selectedDataset.id,
        fieldID: field.id,
        dataType: {
          type: DATA_TYPES.SINGLE_VALUE,
          fieldType: {
            args: {},
            parent: field.dataType.fieldType.parent,
            type: option.name,
          },
        },
      },
    })

    setSelectOption(option.id)
    setOptionArguments(option.arguments)
  }

  return (
    <div className='flex flex-col gap-1 px-5'>
      {options.map((o) => (
        <Option
          option={o}
          key={o.id}
          args={optionArguments}
          field={field}
          handleSelectOption={() => handleSelectOption(o)}
          isSelected={selectOption === o.id}
        />
      ))}
    </div>
  )
}

export default OptionsContainer
