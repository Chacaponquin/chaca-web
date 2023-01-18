import { UserDatasetModel } from "@containers/Models/interfaces/models.interface"
import { SearchInput, SearchResultContainer } from "./components"

export default function SearchResult({ models }: { models: Array<UserDatasetModel> }) {
  return (
    <div className='h-full w-full flex flex-col'>
      <SearchInput />
      <SearchResultContainer models={models} />
    </div>
  )
}
