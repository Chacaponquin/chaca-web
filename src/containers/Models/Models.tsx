import { ModelsFilter, SearchResult, SelectModelContent } from "./components"
import { useModels } from "./hooks"

const Models = () => {
  const { userModels, loading, error, selectModel } = useModels()

  return (
    <div className='w-full flex h-screen'>
      <ModelsFilter />
      <SearchResult models={userModels} />
      <SelectModelContent selectModel={selectModel} />
    </div>
  )
}

export default Models
