import { EditFieldModalProps } from "@containers/Home/domain/modal"
import { Field } from "@modules/dataset/domain/core/field"
import { useDataset } from "@modules/dataset/hooks"
import { useModal } from "@modules/modal/hooks"
import { useMemo } from "react"

interface Props {
  field: Field
  schemaId: string
  parentfieldId: string
}

export default function useField({ field, schemaId, parentfieldId }: Props) {
  const { searchRefField } = useDataset()
  const { handleOpenModal } = useModal()

  const type = useMemo(() => {
    const value = field.stringInf({
      searchRefField: searchRefField,
    })

    return value
  }, [field, searchRefField])

  function handleClick() {
    handleOpenModal(new EditFieldModalProps(field, parentfieldId, schemaId))
  }

  return { handleClick, type }
}
