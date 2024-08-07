import { Modal } from "@modules/modal/components"
import { useActions } from "./hooks"

export default function DeleteAllDatasets() {
  const { handleNext } = useActions()

  return (
    <Modal
      type="delete"
      handleNext={handleNext}
      name="delete-all"
      nextText="Eliminar"
      title="Eliminar todo"
    >
      <p className="text-lg">
        Seguro que desea eliminar{" "}
        <b className="font-fontMedium font-normal dark:text-white">todos los Datasets</b>?
      </p>
    </Modal>
  )
}
