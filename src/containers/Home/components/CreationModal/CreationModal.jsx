import OptionsButton from "../OptionsButton";
import CreationLoading from "./components/CreationLoading";
import ConfigFormSection from "./components/ConfigFormSection";

const CreationModal = ({
  handleSubmit,
  handleCloseCreateModal,
  loading,
  porcent,
}) => {
  return (
    <>
      {loading && <CreationLoading porcent={porcent} />}
      <div className="fixed bg-black/50 w-screen min-h-screen top-0 left-0 flex items-center justify-center z-50">
        <div className="bg-white py-6 px-10 rounded-md w-[90%] max-w-[550px] min-h-[95%] flex flex-col gap-5 esm:w-[95%]">
          <div className="w-full flex esm:flex-col-reverse gap-10 esm:gap-5">
            <ConfigFormSection />
          </div>

          <OptionsButton
            handleCancel={handleCloseCreateModal}
            handleSubmit={handleSubmit}
            submitText={"Create"}
          />
        </div>
      </div>
    </>
  );
};

export default CreationModal;
