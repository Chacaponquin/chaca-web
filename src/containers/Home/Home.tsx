import { CreationLoadingModal, FieldsMenu } from "./components"
import { useHome } from "./hooks"
import { useContext } from "react"
import { AppContext } from "@modules/app/context"
import { DatasetsContext } from "@modules/datasets/context"
import { LazyRoute } from "@modules/app/components"

import "./home.css"

const Home = () => {
  const { handleCreateSelectDataset, createDataLoading } = useHome()

  const { showFieldsMenu } = useContext(DatasetsContext)
  const { smallWindow } = useContext(AppContext)

  return (
    <LazyRoute>
      <div className='flex w-full h-full'>
        {createDataLoading && <CreationLoadingModal />}

        {(!smallWindow || (smallWindow && showFieldsMenu)) && (
          <FieldsMenu handleCreateSelectDataset={handleCreateSelectDataset} />
        )}
      </div>
    </LazyRoute>
  )
}

export default Home
