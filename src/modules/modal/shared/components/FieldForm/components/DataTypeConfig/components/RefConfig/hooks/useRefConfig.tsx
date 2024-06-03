import { DatasetFunctions } from "@modules/datasets/constants"
import { useDatasets } from "@modules/datasets/hooks"
import { RefWhere } from "@modules/datasets/interfaces/dataset-field"
import { useCode } from "@modules/modal/hooks"

interface Props {
  datasetId: string
  fieldId: string
  where: RefWhere
  handleChangeRefWhere(value: RefWhere): void
}

export default function useRefConfig({ datasetId, fieldId, handleChangeRefWhere, where }: Props) {
  const { searchPossibleFieldsToRef } = useDatasets()
  const { handleOpen } = useCode()

  const possibleFields = searchPossibleFieldsToRef({ datasetId: datasetId, fieldId: fieldId })

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
