import { useToast } from "@modules/app/modules/toast/hooks"
import { Schema } from "@modules/dataset/domain/core/schema"
import { useDataset } from "@modules/dataset/hooks"
import { useModal } from "@modules/modal/hooks"
import { useState } from "react"

interface Props {
  schema: Schema
}

export default function useEditSchema({ schema }: Props) {
  const { handleEditSchema } = useDataset()
  const { handleCloseModal } = useModal()
  const { toastChacaError } = useToast()

  const [datasetName, setDatasetName] = useState(schema.name)
  const [datasetLimit, setDatasetLimit] = useState(schema.limit)

  function handleDatasetName(name: string) {
    setDatasetName(name)
  }

  function handleChangeLimit(limit: number) {
    setDatasetLimit(limit)
  }

  function handleNext() {
    handleEditSchema({
      schemaId: schema.id,
      name: datasetName.trim(),
      limit: datasetLimit,
      success() {
        handleCloseModal()
      },
      error: toastChacaError,
    })
  }

  return { datasetName, handleDatasetName, handleNext, handleChangeLimit, datasetLimit }
}
