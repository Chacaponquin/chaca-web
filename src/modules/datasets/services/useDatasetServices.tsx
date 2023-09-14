import { DatasetsContext } from "../context"
import { useContext } from "react"
import { DATASETS_ACTIONS } from "../constants"
import { FieldForm } from "../dto/field"
import { Dataset, FieldNode } from "@modules/datasets/domain/tree"
import { useValidations } from "../hooks"
import { DATA_TYPES } from "@modules/schemas/constants"
import { DatasetConnection } from "../interfaces/dataset_connect.interface"
import { DatasetName, FieldName } from "../value-object"
import { PossibleFieldToRef } from "../interfaces/ref.interface"

interface AddFieldProps {
  field: FieldForm
  parentFieldID: string
  datasetId: string
}

interface UpdateFieldProps {
  fieldDTO: FieldForm
  parentFieldID: string
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

export default function useDatasetServices() {
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

  function initDatasets() {
    const USER_DATASET = new Dataset({ name: new DatasetName("User") })
    const id = FieldNode.create({
      dataType: {
        type: DATA_TYPES.SINGLE_VALUE,
        fieldType: { args: {}, schema: "id", option: "uuid" },
      },
      name: new FieldName("id"),
      isKey: true,
    })

    const username = FieldNode.create({
      name: new FieldName("username"),
      dataType: {
        type: DATA_TYPES.SINGLE_VALUE,
        fieldType: { args: {}, schema: "internet", option: "username" },
      },
    })

    const password = FieldNode.create({
      name: new FieldName("password"),
      dataType: {
        type: DATA_TYPES.SINGLE_VALUE,
        fieldType: { args: {}, schema: "internet", option: "password" },
      },
    })

    USER_DATASET.insertField(id)
    USER_DATASET.insertField(username)
    USER_DATASET.insertField(password)

    const POST_DATASET = new Dataset({ name: new DatasetName("Post") })

    const postId = FieldNode.create({
      dataType: {
        type: DATA_TYPES.SINGLE_VALUE,
        fieldType: { args: {}, schema: "id", option: "uuid" },
      },
      name: new FieldName("id"),
      isKey: true,
    })

    const userId = FieldNode.create({
      name: new FieldName("userId"),
      dataType: { type: DATA_TYPES.REF, ref: [USER_DATASET.id, id.id] },
    })

    POST_DATASET.insertField(postId)
    POST_DATASET.insertField(userId)

    return [USER_DATASET, POST_DATASET]
  }

  const handleAddDataset = () => {
    const DATASET_NAME = "New Dataset"

    validateDatasetName({ name: DATASET_NAME })

    // create dataset
    datasetDispatch({
      type: DATASETS_ACTIONS.CREATE_NEW_DATASET,
      payload: { datasetName: new DatasetName(DATASET_NAME) },
    })
  }

  const handleEditDataset = ({ datasetId, name, limit }: EditDatasetProps) => {
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

  const handleUpdateField = ({ datasetId, fieldDTO, parentFieldID }: UpdateFieldProps) => {
    validateFieldName({ parentID: parentFieldID, datasetId, fieldName: fieldDTO.name })

    datasetDispatch({
      type: DATASETS_ACTIONS.EDIT_FIELD,
      payload: {
        field: fieldDTO,
        datasetID: datasetId,
      },
    })
  }

  const handleAddField = ({ datasetId, field, parentFieldID }: AddFieldProps) => {
    validateFieldName({ parentID: parentFieldID, fieldName: field.name, datasetId })

    // crear el field
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
        parentFieldID,
        datasetID: datasetId,
      },
    })
  }

  const hanldeDeleteDataset = (datasetID: string) => {
    datasetDispatch({
      type: DATASETS_ACTIONS.DELETE_DATASET,
      payload: { datasetID },
    })

    handleSelectDataset(datasets[0].id)
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

  const handleDeleteField = ({ datasetId, fieldId }: DeleteFieldProps) => {
    datasetDispatch({
      type: DATASETS_ACTIONS.DELETE_FIELD,
      payload: { fieldID: fieldId, datasetID: datasetId },
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
    return type !== DATA_TYPES.SEQUENTIAL && type !== DATA_TYPES.SEQUENCE && !field.isKey
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
            const found = dat.findFieldByID(fieldToRef)

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
  }: {
    datasetId: string
  }): Array<PossibleFieldToRef> {
    const returnFields = [] as Array<PossibleFieldToRef>

    for (const dat of datasets) {
      if (dat.id !== datasetId) {
        const fields = dat.allPossibleFieldsToRef()

        for (const f of fields) {
          returnFields.push({ fieldId: f.id, location: dat.getFieldLocation(f.id).join(".") })
        }
      }
    }

    return returnFields
  }

  function findField(fieldId?: string): FieldNode | null {
    if (!fieldId) return null

    let found: FieldNode | null = null

    for (let i = 0; i < datasets.length && found === null; i++) {
      found = datasets[i].findFieldByID(fieldId)
    }

    return found
  }

  function findFieldByLocation(fieldLocation: Array<string>): FieldNode | null {
    const id = fieldLocation.at(-1)
    const found = findField(id)

    return found
  }

  return {
    handleAddDataset,
    handleAddField,
    hanldeDeleteDataset,
    handleChangeDocumentsLimit,
    initDatasets,
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
  }
}
