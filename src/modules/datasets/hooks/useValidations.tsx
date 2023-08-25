import { useContext } from "react"
import { DatasetsContext } from "../context"
import {
  EmptyDatasetNameError,
  EmptyFieldNameError,
  RepeatDatasetNameError,
  RepeatSameLevelFieldNameError,
} from "../errors"

export function useValidations() {
  const { datasets, selectedDataset } = useContext(DatasetsContext)

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
    if (datasetName === "") {
      throw new EmptyDatasetNameError()
    }

    validateNoDuplicateDataset(datasetName)
  }

  const validateFieldName = (fieldID: string, fieldName: string) => {
    if (fieldName === "") {
      throw new EmptyFieldNameError()
    }

    validateNoDuplicateLevelFieldName(fieldID, fieldName)
  }

  const validateNoDuplicateLevelFieldName = (parentID: string, fieldName: string) => {
    let cont = 0

    const findParent = selectedDataset.findNodeByID(parentID)

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

  return { validateDatasetName, validateFieldName }
}
