import { useState, useContext } from "react"
import { DatasetsContext } from "@modules/datasets/context"
import clsx from "clsx"
import { DatasetField } from "@modules/datasets/interfaces/datasets.interface"
import { DATA_TYPES } from "@modules/schemas/constants"

export function useFieldContainer(field: DatasetField) {
  const { selectField, handleSelectField, selectedDataset } = useContext(DatasetsContext)
  const [openMenu, setOpenMenu] = useState(false)
  const [subFieldsOpen, setSubFieldsOpen] = useState(false)

  const divClass = clsx(
    "w-full flex items-center cursor-pointer justify-between py-1 transition-all duration-300 hover:bg-slate-100 px-2",
    {
      "bg-slate-100": selectField && selectField.id === field.id,
    },
  )

  const handleInteractSubFields = () => {
    setSubFieldsOpen(!subFieldsOpen)
  }

  const handleInteractOpenMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    setOpenMenu(!openMenu)
  }

  const handleSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    if (!(field.dataType.type === DATA_TYPES.MIXED)) handleSelectField(selectedDataset.id, field.id)
  }

  return {
    openMenu,
    handleSelect,
    divClass,
    subFieldsOpen,
    handleInteractSubFields,
    handleInteractOpenMenu,
  }
}
