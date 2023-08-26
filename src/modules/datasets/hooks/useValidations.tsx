import { RepeatDatasetNameError, RepeatSameLevelFieldNameError } from "../errors"
import { DatasetsContext } from "../context"
import { useContext } from "react"

interface ValidateFieldProps {
  datasetId: string
  parentID: string
  fieldName: string
}

export function useValidations() {
  const { datasets } = useContext(DatasetsContext)

  const validateNoDuplicateDataset = (datasetName: string) => {
    let cont = 0
    for (const dat of datasets) {
      if (dat.name === datasetName) {
        cont++
      }
    }

    if (cont >= 1) {
      throw new RepeatDatasetNameError()
    }
  }

  const validateDatasetName = (datasetName: string) => {
    validateNoDuplicateDataset(datasetName)
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
      const findParent = foundDataset.findNodeByID(parentID)

      if (findParent) {
        const parentNodes = findParent.nodes

        for (let i = 0; i < parentNodes.length; i++) {
          if (parentNodes[i].name === fieldName) {
            cont++
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
