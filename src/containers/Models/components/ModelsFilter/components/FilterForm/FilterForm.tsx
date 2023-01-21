import { useFormFilter } from "../../hooks"
import { FilterSelect, LikesSection } from "./components"

export default function FilterForm() {
  const { filterForm, handleChangeFilterType, handleChangeLikes } = useFormFilter()

  return (
    <div className='flex flex-col w-full gap-y-5'>
      <FilterSelect
        filterType={filterForm.filterType}
        handleChangeFilterType={handleChangeFilterType}
      />
      <LikesSection filterLikes={filterForm.likes} handleChangeLikes={handleChangeLikes} />
    </div>
  )
}
