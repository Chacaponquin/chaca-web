import { ChacaSearchInput } from "@form"
import { FilterButtons, FilterForm } from "./components"

export default function ModelsFilter() {
  return (
    <div className='h-full min-w-[280px] border-r-2 flex flex-col px-3 py-2 gap-3'>
      <ChacaSearchInput />
      <FilterForm />
      <FilterButtons />
    </div>
  )
}
