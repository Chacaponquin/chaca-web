import { ModelsFilter, SearchResult, SelectModelContent } from "./components"
import { useModels } from "./hooks/useModels"

const Models = () => {
  const { userModels, loading, error } = useModels()

  return (
    <div className='w-full flex h-screen'>
      <ModelsFilter />
      <SearchResult />
      <SelectModelContent />
    </div>
  )
}

export default Models
