import { CreationLoadingModal, FieldsMenu, FormContent } from "./components"
import { useHome } from "./hooks"
import { useContext } from "react"
import { ModalContext } from "@modules/modal/context"
import { Modal } from "@modules/modal/components"

import "./home.css"

const Home = () => {
  const { openModal } = useContext(ModalContext)
  const { handleCreateSelectDataset, handleCreateAllDatasets, createDataLoading, porcent } =
    useHome()

  return (
    <div className='flex w-full h-full'>
      {createDataLoading && <CreationLoadingModal porcent={porcent} />}

      {openModal && (
        <Modal
          modalProps={openModal}
          handleCreateSelectDataset={handleCreateSelectDataset}
          handleCreateAllDatasets={handleCreateAllDatasets}
        />
      )}

      <FieldsMenu />
      <FormContent />
    </div>
  )
}

export default Home
