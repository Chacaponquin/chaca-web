import { v4 as uuid } from "uuid"
import SearchResultCard from "./SearchResultCard"

export default function SearchResultContainer() {
  return (
    <div className='overflow-y-auto w-full flex flex-col gap-y-3 px-7'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
        <SearchResultCard key={uuid()} />
      ))}
    </div>
  )
}
