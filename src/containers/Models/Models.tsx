import { RouteContentLoader } from "@modules/shared/components/Loader"
import { EmptyModelsMessage, SearchResult, SelectModelContent } from "./components"
import { useModels } from "./hooks"
import { Fragment } from "react"

const Models = () => {
  const { userModels, loading, selectModel, handleSelectModel, handleDeleteModel } = useModels()

  return (
    <RouteContentLoader loading={loading}>
      <div className='w-full flex h-screen items-start'>
        {userModels.length > 0 ? (
          <Fragment>
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
