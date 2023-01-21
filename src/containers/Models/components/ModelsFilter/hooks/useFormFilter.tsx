import { FormLikes, ModelFilterForm } from "@containers/Models/interfaces/filterForm.interface"
import { FILTER_TYPES } from "@modules/shared/constant"
import { useState } from "react"

export function useFormFilter() {
  const [filterForm, setFilterForm] = useState<ModelFilterForm>({
    filterType: FILTER_TYPES.MOST_LIKES,
    likes: { max: 100000, min: 0 },
  })

  const handleChangeLikes = (key: keyof FormLikes, value: number) => {
    setFilterForm({ ...filterForm, likes: { ...filterForm.likes, [key]: value } })
  }

  const handleChangeFilterType = (type: FILTER_TYPES) => {
    setFilterForm({ ...filterForm, filterType: type })
  }

  return { filterForm, handleChangeFilterType, handleChangeLikes }
}
