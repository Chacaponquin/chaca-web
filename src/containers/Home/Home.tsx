import { CreationLoadingModal, FieldsMenu, FormContent } from "./components"
import { useHome } from "./hooks"
import { useContext } from "react"
import { DatasetsContext } from "@modules/datasets/context"

import "./home.css"

const Home = () => {
  const { handleCreateSelectDataset, handleCreateAllDatasets, createDataLoading, porcent } =
    useHome()

  const { showFieldsMenu } = useContext(DatasetsContext)

  return (
    <div className='flex w-full h-full'>
      {createDataLoading && <CreationLoadingModal porcent={porcent} />}

      {showFieldsMenu && (
        <FieldsMenu
          handleCreateAllDatasets={handleCreateAllDatasets}
          handleCreateSelectDataset={handleCreateSelectDataset}
        />
      )}

      <FormContent />
    </div>
  )
}

export default Home
