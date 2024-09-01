import { DatasetFunctions } from "@modules/dataset/domain/constants"
import { useDataset } from "@modules/dataset/hooks"
import { RefWhere } from "@modules/dataset/domain/core/datatype"
import { useCode } from "@modules/modal/hooks"

interface Props {
  schemaId: string
  fieldId: string
  where: RefWhere
  handleChangeRefWhere(value: RefWhere): void
}

export default function useRefConfig({ schemaId, fieldId, handleChangeRefWhere, where }: Props) {
  const { searchPossibleFieldsToRef } = useDataset()
  const { handleOpen } = useCode()

  const possibleFields = searchPossibleFieldsToRef({ schemaId: schemaId, fieldId: fieldId })

  function handleChangeWhere(value: boolean) {
    if (value) {
      handleChangeRefWhere(DatasetFunctions.where())
    } else {
      handleChangeRefWhere(null)
    }
  }

  function handleClick() {
    if (where !== null) {
      handleOpen({
        code: where,
        handleChange(v) {
          handleChangeRefWhere(v)
        },
        language: "javascript",
      })
    }
  }

  return { possibleFields, handleClick, handleChangeWhere }
}
