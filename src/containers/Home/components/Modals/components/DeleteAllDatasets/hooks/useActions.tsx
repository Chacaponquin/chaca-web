import { useDataset } from "@modules/dataset/hooks"
import { useModal } from "@modules/modal/hooks"

export default function useActions() {
  const { handleClearDataset } = useDataset()
  const { handleCloseModal } = useModal()

  function handleNext() {
    handleClearDataset()
    handleCloseModal()
  }

  return { handleNext }
}
