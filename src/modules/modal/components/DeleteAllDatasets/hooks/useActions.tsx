import { useDatasets } from "@modules/datasets/hooks"
import { useModal } from "@modules/modal/hooks"

export default function useActions() {
  const { handleClearDatasets } = useDatasets()
  const { handleCloseModal } = useModal()

  function handleNext() {
    handleClearDatasets()
    handleCloseModal()
  }

  return { handleNext }
}
