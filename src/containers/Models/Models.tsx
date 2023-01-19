import { RouteContentLoader } from "@modules/shared/components/Loader"
import { ModelsFilter, SearchResult, SelectModelContent } from "./components"
import { useModels } from "./hooks"

const Models = () => {
  const { userModels, loading, error, selectModel, handleSelectModel } = useModels()

  return (
    <RouteContentLoader loading={loading}>
      <div className='w-full flex h-screen'>
        <ModelsFilter />
        <SearchResult models={userModels} handleSelectModel={handleSelectModel} />
        <SelectModelContent selectModel={selectModel} />
      </div>
    </RouteContentLoader>
  )
}

export default Models
