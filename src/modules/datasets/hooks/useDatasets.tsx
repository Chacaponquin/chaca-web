import { DatasetsContext } from "../context"
import { useContext } from "react"
import { DATASETS_ACTIONS } from "../constants"
import { FieldForm } from "../dto/field"
import { Dataset, FieldNode } from "@modules/datasets/domain/tree"
import { useValidations } from "."
import { DATA_TYPES } from "@modules/schemas/constants"
import { DatasetConnection } from "../interfaces/dataset_connect"
import { DatasetName, FieldName } from "../value-object"
import { PossibleFieldToRef } from "../interfaces/ref.interface"
import { ExportDatatype, FieldDataType } from "../interfaces/dataset_field"

interface AddFieldProps {
  field: FieldForm
  parentfieldId: string
  datasetId: string
}

interface UpdateFieldProps {
  field: FieldForm
  parentfieldId: string
  datasetId: string
}

interface EditDatasetProps {
  name: string
  datasetId: string
  limit: number
}

interface DeleteFieldProps {
  datasetId: string
  fieldId: string
}

interface SearchRefFieldsProps {
  datasetId: string
  fieldId: string
}

export default function useDatasets() {
  const {
    datasetDispatch,
    selectedDataset,
    datasets,
    handleSelectDataset,
    showFieldsMenu,
    handleCloseFieldsMenu,
    handleOpenFieldsMenu,
  } = useContext(DatasetsContext)

  const { validateDatasetName, validateFieldName } = useValidations()

  function handleAddDataset() {
    datasetDispatch({
      type: DATASETS_ACTIONS.CREATE_NEW_DATASET,
    })
  }

  function handleEditDataset({ datasetId, name, limit }: EditDatasetProps) {
    validateDatasetName({ name, id: datasetId })

    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_DATASET_NAME,
      payload: { datasetID: datasetId, newName: new DatasetName(name) },
    })

    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_DATASET_LIMIT,
      payload: { datasetID: datasetId, newLimit: limit },
    })
  }

  function handleUpdateField({ datasetId, field, parentfieldId }: UpdateFieldProps) {
    validateFieldName({ parentId: parentfieldId, datasetId, fieldName: field.name })

    datasetDispatch({
      type: DATASETS_ACTIONS.EDIT_FIELD,
      payload: {
        field: field,
        datasetID: datasetId,
      },
    })
  }

  function handleAddField({ datasetId, field, parentfieldId }: AddFieldProps) {
    validateFieldName({ parentId: parentfieldId, fieldName: field.name, datasetId })

    datasetDispatch({
      type: DATASETS_ACTIONS.ADD_NEW_FIELD,
      payload: {
        fieldInfo: {
          name: new FieldName(field.name),
          isArray: field.isArray,
          isPossibleNull: field.isPossibleNull,
          dataType: field.dataType,
          isKey: field.isKey,
        },
        parentfieldId,
        datasetID: datasetId,
      },
    })
  }

  function hanldeDeleteDataset(datasetID: string) {
    datasetDispatch({
      type: DATASETS_ACTIONS.DELETE_DATASET,
      payload: { datasetID },
    })

    if (datasets.length) {
      handleSelectDataset(datasets[0].id)
    }
  }

  function handleChangeDocumentsLimit(datasetId: string, limit: number) {
    datasetDispatch({
      type: DATASETS_ACTIONS.CHANGE_DATASET_LIMIT,
      payload: {
        datasetID: datasetId,
        newLimit: limit,
      },
    })
  }

  function handleDeleteField({ datasetId, fieldId }: DeleteFieldProps) {
    datasetDispatch({
      type: DATASETS_ACTIONS.DELETE_FIELD,
      payload: { fieldId: fieldId, datasetID: datasetId },
    })
  }

  function fieldCanBeKey(field: FieldForm): boolean {
    const type = field.dataType.type
    return type !== DATA_TYPES.SEQUENTIAL && type !== DATA_TYPES.MIXED && type !== DATA_TYPES.ENUM
  }

  function fieldCanBeArray(field: FieldForm): boolean {
    const type = field.dataType.type
    return type !== DATA_TYPES.SEQUENTIAL && type !== DATA_TYPES.SEQUENCE && !field.isKey
  }

  function fieldCanBeNull(field: FieldForm): boolean {
    const type = field.dataType.type
    return type !== DATA_TYPES.SEQUENCE && !field.isKey
  }

  function getDatasetConnections({ dataset }: { dataset: Dataset }): Array<DatasetConnection> {
    const connections: Array<DatasetConnection> = []
    const refFields = dataset.refFields()

    for (const dat of datasets) {
      if (dat !== dataset) {
        refFields.forEach((f) => {
          const saveConnection: DatasetConnection = { from: f.id, to: [] }
          const fieldToRef = f.dataType.ref.at(-1)

          if (fieldToRef) {
            const found = dat.findFieldById(fieldToRef)

            if (found) {
              saveConnection.to.push(fieldToRef)
            }
          }

          connections.push(saveConnection)
        })
      }
    }

    return connections
  }

  function get(index: number): Dataset {
    return datasets[index]
  }

  function searchPossibleFieldsToRef({
    datasetId,
    fieldId,
  }: SearchRefFieldsProps): Array<PossibleFieldToRef> {
    const returnFields = [] as Array<PossibleFieldToRef>

    for (const dat of datasets) {
      if (dat.id !== datasetId) {
        const fields = dat.allPossibleFieldsToRef()

        for (const f of fields) {
          if (fieldId !== f.id) {
            returnFields.push({
              locationIds: dat.getFieldLocationIds(f.id).join("."),
              locationNames: dat.getFieldLocation(f.id).join("."),
            })
          }
        }
      }
    }

    return returnFields
  }

  function findField(fieldId?: string): FieldNode<FieldDataType, ExportDatatype> | null {
    if (!fieldId) {
      return null
    }

    let found: FieldNode<FieldDataType, ExportDatatype> | null = null

    for (let i = 0; i < datasets.length && found === null; i++) {
      found = datasets[i].findFieldById(fieldId)
    }

    return found
  }

  function findFieldByLocation(
    fieldLocation: Array<string>,
  ): FieldNode<FieldDataType, ExportDatatype> | null {
    const id = fieldLocation.at(-1)
    const found = findField(id)

    return found
  }

  function searchRefField(ref: Array<string>): Array<string> {
    const result = [] as Array<string>

    const datasetId = ref[0]
    const refFields = ref.slice(1)

    const foundDataset = datasets.find((d) => d.id === datasetId)

    if (foundDataset) {
      result.push(foundDataset.name)

      for (const refId of refFields) {
        for (const dataset of datasets) {
          if (dataset.id === datasetId) {
            const found = dataset.findFieldById(refId)

            if (found) {
              result.push(found.name)
              break
            }
          }
        }
      }
    }

    return result
  }

  return {
    handleAddDataset,
    handleAddField,
    hanldeDeleteDataset,
    handleChangeDocumentsLimit,
    handleEditDataset,
    handleUpdateField,
    fieldCanBeKey,
    fieldCanBeNull,
    fieldCanBeArray,
    selectedDataset,
    datasets,
    getDatasetConnections,
    showFieldsMenu,
    handleCloseFieldsMenu,
    handleDeleteField,
    get,
    handleSelectDataset,
    findField,
    searchPossibleFieldsToRef,
    findFieldByLocation,
    handleOpenFieldsMenu,
    searchRefField,
  }
}
