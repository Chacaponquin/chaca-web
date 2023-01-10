import FieldsMenu from "./components/FieldsMenu/FieldsMenu"
import FormContent from "./components/FormContent/FormContent"
import Modal from "./components/Modal/Modal"
import CreationLoadingModal from "./components/CreationLoadingModal/CreationLoadingModal"
import { useHome } from "./hooks/useHome"

import "./home.css"

const Home = () => {
  const {
    openModal,
    handleOpenModal,
    handleCloseModal,
    handleCreateSelectDataset,
    handleCreateAllDatasets,
    createDataLoading,
    porcent,
  } = useHome()

  return (
    <div className='flex w-full h-screen'>
      {createDataLoading && <CreationLoadingModal porcent={porcent} />}

      {openModal !== null && (
        <Modal
          modalProps={openModal}
          handleCloseModal={handleCloseModal}
          handleCreateSelectDataset={handleCreateSelectDataset}
          handleCreateAllDatasets={handleCreateAllDatasets}
        />
      )}

      <FieldsMenu handleOpenModal={handleOpenModal} />
      <FormContent handleOpenModal={handleOpenModal} />
    </div>
  )
}

export default Home
