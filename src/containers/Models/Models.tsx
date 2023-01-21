import { RouteContentLoader } from "@modules/shared/components/Loader"
import { EmptyModelsMessage, ModelsFilter, SearchResult, SelectModelContent } from "./components"
import { useModels } from "./hooks"
import { Fragment } from "react"

const Models = () => {
  const { userModels, loading, error, selectModel, handleSelectModel, handleDeleteModel } =
    useModels()

  return (
    <RouteContentLoader loading={loading}>
      <div className='w-full flex h-screen items-start'>
        {userModels.length > 0 ? (
          <Fragment>
            <ModelsFilter />
            <SearchResult
              models={userModels}
              handleSelectModel={handleSelectModel}
              handleDeleteModel={handleDeleteModel}
            />
            <SelectModelContent selectModel={selectModel} />
          </Fragment>
        ) : (
          <EmptyModelsMessage />
        )}
      </div>
    </RouteContentLoader>
  )
}

export default Models
