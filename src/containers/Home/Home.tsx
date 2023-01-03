import FieldsMenu from "./components/FieldsMenu/FieldsMenu";
import FormContent from "./components/FormContent/FormContent";
import Modal from "./components/Modal/Modal";
import { useHome } from "./hooks/useHome";

import "./home.css";

const Home = () => {
  const { openModal, handleOpenModal, handleCloseModal } = useHome();

  return (
    <div className="flex w-full h-screen">
      {openModal !== null && (
        <Modal props={openModal} handleCloseModal={handleCloseModal} />
      )}

      <FieldsMenu handleOpenModal={handleOpenModal} />
      <FormContent handleOpenModal={handleOpenModal} />
    </div>
  );
};

export default Home;
