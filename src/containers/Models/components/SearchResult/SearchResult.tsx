import { SearchInput, SearchResultContainer } from "./components"

export default function SearchResult() {
  return (
    <div className='h-full w-full flex flex-col'>
      <SearchInput />
      <SearchResultContainer />
    </div>
  )
}
