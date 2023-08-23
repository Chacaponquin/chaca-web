import { CreationLoadingModal, DatasetPlayground, FieldsMenu } from "./components"
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
      <main className='flex w-full h-full'>
        {createDataLoading && <CreationLoadingModal />}

        {(!smallWindow || (smallWindow && showFieldsMenu)) && <FieldsMenu />}

        <DatasetPlayground handleCreateSelectDataset={handleCreateSelectDataset} />
      </main>
    </LazyRoute>
  )
}

export default Home
