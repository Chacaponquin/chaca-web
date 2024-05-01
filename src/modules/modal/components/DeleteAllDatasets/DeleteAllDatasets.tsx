import { ModalContainer } from "@modules/modal/shared/components"
import { useActions } from "./hooks"

export default function DeleteAllDatasets() {
  const { handleNext } = useActions()

  return (
    <ModalContainer
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
    </ModalContainer>
  )
}
