import { useState } from "react"
import { useDelete, useQuery } from "@modules/shared/modules/http/hooks"
import { API_ROUTES } from "@modules/shared/routes"
import { UserDatasetModel } from "../interfaces/models.interface"

export function useModels() {
  const [userModels, setUserModels] = useState<Array<UserDatasetModel>>([])
  const [selectModel, setSelectModel] = useState<UserDatasetModel | null>(null)

  const [deleteModel] = useDelete()

  const { loading, error } = useQuery<Array<UserDatasetModel>>({
    url: API_ROUTES.GET_MY_MODELS,
    onCompleted: (models) => {
      setUserModels(models)

      if (models.length > 0) {
        setSelectModel(models[0])
      }
    },
  })

  const handleDeleteModel = (modelID: string) => {
    deleteModel({
      url: `${API_ROUTES.DELETE_MODEL}/${modelID}`,
      onCompleted: () => {
        setUserModels(userModels.filter((m) => m._id !== modelID))
      },
    })
  }

  const handleSelectModel = (id: string) => {
    const foundModel = userModels.find((m) => m._id === id)
    if (foundModel) setSelectModel(foundModel)
  }

  return { userModels, loading, error, selectModel, handleSelectModel, handleDeleteModel }
}
