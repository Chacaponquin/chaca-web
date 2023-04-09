import { CreationLoadingModal, FieldsMenu, FormContent } from "./components"
import { useHome } from "./hooks"
import { useContext } from "react"
import { AppConfigContext } from "@modules/shared/context"
import { DatasetsContext } from "@modules/datasets/context"

import "./home.css"

const Home = () => {
  const { handleCreateSelectDataset, handleCreateAllDatasets, createDataLoading, porcent } =
    useHome()

  const { showFieldsMenu } = useContext(DatasetsContext)
  const { smallWindow } = useContext(AppConfigContext)

  return (
    <div className='flex w-full h-full'>
      {createDataLoading && <CreationLoadingModal porcent={porcent} />}

      {(!smallWindow || (smallWindow && showFieldsMenu)) && (
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
