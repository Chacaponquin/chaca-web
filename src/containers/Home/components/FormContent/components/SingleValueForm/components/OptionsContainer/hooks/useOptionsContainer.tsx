import { DatasetField, SingleValueDataType } from "@modules/datasets/interfaces/datasets.interface"
import { datasetServices } from "@modules/datasets/services"
import { Argument, SubOption } from "@modules/schemas/interfaces/schema.interface"
import { schemasServices } from "@modules/schemas/services"
import { useState } from "react"

export function useOptionsContainer(field: DatasetField<SingleValueDataType>) {
  const { findType } = schemasServices()
  const { selectFieldSchemaOption } = datasetServices()

  const [selectOption, setSelectOption] = useState<string>(
    findType(field.dataType.fieldType.parent, field.dataType.fieldType.type).id,
  )
  const [optionArguments, setOptionArguments] = useState<Argument[]>(
    findType(field.dataType.fieldType.parent, field.dataType.fieldType.type).arguments,
  )

  const handleSelectOption = (option: SubOption) => {
    selectFieldSchemaOption(field, option.name)
    setSelectOption(option.id)
    setOptionArguments(option.arguments)
  }

  return { handleSelectOption, selectOption, optionArguments }
}
