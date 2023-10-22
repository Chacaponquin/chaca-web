import { RepeatDatasetNameError, RepeatSameLevelFieldNameError } from "../errors"
import { DatasetsContext } from "../context"
import { useContext } from "react"
import { MixedNode } from "../domain/tree/FieldNode"

interface ValidateFieldProps {
  datasetId: string
  parentID: string
  fieldName: string
}

interface ValidateDatasetProps {
  name: string
  id?: string
}

export function useValidations() {
  const { datasets } = useContext(DatasetsContext)

  const validateNoDuplicateDataset = ({ name, id }: ValidateDatasetProps) => {
    const found = datasets.filter((d) => d.id !== id).some((d) => d.name === name)

    if (found) {
      throw new RepeatDatasetNameError()
    }
  }

  const validateDatasetName = (props: ValidateDatasetProps) => {
    validateNoDuplicateDataset(props)
  }

  const validateFieldName = (props: ValidateFieldProps) => {
    validateNoDuplicateLevelFieldName(props)
  }

  const validateNoDuplicateLevelFieldName = ({
    datasetId,
    fieldName,
    parentID,
  }: ValidateFieldProps) => {
    const foundDataset = datasets.find((d) => d.id === datasetId)

    if (foundDataset) {
      let cont = 0
      const findParent = foundDataset.findNodeById(parentID)

      if (findParent) {
        if (findParent instanceof MixedNode) {
          const parentNodes = findParent.nodesUtils.nodes

          for (let i = 0; i < parentNodes.length; i++) {
            if (parentNodes[i].name === fieldName) {
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
