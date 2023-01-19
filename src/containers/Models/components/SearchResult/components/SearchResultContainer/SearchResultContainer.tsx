import { UserDatasetModel } from "@containers/Models/interfaces/models.interface"
import SearchResultCard from "../SearchResultCard/SearchResultCard"

export default function SearchResultContainer({
  models,
  handleSelectModel,
}: {
  models: Array<UserDatasetModel>
  handleSelectModel: (id: string) => void
}) {
  return (
    <div className='overflow-y-auto w-full flex flex-col gap-y-3 px-7'>
      {models.length > 0 &&
        models.map((m) => (
          <SearchResultCard key={m._id} model={m} handleSelectModel={handleSelectModel} />
        ))}
    </div>
  )
}
