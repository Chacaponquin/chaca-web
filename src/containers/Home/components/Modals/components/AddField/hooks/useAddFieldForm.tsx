import { useDataset, useDatatypes } from "@modules/dataset/hooks"
import { useFieldForm } from "../../../shared/hooks"
import { useModal } from "@modules/modal/hooks"
import { useToast } from "@modules/app/modules/toast/hooks"
import { Id } from "@modules/shared/domain/id"
import { useMemo } from "react"

interface Props {
  parentfieldId: string
  schemaId: string
}

export default function useAddFieldForm({ schemaId, parentfieldId }: Props) {
  const fieldId = useMemo(() => Id.generate(), [])

  const { toastChacaError } = useToast()

  const { DEFAULT_MODULE_VALUE_DATATYPE } = useDatatypes({
    schemaId: schemaId,
    fieldId: fieldId,
  })

  const { handleCloseModal } = useModal()
  const { handleAddField: handleAddFieldHook } = useDataset()

  const fieldActions = useFieldForm({
    field: {
      id: fieldId,
      name: "",
      isArray: null,
      isPossibleNull: 0,
      datatype: DEFAULT_MODULE_VALUE_DATATYPE,
      isKey: false,
    },
    schemaId: schemaId,
  })

  function handleAddField() {
    const field = fieldActions.field

    handleAddFieldHook({
      schemaId: schemaId,
      field: {
        name: fieldActions.field.name.trim(),
        datatype: field.datatype,
        id: field.id,
        isArray: field.isArray,
        isKey: field.isKey,
        isPossibleNull: field.isPossibleNull,
      },
      parentfieldId: parentfieldId,
      success() {
        handleCloseModal()
      },
      error: toastChacaError,
    })
  }

  return { handleAddField, fieldActions }
}
