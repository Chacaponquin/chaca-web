import { useDataset } from "@modules/dataset/hooks"
import { useModal } from "@modules/modal/hooks"

interface Props {
  schemaId: string
}

export default function useDeleteSchemaForm({ schemaId }: Props) {
  const { handleCloseModal } = useModal()
  const { handleDeleteSchema: handleDeleteDatasetHook } = useDataset()

  function handleDeleteSchema() {
    handleDeleteDatasetHook(schemaId)
    handleCloseModal()
  }

  return { handleDeleteSchema }
}
