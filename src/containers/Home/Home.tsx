import { CreationLoadingModal, FieldsMenu, FormContent } from "./components"
import { useHome } from "./hooks"

import "./home.css"

const Home = () => {
  const { handleCreateSelectDataset, handleCreateAllDatasets, createDataLoading, porcent } =
    useHome()

  return (
    <div className='flex w-full h-full'>
      {createDataLoading && <CreationLoadingModal porcent={porcent} />}

      <FieldsMenu
        handleCreateAllDatasets={handleCreateAllDatasets}
        handleCreateSelectDataset={handleCreateSelectDataset}
      />
      <FormContent />
    </div>
  )
}

export default Home
