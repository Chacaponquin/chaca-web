import { UserDatasetModel } from "@containers/Models/interfaces/models.interface"
import { SearchResultCard } from "./components"

export default function SearchResult({
  models,
  handleSelectModel,
  handleDeleteModel,
}: {
  models: Array<UserDatasetModel>
  handleSelectModel: (id: string) => void
  handleDeleteModel: (id: string) => void
}) {
  return (
    <div className='h-full w-full flex flex-col py-4 overflow-y-auto px-7 gap-y-3'>
      {models.map((m) => (
        <SearchResultCard
          key={m._id}
          model={m}
          handleSelectModel={handleSelectModel}
          handleDeleteModel={handleDeleteModel}
        />
      ))}
    </div>
  )
}
