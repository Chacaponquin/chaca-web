import { EditFieldModalProps } from "@containers/Home/domain/modal"
import { Field } from "@modules/datasets/domain/core"
import { useDatasets } from "@modules/datasets/hooks"
import { useModal } from "@modules/modal/hooks"
import { useMemo } from "react"

interface Props {
  field: Field
  datasetId: string
  parentfieldId: string
}

export default function useField({ field, datasetId, parentfieldId }: Props) {
  const { searchRefField } = useDatasets()
  const { handleOpenModal } = useModal()

  const type = useMemo(() => {
    const value = field.stringInf({
      searchRefField: searchRefField,
    })

    return value
  }, [field, searchRefField])

  function handleClick() {
    handleOpenModal(new EditFieldModalProps(field, parentfieldId, datasetId))
  }

  return { handleClick, type }
}
