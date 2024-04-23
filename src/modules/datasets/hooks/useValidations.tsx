import { RepeatDatasetNameError, RepeatSameLevelFieldNameError } from "../errors"
import { DatasetsContext } from "../context"
import { useContext } from "react"
import { MixedNode } from "../domain/tree/Field"
import { DatasetName, FieldName } from "../value-object"
import { RootNode } from "../domain/tree"

interface ValidateFieldProps {
  datasetId: string
  parentId: string
  fieldName: FieldName
}

interface ValidateDatasetProps {
  name: DatasetName
  id?: string
}

export default function useValidations() {
  const { datasets } = useContext(DatasetsContext)

  function validateNoDuplicateDataset({ name, id }: ValidateDatasetProps) {
    const found = datasets.filter((d) => d.id !== id).some((d) => d.name === name.value())

    if (found) {
      throw new RepeatDatasetNameError()
    }
  }

  function validateDatasetName(props: ValidateDatasetProps) {
    validateNoDuplicateDataset(props)
  }

  function validateFieldName(props: ValidateFieldProps) {
    validateNoDuplicateLevelFieldName(props)
  }

  function validateNoDuplicateLevelFieldName({
    datasetId,
    fieldName,
    parentId,
  }: ValidateFieldProps) {
    const foundDataset = datasets.find((d) => d.id === datasetId)

    if (foundDataset) {
      let cont = 0
      const findParent = foundDataset.findNodeById(parentId)

      if (findParent) {
        if (findParent instanceof MixedNode || findParent instanceof RootNode) {
          const parentNodes = findParent.utils.nodes

          for (const node of parentNodes) {
            if (node.name === fieldName.value()) {
              cont++
            }
          }
        }
      }

      if (cont >= 1) {
        throw new RepeatSameLevelFieldNameError()
      }
    }
  }

  return { validateDatasetName, validateFieldName }
}
