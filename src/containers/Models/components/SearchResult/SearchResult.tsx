import { UserDatasetModel } from "@containers/Models/interfaces/models.interface"
import { SearchInput, SearchResultContainer } from "./components"

export default function SearchResult({
  models,
  handleSelectModel,
}: {
  models: Array<UserDatasetModel>
  handleSelectModel: (id: string) => void
}) {
  return (
    <div className='h-full w-full flex flex-col'>
      <SearchInput />
      <SearchResultContainer models={models} handleSelectModel={handleSelectModel} />
    </div>
  )
}
